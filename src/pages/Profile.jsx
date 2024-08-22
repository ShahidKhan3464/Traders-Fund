import React, { useEffect, useState } from 'react';
import KycStatusTable from '../components/KycStatusTable';
import TransactionsTable from '../components/TransactionsTable';
import 'react-phone-number-input/style.css';
import { GrClose } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import styled from 'styled-components';
import { useStore } from '../store';
import axios from 'axios';
import { showCustomError, showCustomSuccess, showSuccess } from '../utils/utils';
import Notification from '../components/Notification';
import { Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import Password from './profile/Password';
import {payoutRequestAdminAPI, getTradingListAdmin, getPayoutListAdmin,  getTradesListAPI, disableTwoFa, enableTwoFa, generateTwoFa, getProfile, getTwoFaStatus, updateUserCountry } from '../api';
import QRCode from 'react-qr-code';
import CountrySelector from '../components/CountrySelect';

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />;
});

const getKycStatusClassName = (status) => {
  if (status === 'APPROVED') return 'text-green-500';
  if (status === 'REJECTED') return 'text-red-500';
  return 'text-yellow-500';
};

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = theme => ({
  width: 400,
  bgcolor: '#141518',
  border: '1px solid currentColor',
  padding: '12px 24px',
  borderRadius: '8px'
});

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Tab = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 8px;
  border: 0;
  outline: 0;
  color: white;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    background: #3B3C3D;
    opacity: 1;
  `}
`;
const types = ['Profile', 'Password', 'Security'];

