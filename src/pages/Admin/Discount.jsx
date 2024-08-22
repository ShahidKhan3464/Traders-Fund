import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import axios from 'axios';
import { Button } from '@mui/base';
import styled from 'styled-components';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import './Discount.css';
import Notification from '../../components/Notification';
import { showMissingFieldsError } from '../../utils/utils';

const Tab = styled.button`
  padding: 10px 10px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 8px;
  border: 1px solid gray;
  outline: 0;
  color: #3b3c3d;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    background: #6EFDEB;
    opacity: 1;
  `}
`;

const types = ['All', 'Active', 'Pending'];

const Discount = ({ admin, setAdmin }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [couponData, setCouponData] = useState([]);

  const [couponType, setCouponType] = useState('ACTIVE');
  const [validUser, setValidUser] = useState();
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [validCouponTime, setValidCouponTime] = useState('');
  const [discountCouponName, setDiscountCouponName] = useState('');
  const [discountCode, setDiscountCode] = useState('');
  const [assignUser, setAssignUser] = useState('');
  const [couponChallenge, setCouponChallenge] = useState([]);
  const [createNewCoupon, setCreateNewCoupon] = useState(true);
  const [keyForUpdate, setKeyForUpdate] = useState();
  const [notification, setNotification] = useState('');
  const [adminUserData, setAdminUserData] = useState([]);

  const handleModalOpen = () => {
    setCreateNewCoupon(true);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setKeyForUpdate();
    setCreateNewCoupon();
    setDiscountCouponName();
    setDiscountCode();
    setValidUser();
    setValidCouponTime();
    setCouponType();
    setCouponChallenge([]);
    setAssignUser();
    setDiscountPercentage();
  };

  const handleEditData = (val, key) => {
    setModalOpen(true);
    setKeyForUpdate(val.id);
    setCreateNewCoupon(false);
    setDiscountCouponName(val.name);
    setDiscountCode(val.code);
    setValidUser(val.validFor);
    setValidCouponTime(moment(val.validTill).format('YYYY-MM-DD'));
    setCouponType(val.status);
    setCouponChallenge(JSON.parse(val.challenge));
    setAssignUser(val?.user?.id);
    setDiscountPercentage(val.discountPercentage);
  };

  const fetchData = async () => {
    // try {
    //   const response = await axios.get(`${process.env.REACT_APP_PTF_API}/billing/get-all-discount-code`, { withCredentials: true });
    //   setCouponData(response.data);
    // } catch (error) {
    //   console.error('Error fetching user data:', error);
    // }
  };

  const fetchAdminUser = async () => {
    // try {
    //   const response = await axios.get(
    //     `${process.env.REACT_APP_PTF_API}/profile/get-admin-user`,
    //     {
    //       params: {
    //         role: 'Sales Representative'
    //       }
    //     },
    //     { withCredentials: true }
    //   );
    //   setAdminUserData(response.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  useEffect(() => {
    fetchAdminUser();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  // const handleDataStore = async () => {
  //   if (
  //     discountCouponName === '' ||
  //     discountCode === '' ||
  //     validUser === '' ||
  //     validCouponTime === '' ||
  //     couponType === '' ||
  //     couponChallenge === '' ||
  //     discountPercentage === ''
  //   ) {
  //     showMissingFieldsError(setNotification);
  //     return;
  //   }
  //
  //   if (validUser === 'limited' && couponChallenge === null) {
  //     showMissingFieldsError(setNotification);
  //     return;
  //   }
  //
  //   console.log(couponChallenge);
  //
  //   const data = {
  //     name: discountCouponName,
  //     code: discountCode,
  //     validFor: validUser,
  //     validTill: validCouponTime,
  //     status: couponType,
  //     challenge: validUser === 'all' ? null : couponChallenge,
  //     discountPercentage: discountPercentage,
  //     user: assignUser
  //   };
  //   console.log(data, '-==-=-=- data');
  //   try {
  //     if (createNewCoupon) {
  //       const response = await axios.post(`${process.env.REACT_APP_PTF_API}/billing/create-discount-coupon`, data, {
  //         withCredentials: true
  //       });
  //       if (response.data) {
  //         fetchData();
  //         setModalOpen(false);
  //         setKeyForUpdate();
  //         setCreateNewCoupon();
  //         setDiscountCouponName();
  //         setDiscountCode();
  //         setValidUser();
  //         setValidCouponTime();
  //         setCouponType();
  //         setCouponChallenge();
  //         setAssignUser();
  //         setDiscountPercentage();
  //         setNotification({ message: 'Coupon Created', type: 'success' });
  //       }
  //     } else {
  //       const response = await axios.put(
  //         `${process.env.REACT_APP_PTF_API}/billing/update-discount-coupon`,
  //         { id: keyForUpdate, ...data },
  //         {
  //           withCredentials: true
  //         }
  //       );
  //       if (response.data) {
  //         fetchData();
  //         setModalOpen(false);
  //         setKeyForUpdate();
  //         setCreateNewCoupon();
  //         setDiscountCouponName();
  //         setDiscountCode();
  //         setValidUser();
  //         setValidCouponTime();
  //         setCouponType();
  //         setCouponChallenge();
  //         setAssignUser();
  //         setDiscountPercentage();
  //         setNotification({ message: 'Coupon Updated', type: 'success' });
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };

  const handleCheckBox = e => {
    const { checked, value } = e.target;
    console.log({ checked, value });
    if (checked) {
      setCouponChallenge(curr => {
        return [...curr, value];
      });
    } else {
      const newData = couponChallenge?.filter(item => item !== value);
      setCouponChallenge(newData);
    }
  };
  console.log(couponChallenge, ';-=---=-==');

  setTimeout(() => {
    if (notification) {
      setNotification('');
    }
  }, [5000]);

  function TabGroup() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const [active, setActive] = useState(types[0]);
    const [invStatus, setInvStatus] = useState('All');

    return (
      <>
        <div className="flex flex-wrap mx-3 my-3 space-x-2 md:mx-0">
          {types.map(type => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => {
                setActive(type);
                setInvStatus(type);
              }}
            >
              {type}
            </Tab>
          ))}
        </div>
        <p />
        <div>
          {active === 'All' ? (
            <>
              <table className="w-full text-center">
                <tr className="border-b border-t border-gray-600 h-[60px]">
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="whitespace-nowrap">Discount Name</th>
                  <th>Code</th>
                  <th> Discount</th>
                  {/* <th>Status</th> */}
                  <th>Duration </th>
                  <th>Actions</th>
                </tr>
                {couponData.map((val, key) => {
                  return (
                    <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                      <td>
                        <input type="checkbox" name="" id="" />
                      </td>
                      <td>{val.name}</td>
                      <td>{val.code}</td>
                      <td>{val.discountPercentage}</td>
                      {/* <td>
                        <div>
                          {' '}
                          <div
                            className={`rounded-md py-2 px-4 flex justify-center items-center gap-2 ${
                              val.status === 'ACTIVE' ? 'text-mainColor bg-mainColor/20' : 'text-red-600 bg-red-500/20'
                            }`}
                          >
                            <p>{val.status}</p>
                          </div>
                        </div>
                      </td> */}
                      {/* <td>{moment(val.validTill).format('DD-MM-YYYY')}</td> */}
                      <td>{moment(val.validTill).diff(moment(), 'days')} Days</td>
                      <td>
                        <div className="cursor-pointer" onClick={e => handleEditData(val, key)}>
                          <EditIcon />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </>
          ) : null}
          {active === 'Active' ? <></> : null}
          {active === 'Pending' ? <></> : null}
        </div>
      </>
    );
  }

  setAdmin(true);
  return (
    <>
      <Dialog open={modalOpen} onClose={handleClose} className="create-coupon w-full max-w-full" style={{ width: '800px' }}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <span className="font-bold">{createNewCoupon ? 'Create New Coupon' : 'Update Coupon'}</span>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="flex">
              <div className="mr-2">
                <label> Discount Name:</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    onChange={e => setDiscountCouponName(e.target.value)}
                    value={discountCouponName ? discountCouponName : null}
                    type="text"
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0"
                    placeholder="Discount Name"
                  />
                </div>
              </div>
              <div>
                <label> Discount Code:</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    onChange={e => setDiscountCode(e.target.value)}
                    value={discountCode ? discountCode : null}
                    type="text"
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0"
                    placeholder="Discount Code"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label>Coupon Valid for</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <select
                    value={validUser ? validUser : null}
                    onChange={e => setValidUser(e.target.value)}
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0 w-full"
                  >
                    <option disabled selected>
                      Select a Coupon
                    </option>
                    <option value="all">All</option>
                    <option value="limited">Limited</option>
                  </select>
                </div>
              </div>
              <div className="mr-2">
                <label>Valid Till</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    onChange={e => setValidCouponTime(e.target.value)}
                    value={validCouponTime}
                    type="date"
                    className="mx-2 border-none outline-none focus:ring-0 focus:ring-offset-0 w-full bg-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label>Coupon Status</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <select
                    value={couponType ? couponType : null}
                    onChange={e => setCouponType(e.target.value)}
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0 w-full"
                  >
                    <option disabled selected>
                      Select a Coupon Status
                    </option>
                    <option value="ACTIVE">Active</option>
                    <option value="DEACTIVATE">Deactivate</option>
                  </select>
                </div>
              </div>
              <div className="mr-2">
                <label>Discount Percentage</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    onChange={e => setDiscountPercentage(e.target.value)}
                    value={discountPercentage ? discountPercentage : null}
                    placeholder="Discount Percentage"
                    type="number"
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <>
                <div className="mr-2">
                  <label>Sales Representative</label>
                  <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                    <select
                      placeholder="Select a Sales Representative"
                      value={assignUser ? assignUser : 'Select a Sales Representative'}
                      onChange={e => setAssignUser(e.target.value)}
                      className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0 w-full"
                    >
                      <option disabled selected>
                        Select a Sales Representative
                      </option>
                      {adminUserData.map(item => {
                        return <option value={item.id}>{item.fullname}</option>;
                      })}
                    </select>
                  </div>
                </div>
                {validUser === 'limited' && (
                  <div className="mr-2">
                    <label>Coupon Challenge</label>
                    <div className="items-center bg-white sm:w-[320px]  w-[280px] px-3  h-[40px]">
                      <div className="py-0.5 flex gap-x-1" style={{ width: '310px' }}>
                        <input
                          type="checkbox"
                          value="Pro Trader Challenge Phase 1"
                          onChange={e => handleCheckBox(e)}
                          checked={couponChallenge?.includes('Pro Trader Challenge Phase 1')}
                        />
                        <h6>Pro Trader Challenge Phase 1</h6>
                      </div>
                      <div className="py-0.5 flex gap-x-1" style={{ width: '310px' }}>
                        <input
                          type="checkbox"
                          value="Premium Pro Trader Challenge Phase 1"
                          onChange={e => handleCheckBox(e)}
                          checked={couponChallenge?.includes('Premium Pro Trader Challenge Phase 1')}
                        />
                        <h6>Premium Pro Trader Challenge Phase 1</h6>
                      </div>
                      <div className="py-0.5 flex gap-x-1" style={{ width: '310px' }}>
                        <input
                          type="checkbox"
                          value="Premium+ Instant Funding"
                          onChange={e => handleCheckBox(e)}
                          checked={couponChallenge?.includes('Premium+ Instant Funding')}
                        />
                        <h6>Premium+ Instant Funding</h6>
                      </div>
                    </div>
                  </div>
                )}
              </>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus className="px-4 py-2 text-xs font-bold leading-3 text-white bg-black rounded-md lg:text-sm">
            {createNewCoupon ? 'Create Coupon' : 'Update Coupon'}
          </Button>
        </DialogActions>
      </Dialog>
      <div className="mt-4 space-y-4 sm:mt-0">
        {/* SEARCH */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex justify-start items-center bg-secTheme sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
            <FiSearch></FiSearch>
            <input
              type="text"
              className="mx-2 bg-transparent border-none outline-none focus:ring-0 focus:ring-offset-0"
              placeholder="Search"
            />
          </div>
          {/* <div className="flex justify-start items-center gap-3 px-4 cursor-pointer whitespace-nowrap font-light border rounded-md w-[100px] h-[40px]">
            Status <BsChevronDown></BsChevronDown>
          </div> */}
        </div>
        {/* SEARCH */}
        <div className="mt-4 sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide overflow-y-scroll ">
          <div className="flex justify-between">
            <div>
              <p>Discount</p>
            </div>
            <div>
              <Button className="px-4 py-2 text-xs font-bold leading-3 text-black bg-white rounded-md lg:text-sm" onClick={handleModalOpen}>
                Add Coupon{' '}
              </Button>
            </div>
          </div>
          <TabGroup />
          <div className="flex flex-wrap items-center justify-center gap-4 mt-auto text-sm">
            <div className="flex items-center gap-4">
              <button className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Previous</button>
              <p>
                Page <span className="font-bold text-mainColor">1</span> of 10{' '}
              </p>
              <button className="bg-[#262729] p-2 rounded-lg justify-between md:w-[87px]">Next</button>
            </div>
            <p>
              Showing <span className="font-bold text-mainColor">1 - 4</span> from <span className="font-bold text-mainColor">40</span> data
            </p>
          </div>
        </div>
      </div>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </>
  );
};

export default Discount;