function TabGroup() {
  const { setUserData } = useStore();
  const [active, setActive] = useState(types[0]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [kycStatus, setKycStatus] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState({ value: 'US', label: '🇺🇸 United States' });
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [timezone, setTimezone] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [fullName, setFullName] = useState('');
  const { userData } = useStore();
  const [openAlert, setOpenAlert] = useState(false);
  const [index, setIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const [otpForVerify, setOtpForVerify] = useState('');
  const [openSecurity, setOpenSecurity] = useState(false);
  const [openAlertVerify, setOpenAlertVerify] = useState(false);
  const [loginHistories, setLoginHistories] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [newImageSet, setNewImageSet] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [notification, setNotification] = useState(null);
  const [userDataForTable, setUserDataForTable] = useState([]);
  const [userResponse, setUserResponse] = useState({});
  const [twoFaStatus, setTwoFaStatus] = useState(false);
  const [twoFaData, setTwoData] = useState(false);
  const [otpCode, setOtpCode] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClose = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PTF_API_V2}/auth/verify-totp`,
        {
          totp: otpForVerify
        },
        {
          withCredentials: true
        }
      );
      if (response.data.verified) {
        setIsTwoFactorEnabled(!isTwoFactorEnabled);
        setOpenSecurity(!openSecurity);
      }
      return response.data; // returns the response data
    } catch (error) {
      setOpenAlertVerify(true);
      console.error(`Error resetting password: ${error}`);
    }
    setOpen(false);
    setIndex(1);
  };
  const [securityIndex, setSecurityIndex] = useState(1);
  const handleSecurityOpen = () => setOpenSecurity(true);
  const handleSecurityClose = () => {
    setOpenSecurity(false);
    setSecurityIndex(1);
  };
  // Function to trigger hidden file input.
  const handleFileInputClick = () => {
    document.getElementById('fileInput').click();
  };

  // Function to handle file selection.
  const handleFileChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result); // Set the Data URL for preview
    };

    if (file) {
      reader.readAsDataURL(file);
      setSelectedImage(file); // Set the File object for uploading
    }

    setNewImageSet(true);
  };

  const resetPassword = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PTF_API_V2}/auth/reset-password`,
        {
          oldPassword,
          newPassword,
          confirmPassword
        },
        {
          withCredentials: true
        }
      );

      setOpenAlert(true);
      return response.data; // returns the response data
    } catch (error) {
      console.error(`Error resetting password: ${error}`);
    }
  };

  const getAuthToken = () => {
    const authToken = localStorage.getItem('authToken');
    return { Authorization: `Bearer ${authToken}` };
  };

  const checkTwoFa = async () => {
    try {
      const twoResponse = await getTwoFaStatus();
      setTwoFaStatus(twoResponse.twoFaStatus);
      if (!twoResponse.twoFaStatus) {
        await generateTwoFaDetails();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  const generateTwoFaDetails = async () => {
    try {
      const twoResponse = await generateTwoFa();
      setTwoData(twoResponse);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const userData = await getProfile();
        setUserData(userData);
        setPhoneNumber(userData.phone);
        setUserResponse(userData);
        if (userData?.country) {
          setCountry(userData?.country);
        }
        if (userData?.kycStatus) {
          setKycStatus(userData.kycStatus);
        }
        await checkTwoFa();
      } catch (error) {
        console.log('Error', error);
      }
    })();
  }, []);

  const updateProfile = async () => {
    try {
      let photo;
      if (newImageSet) {
        const formData = new FormData();
        formData.append('profileImage', selectedImage); // the name "profileImage" should match the server expectation

        // Upload the image to server
        const imageResponse = await axios.post(`${process.env.REACT_APP_PTF_API_V2}/profile/upload-image`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          withCredentials: true
        });

        // Get image URL from response
        photo = imageResponse.data.url;
        console.log(photo);
      }

      photo = previewImage;

      const profileData = {
        name,
        lastName,
        emailAddress,
        password,
        phoneNumber,
        country,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        timezone,
        username,
        bio,
        photo
      };

      const response = await axios.put(
        `${process.env.REACT_APP_PTF_API_V2}/profile/update-profile`,
        {
          profile: profileData
        },
        { withCredentials: true }
      );

      showSuccess(setNotification);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeAuthentication = async e => {
    const enableAuthentication = await axios.post(
      `${process.env.REACT_APP_PTF_API_V2}/auth/enable-2fa`,
      {},
      {
        withCredentials: true
      }
    );
    if (!enableAuthentication.data.status) {
      setIsTwoFactorEnabled(false);
      setOpenSecurity(!openSecurity);
    }
    setIsTwoFactorEnabled(false);
  };

  const otpOnChange = e => {
    //replace non-digits with blank
    const value = e.target.value.replace(/[^\d]/, '');
    if (parseInt(value) !== 0) {
      if (String(value).length <= 6) {
        setOtpCode(value);
      }
    }
  };

  const onChangeCountry = async country => {
    if (country?.value) {
      setCountry(country?.value);
      try {
        const response = await updateUserCountry({ country: country?.value });
        if (response.statusCode === 201) {
          showCustomSuccess(setNotification, response.message);
        }
      } catch (error) {
        showCustomError(setNotification, `Failed to update user country`);
      }
    }
  };

  const handleTwoFaOperation = async event => {
    setIsProcessing(true);
    try {
      let response;
      if (twoFaStatus) {
        response = await disableTwoFa({
          code: otpCode
        });
      } else {
        response = await enableTwoFa({
          code: otpCode
        });
      }
      if (response) {
        setOtpCode('');
        showCustomSuccess(setNotification, response.message);
        await checkTwoFa();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        showCustomError(setNotification, error.response.data.message);
      } else {
        showCustomError(setNotification, error.message);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <button className="flex flex-wrap justify-start items-center sm:mx-3 mx-0 my-3 p-1 space-x-2 md:mx-0 bg-[#1C1D20] rounded-lg w-auto">
        {types.map(type => (
          <Tab key={type} active={active === type} onClick={() => setActive(type)}>
            {type}
          </Tab>
        ))}
      </button>
      <p />
      <div className="text-white">
        {active === 'Profile' ? (
          <>
            <Modal
              aria-labelledby="unstyled-modal-title"
              aria-describedby="unstyled-modal-description"
              open={open}
              onClose={handleClose}
              slots={{ backdrop: Backdrop }}
              onClick={handleClose}
            >
              <Box sx={style} className="space-y-3" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                  <p></p>
                  <button
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <GrClose></GrClose>
                  </button>
                </div>
                <div className="flex flex-col gap-2 ">
                  <label className="text-sm font-light text-left" htmlFor="oldPassword">
                    Enter Old Password
                  </label>
                  <div className="flex flex-col justify-center w-full">
                    <input
                      type="password"
                      className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                      placeholder="Enter old password"
                      id="oldPassword"
                      value={oldPassword}
                      onChange={e => setOldPassword(e.target.value)}
                    />
                  </div>
                  <label className="text-sm font-light text-left" htmlFor="newPassword">
                    Enter New Password
                  </label>
                  <div className="flex flex-col justify-center w-full">
                    <input
                      type="password"
                      className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                      placeholder="Enter new password"
                      id="newPassword"
                      value={newPassword}
                      onChange={e => setNewPassword(e.target.value)}
                    />
                  </div>
                  <label className="text-sm font-light text-left" htmlFor="confirmPassword">
                    Confirm New Password
                  </label>
                  <div className="flex flex-col justify-center w-full">
                    <input
                      type="password"
                      className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                      placeholder="Confirm new password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button onClick={resetPassword}>Reset Password</button>
                <button className="bg-[#00A4E6] text-white w-full py-3 rounded-md" onClick={handleClose}>
                  Change
                </button>
              </Box>
            </Modal>
            <div className="my-2 flex flex-col border border-[#3B3C3D] py-8 w-auto rounded-lg px-3 space-y-3">
              {/*<div className="flex w-full gap-4 pb-4 border-b border-gray-600">
                        <button
                            className="flex items-center gap-2 px-4 py-2 text-black bg-white rounded-md">Cancel
                        </button>
                        <button
                            className="flex items-center gap-2 p-2 rounded-md bg-[#00A4E6] hover:bg-blue-600"
                            onClick={updateProfile}>
                            Save changes
                        </button>
                    </div>*/}
              {/*<div className="flex w-full gap-4 pb-4 border-b border-gray-600">
                        <div
                            className="flex flex-col lg:w-[80%] w-full items-center justify-between gap-5 md:flex-row">
                            <div className="lg:w-[30%] w-full">
                                <p>Your photo</p>
                                <p className="text-sm leading-5 text-gray-300">This will be displayed on your
                                    profile.</p>
                            </div>
                            <div className="lg:w-[60%] w-full">
                                <div className="w-[64px] aspect-square rounded-full overflow-hidden">
                                    {previewImage ? (<img src={previewImage} alt=""
                                                          className="object-cover h-full overflow-hidden"/>) : (
                                        <div
                                            className="w-16 h-16 border-radius: 50% flex justify-center items-center bg-white text-black	text-2xl">
                                            {name.slice(0, 1) + lastName.slice(0, 1)}
                                        </div>)}
                                </div>
                            </div>
                        </div>
                        <div className="space-x-3 text-sm">
                            <button className="text-red-600">Remove</button>
                            <button className="text-mainBlue" onClick={handleFileInputClick}>
                                Change
                            </button>
                            <input type="file" id="fileInput" style={{display: 'none'}} accept="image/*"
                                   onChange={handleFileChange}/>
                        </div>
                    </div>*/}
              {/*<div className="w-full gap-4 pb-4 border-b border-gray-600">
                        <div
                            className="flex flex-col lg:w-[80%] w-full  items-center justify-between gap-5 md:flex-row">
                            <p>Client ID</p>
                            <input
                                disabled
                                type="text"
                                className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] lg:w-[60%] w-full "
                                value={username}
                                onChange={e => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                    </div>*/}
              <div className="w-full gap-4 pb-4 border-b border-gray-600">
                <div className="flex flex-col lg:w-[80%] w-full  items-center justify-between gap-5 md:flex-row">
                  <p>Full name</p>
                  <input
                    type="text"
                    disabled={true}
                    className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] lg:w-[60%] w-full "
                    value={`${userResponse?.firstName} ${userResponse?.lastName}`}
                    onChange={e => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full gap-4 pb-4 border-b border-gray-600">
                <div className="flex flex-col lg:w-[80%] w-full  items-center justify-between gap-5 md:flex-row">
                  <p>Phone number</p>
                  <div className="lg:w-[60%] w-full  space-y-1">
                    <input
                      type="text"
                      className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full "
                      value={phoneNumber}
                      disabled={true}
                      onChange={e => setPhoneNumber(e.target.value)}
                    />
                    {/*<div className="space-x-3 text-sm ">
                                    <button className="text-red-600 ">Remove</button>
                                    <button className=" text-mainBlue">Add new</button>
                                </div>*/}
                  </div>
                </div>
              </div>
              <div className="w-full gap-4 pb-4 border-b border-gray-600">
                <div className="flex flex-col lg:w-[80%] w-full  items-center justify-between gap-5 md:flex-row">
                  <div className="lg:w-[30%] w-full  ">
                    <p>Email address</p>
                    {/*<p className="text-sm leading-5 text-gray-300">
                                    Add an alternative email if you’d like to be contacted via a different
                                    email.
                                </p>*/}
                  </div>
                  <div className="lg:w-[60%] w-full  space-y-1">
                    <input
                      type="text"
                      disabled={true}
                      className="bg-transparent rounded-md px-2 h-[40px] w-full "
                      value={userResponse.email}
                      onChange={e => setEmailAddress(e.target.value)}
                    />
                    {/*<div className="space-x-3 text-sm ">
                                    <button className="text-red-600 ">Remove</button>
                                    <button className=" text-mainBlue">Add new</button>
                                </div>*/}
                  </div>
                </div>
              </div>
              <div className="w-full gap-4 pb-4 border-b border-gray-600">
                <div className="flex flex-col lg:w-[80%] w-full  items-center justify-between gap-5 md:flex-row">
                  <div className="lg:w-[30%] w-full  ">
                    <p>Country</p>
                  </div>
                  <div className="lg:w-[60%] w-full  space-y-1">
                    <CountrySelector isDarkMode={true} onChange={onChangeCountry} value={country} />
                    {/*<div className="space-x-3 text-sm ">
                                    <button className="text-red-600 ">Remove</button>
                                    <button className=" text-mainBlue">Add new</button>
                                </div>*/}
                  </div>
                </div>
              </div>
              <div className="w-full gap-4 pb-4 border-b border-gray-600">
                <div className="flex flex-col lg:w-[80%] w-full items-center justify-between gap-5 md:flex-row">
                  <div className="lg:w-[30%] w-full">
                    <p>KYC Verification Status</p>
                  </div>
                  <div className="lg:w-[60%] w-full space-y-1">
                    <input
                      type="text"
                      className={`bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full ${getKycStatusClassName(kycStatus)}`}
                      value={kycStatus}
                      disabled={true}
                      onChange={e => setKycStatus(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/*<div className="w-full gap-4 pb-4 ">
                        <div
                            className="flex flex-col lg:w-[80%] w-full  items-start justify-between gap-5 md:flex-row">
                            <div className="lg:w-[30%] w-full ">
                                <p>Your bio</p>
                                <p className="text-sm leading-5 text-gray-300">Write a short introduction.</p>
                            </div>
                            <div className="lg:w-[60%] w-full  space-y-1">
                                <p>Description</p>
                                <textarea
                                    value={bio}
                                    className="w-full p-3 bg-transparent border border-gray-600 rounded-md h-[140px]"
                                    placeholder="Add a short bio"
                                    onChange={e => setBio(e.target.value)}
                                ></textarea>
                                <div className="space-x-3 text-sm ">
                                    <p className="font-light text-gray-300">0/400 characters</p>
                                </div>
                            </div>
                        </div>
                    </div>*/}
            </div>
            {/*<div>
                    <br/>
                    <h1>Assigned Coupon</h1>
                    <table className="w-full text-center">
                        <tr className="border-b border-t border-gray-600 h-[60px]">
                            <th>
                                <input type="checkbox" name="" id=""/>
                            </th>
                            <th>Name</th>
                            <th>Coupon Code</th>
                            <th>Discount Percentage</th>
                            <th>Valid For</th>
                            <th>Valid Till</th>
                             <th>Status</th>
                        </tr>
                        {userDataForTable.map((val, key) => {
                            return (<tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                                <td>
                                    <input type="checkbox" name="" id=""/>
                                </td>
                                <td>{val.name}</td>
                                <td>{val.code}</td>
                                <td>{val.discountPercentage}</td>
                                <td>{val.validFor}</td>
                                <td>{moment(val.validTill).diff(moment(), 'days')} Days</td>
                                <td>
                                    <div>
                                        {' '}
                                        <div
                                            className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${val.status === 'ACTIVE' ? 'text-mainColor bg-mainColor/20' : 'text-red-600 bg-red-500/20'}`}
                                        >
                                            <p>{val.status}</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>);
                        })}
                    </table>
                </div>*/}
          </>
        ) : null}
        {active === 'Payment' ? (
          <div className="my-2 flex flex-col  border border-[#3B3C3D] py-8 w-auto rounded-lg px-3 space-y-5">
            ROW
            <div className="w-full gap-4 pb-4 border-b border-gray-600">
              <div className="flex flex-col lg:w-[80%] w-full  lg:items-start items-center justify-between gap-5 md:flex-row">
                <div className="lg:w-[30%] w-full ">
                  <p>Invoicing</p>
                  <p className="text-sm leading-5 text-gray-300">Where should invoices be sent?</p>
                </div>
                <div className="lg:w-[60%] w-full space-y-1">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <p>
                        Send to my account email <br />
                        <span className="font-light text-gray-400">Pajamabillionaire@email.com</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1" />
                      <p>Send to other email</p>
                    </div>
                  </div>
                  <input type="text" className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full " value="" />
                </div>
              </div>
            </div>
            ROW
            <div className="w-full gap-4 pb-4 border-b border-gray-600">
              <div className="flex flex-col lg:w-[80%] w-full  lg:items-start items-center justify-between gap-5 md:flex-row">
                <div className="lg:w-[30%] w-full ">
                  <p>Card payment method</p>
                  <p className="text-sm leading-5 text-gray-300">Select default card</p>
                </div>
                <div className="lg:w-[60%] w-full space-y-8 ">
                  <button className="text-mainBlue">+ Add new card</button>
                </div>
              </div>
            </div>
            ROW
            <div className="w-full gap-4 pb-4 border-b border-gray-600">
              <div className="flex flex-col lg:w-[80%] w-full  lg:items-start items-center justify-between gap-5 md:flex-row">
                <div className="lg:w-[30%] w-full ">
                  <p>Bank account</p>
                  <p className="text-sm leading-5 text-gray-300">Select default bank account</p>
                </div>
                <div className="lg:w-[60%] w-full space-y-8 ">
                  <button className="text-mainBlue">+ Add new bank account</button>
                </div>
              </div>
            </div>
            ROW
            <div className="w-full gap-4 pb-4 border-b border-gray-600">
              <div className="flex flex-col lg:w-[80%] w-full  lg:items-start items-center justify-between gap-5 md:flex-row">
                <div className="lg:w-[30%] w-full ">
                  <p>Wallet address</p>
                  <p className="text-sm leading-5 text-gray-300">Select default wallet address</p>
                </div>
                <div className="lg:w-[60%] w-full space-y-8 ">
                  <button className="text-mainBlue">+ Add wallet address</button>
                </div>
              </div>
            </div>
            <TransactionsTable></TransactionsTable>
          </div>
        ) : null}
        {active === 'Password' ? <Password /> : null}
        {active === 'Security' ? (
          <>
            <Modal
              aria-labelledby="unstyled-modal-title"
              aria-describedby="unstyled-modal-description"
              open={openSecurity}
              onClose={handleSecurityClose}
              slots={{ backdrop: Backdrop }}
              onClick={handleSecurityClose}
            >
              <Box sx={style} className="space-y-3 text-white" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between text-white">
                  <p className="font-light text-left">2-Factor Authentication</p>
                  <button
                    onClick={() => {
                      handleSecurityClose();
                    }}
                  >
                    <AiOutlineClose className="text-xl"></AiOutlineClose>
                  </button>
                </div>
                <div className="flex flex-col gap-2 ">
                  <p className="mt-5 text-xl">Verify it’s you</p>
                  <p className="text-sm font-light text-left text-gray-200">Please enter the 6-digits code we’ve sent to {emailAddress}</p>
                  <div className="flex flex-col justify-center w-full space-y-1">
                    <p className="text-sm font-light text-left">Enter code here</p>
                    <input
                      onChange={e => setOtpForVerify(e.target.value)}
                      type="text"
                      className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full"
                      placeholder="6-digits code"
                    />
                  </div>
                </div>
                {openAlertVerify && (
                  <Alert
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpenAlertVerify(false);
                        }}
                      >
                        {' '}
                        <CloseIcon fontSize="inherit" />{' '}
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    {' '}
                    Invalid OTP{' '}
                  </Alert>
                )}
                <button className="bg-[#00A4E6] text-white w-full py-3 rounded-md" onClick={handleClose}>
                  Verify
                </button>
                <p className="text-sm font-light text-center cursor-pointer text-mainBlue">Resend code</p>
              </Box>
            </Modal>
            <div className="my-2 flex flex-col border border-[#3B3C3D] py-8 w-auto rounded-lg px-3 space-y-3">
              <div className="flex w-full gap-4 text-center">
                <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row">
                  <div className="w-full gap-4">
                    <p>Two-factor Authentication</p>
                    <p className="text-sm leading-5 text-gray-300">Add another layer of security to your account with this feature.</p>
                    {twoFaData && !twoFaStatus && (
                      <>
                        <div
                          className="pt-5"
                          style={{
                            height: 'auto',
                            margin: '0 auto',
                            maxWidth: 200,
                            width: '100%'
                          }}
                        >
                          <QRCode
                            size={256}
                            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                            value={twoFaData.url}
                            viewBox={`0 0 256 256`}
                          />
                        </div>
                        <p className="text-sm leading-5 text-gray-300 pt-5">
                          Scan above QR code in Google Authenticator App / Authy App / Any Two-Factor Authentication Supported App
                        </p>
                      </>
                    )}
                    <div className="flex flex-col pt-5 w-full items-center">
                      <input
                        value={otpCode}
                        onChange={otpOnChange}
                        placeholder="Enter 6-digits code"
                        type="text"
                        className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] lg:w-[20%] w-full text-center"
                      />
                    </div>
                    <div className="flex justify-center w-full gap-4 pt-4 mr-auto">
                      <button
                        onClick={event => handleTwoFaOperation(event)}
                        className={`flex items-center gap-2 px-4 rounded-md py-2 text-sm ${!twoFaStatus ? 'bg-[#00A4E6]' : 'bg-red-600'}`}
                      >
                        {!twoFaStatus ? 'Enable' : 'Disabled'}
                      </button>
                    </div>
                  </div>
                  {/*<Switch checked={isTwoFactorEnabled} {...label}
                                    onChange={e => handleChangeAuthentication(e)}/>*/}
                </div>
              </div>
              {/* ROW */}
              {/*<div className="w-full gap-4 pb-4 border-b border-gray-600">
                        <div
                            className="flex flex-col items-center justify-between w-full gap-5 md:items-start md:flex-row">
                            <div className="lg:w-[30%] w-full">
                                <p>Text messages</p>
                                <p className="text-sm leading-5 text-gray-300">
                                    Receive verification codes via SMS. <br/> <span className="text-xs">Standard messaging rates may apply.</span>
                                </p>
                            </div>

                            <div
                                className="lg:w-[60%] w-full  space-y-1 flex md:items-start items-center justify-between">
                                <div className="lg:w-[80%] w-full space-y-8">
                                    <div>
                                        <input type="text"
                                               className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full "/>
                                        <div className="space-x-3 text-sm ">
                                            <button className="text-red-600 ">Remove</button>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text"
                                               className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full "/>
                                        <div className="space-x-3 text-sm ">
                                            <button className="text-red-600 ">Remove</button>
                                            <button className=" text-mainBlue">Add new</button>
                                            <button className=" text-mainBlue">Set as default</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Switch {...label} defaultChecked/>
                                </div>
                            </div>
                        </div>
                    </div>
                     ROW
                    <div className="w-full gap-4 pb-4 border-b border-gray-600">
                        <div
                            className="flex flex-col items-center justify-between w-full gap-5 md:items-start md:flex-row">
                            <div className="lg:w-[30%] w-full">
                                <p>Emails</p>
                                <p className="text-sm leading-5 text-gray-300">
                                    Receive verification codes via email
                                    <br/>
                                </p>
                            </div>

                            <div
                                className="lg:w-[60%] w-full  space-y-1 flex md:items-start items-center justify-between">
                                <div className="lg:w-[80%] w-full space-y-8">
                                    <div>
                                        <input type="text"
                                               className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full "/>
                                        <div className="space-x-3 text-sm ">
                                            <button className="text-red-600 ">Remove</button>
                                        </div>
                                    </div>
                                    <div>
                                        <input type="text"
                                               className="bg-transparent border-gray-600 border rounded-md px-2 h-[40px] w-full "/>
                                        <div className="space-x-3 text-sm ">
                                            <button className="text-red-600 ">Remove</button>
                                            <button className=" text-mainBlue">Add new</button>
                                            <button className=" text-mainBlue">Set as default</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Switch {...label} />
                                </div>
                            </div>
                        </div>
                    </div>*/}
            </div>
          </>
        ) : null}
        {active === 'Notifications' ? (
          <>
            <div className="my-2 flex flex-col  border border-[#3B3C3D] py-8 w-auto rounded-lg px-3 space-y-3">
              <div className="w-full pb-4 space-y-1 border-b border-gray-600">
                <p>Notification</p>
                <p className="font-light text-gray-300">
                  We may still send you important notifications about your account outside of your notification settings.
                </p>
              </div>
              <div className="flex border-b border-gray-600">
                <div className="w-[300px]">
                  <p>Comments</p>
                  <p className="text-sm font-light text-gray-300">These are notifications for comments on your account & more.</p>{' '}
                </div>{' '}
                <div className="w-[80%]">
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Push</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Email</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>SMS</p>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-gray-600">
                <div className="w-[300px]">
                  <p>Reminders</p>
                  <p className="text-sm font-light text-gray-300">
                    These are notifications to remind you of updates you might have missed.
                  </p>{' '}
                </div>{' '}
                <div className="w-[80%]">
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Push</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Email</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>SMS</p>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-gray-600">
                <div className="w-[300px]">
                  <p>Payment due dates</p>
                  <p className="text-sm font-light text-gray-300">
                    Receive an email notification whenever a payment due date is close.
                  </p>{' '}
                </div>{' '}
                <div className="w-[80%]">
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Push</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Email</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>SMS</p>
                  </div>
                </div>
              </div>
              <div className="flex border-b border-gray-600">
                <div className="w-[300px]">
                  <p>Enable Pop-up Notifications</p>
                  <p className="text-sm font-light text-gray-300">
                    These are notifications to remind you of updates you might have missed.
                  </p>{' '}
                </div>{' '}
                <div className="w-[80%]">
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Push</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>Email</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Switch {...label} defaultChecked /> <p>SMS</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {active === 'Document (KYC)' ? <KycStatusTable></KycStatusTable> : null}
      </div>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </>
  );
}

export default function Profile({ activeNav, setActiveNav }) {
  useEffect(() => {
    setActiveNav(true);
    window.scrollTo(0, 0);
  }, []);

  return <TabGroup />;
}
