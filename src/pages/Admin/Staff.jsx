import React, { useEffect, useState } from 'react';
// import inivtes from '../../images/icons/invite icon.svg';
// import xcircle from '../../images/icons/x-circle.svg';
// import closed from '../../images/icons/closed icon.svg';
// import earned from '../../images/icons/earned icon.svg';
// import upload from '../../images/icons/upload-cloud-02.svg';
// import success from '../../images/icons/Success.svg';
// import uploadicon from '../../images/icons/fi_upload.svg';
// import download from '../../images/icons/fi_download.svg';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import { Button } from '@mui/base';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import Notification from '../../components/Notification';
import { showMissingFieldsError } from '../../utils/utils';

// const staffdata = [
//   {
//     id: '01',
//     name: 'Alexander Bendithe',
//     title: 'KYC Document Auditor',
//     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been, view more5'
//   },
//   {
//     id: '01',
//     name: 'Alexander Bendithe',
//     title: 'KYC Document Auditor',
//     description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been, view more5'
//   }
// ];

const Staff = ({ admin, setAdmin }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [createNewUser, setCreateNewUser] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [userData, setUserData] = useState([]);
  const [updateId, setUpdateId] = useState('');
  const [notification, setNotification] = useState('');

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.REACT_APP_PTF_API}/profile/get-admin-user`,
  //       {
  //         params: {
  //           role: [
  //             'Sales Representative',
  //             'Marketing Specialist',
  //             'Customer Service Representative',
  //             'System Administrator',
  //             'Data Analyst',
  //             'Accountant'
  //           ]
  //         }
  //       },
  //       { withCredentials: true }
  //     );
  //     setUserData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching user data:', error);
  //   }
  // };

  useEffect(() => {
    // fetchData();
  }, []);

  const handleModalOpen = () => {
    setCreateNewUser(true);
    setModalOpen(true);
  };
  const updateUser = async data => {
    // const response = await axios.put(
    //   `${process.env.REACT_APP_PTF_API}/profile/update-admin-user`,
    //   {
    //     id: data?.id,
    //     isActive: !data?.isActive,
    //     firstName: data?.fullname?.split(' ')[0],
    //     lastName: data?.fullname?.split(' ')[1]
    //   },
    //   { withCredentials: true }
    // );
    // if (response?.data) {
    //   fetchData();
    //   setNotification({ message: 'Status Updated', type: 'success' });
    // }
  };

  const handleClose = () => {
    setModalOpen(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setRole('');
    setPhoneNumber('');
  };

  // const handleDataStore = async () => {
  //   if (firstName === '' || lastName === '' || email === '' || phoneNumber === '' || role === '') {
  //     showMissingFieldsError(setNotification);
  //     return;
  //   }
  //   try {
  //     const data = {
  //       firstName,
  //       lastName,
  //       email,
  //       phoneNumber,
  //       role
  //     };
  //     if (createNewUser) {
  //       const response = await axios.post(`${process.env.REACT_APP_PTF_API}/profile/create-admin-user`, data, { withCredentials: true });
  //       if (response?.data) {
  //         fetchData();
  //         setModalOpen(false);
  //         setFirstName('');
  //         setLastName('');
  //         setEmail('');
  //         setRole('');
  //         setPhoneNumber('');
  //         setNotification({ message: 'User Created', type: 'success' });
  //       }
  //     } else {
  //       const response = await axios.put(
  //         `${process.env.REACT_APP_PTF_API}/profile/update-admin-user`,
  //         { id: updateId, ...data },
  //         { withCredentials: true }
  //       );
  //       if (response?.data) {
  //         fetchData();
  //         setModalOpen(false);
  //         setFirstName('');
  //         setLastName('');
  //         setEmail('');
  //         setRole('');
  //         setPhoneNumber('');
  //         setNotification({ message: 'User Updated', type: 'success' });
  //       }
  //     }
  //   } catch (err) {
  //     setNotification({ message: err.response.data.message, type: 'error' });
  //   }
  // };

  setTimeout(() => {
    if (notification) {
      setNotification('');
    }
  }, [5000]);

  const handleEditData = data => {
    setUpdateId(data?.id);
    setCreateNewUser(false);
    setModalOpen(true);
    setFirstName(data?.fullname?.split(' ')[0]);
    setLastName(data?.fullname?.split(' ')[0]);
    setEmail(data?.email);
    setPhoneNumber(data?.phoneNumber);
    setRole(data?.role);
  };

  setAdmin(true);
  return (
    <>
      <Dialog open={modalOpen} onClose={handleClose} className="create-coupon w-full max-w-full">
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <span className="font-bold">{createNewUser ? 'Add User' : 'Update User'}</span>
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
                <label> First Name:</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    required
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName ? firstName : null}
                    type="text"
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div>
                <label> Last Name:</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    required="required"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName ? lastName : null}
                    type="text"
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label> Email:</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    required="required"
                    onChange={e => setEmail(e.target.value)}
                    value={email ? email : null}
                    type="text"
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0"
                    placeholder="Email address"
                  />
                </div>
              </div>
              <div>
                <label>Role:</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <select
                    required
                    onChange={e => setRole(e.target.value)}
                    value={role ? role : null}
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0 w-full"
                  >
                    <option disabled selected>
                      Select a Role
                    </option>
                    <option value="Sales Representative">Sales Representative</option>
                    <option value="Marketing Specialist">Marketing Specialist</option>
                    <option value="Customer Service Representative">Customer Service Representative</option>
                    <option value="System Administrator">System Administrator</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="Accountant">Accountant</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-2">
                <label> Phone Number:</label>
                <div className="flex justify-start items-center bg-white sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
                  <input
                    required="required"
                    onChange={e => setPhoneNumber(e.target.value)}
                    value={phoneNumber ? phoneNumber : null}
                    type="text"
                    className="mx-2 bg-white border-none outline-none focus:ring-0 focus:ring-offset-0"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
            </div>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus className="px-4 py-2 text-xs font-bold leading-3 text-white bg-black rounded-md lg:text-sm">
            {createNewUser ? 'Create User' : 'Update User'}
          </Button>
        </DialogActions>
      </Dialog>
      <div className="mt-4 space-y-4 sm:mt-0">
        {/* SEARCH */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex justify-start items-center bg-secTheme sm:w-[320px]  w-[280px] px-3 rounded-md border border-[#3B3C3D] h-[40px]">
            <FiSearch></FiSearch>
            <input
              required="required"
              type="text"
              className="mx-2 bg-transparent border-none outline-none focus:ring-0 focus:ring-offset-0"
              placeholder="Search"
            />
          </div>
          <div className="flex justify-start items-center gap-3 px-4 cursor-pointer whitespace-nowrap font-light border rounded-md w-[100px] h-[40px]">
            Filter <BsChevronDown></BsChevronDown>
          </div>
        </div>
        {/* SEARCH */}
        {/* BUTTONS */}
        <div className="flex flex-wrap gap-3">
          {' '}
          <div className="flex justify-start items-center gap-3 px-4 cursor-pointer whitespace-nowrap font-light border rounded-md w-[100px] h-[40px]">
            Role <BsChevronDown></BsChevronDown>
          </div>
          <div className="flex justify-start items-center gap-3 px-4 cursor-pointer whitespace-nowrap font-light border rounded-md w-[100px] h-[40px]">
            Export
          </div>
          <div className="flex justify-start items-center gap-3 px-4 cursor-pointer whitespace-nowrap font-light border rounded-md w-[100px] h-[40px]">
            Delete
          </div>
          <div className="flex justify-start items-center gap-3 px-4 cursor-pointer whitespace-nowrap font-light border rounded-md w-[100px] h-[40px]">
            Cancel
          </div>
          {/* <div>
            <Button className="px-4 py-2 text-xs font-bold leading-3 text-black bg-white rounded-md lg:text-sm" onClick={handleModalOpen}>
              Add User
            </Button>
          </div> */}
        </div>

        {/* BUTTONS */}
        {/* TABLE */}
        <div className="mt-4 sm:mt-0 flex flex-col p-3 bg-secTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide overflow-y-scroll">
          <div className="flex justify-between mb-3">
            <div className="flex items-center">
              <div>Challenges</div>
            </div>
            <div>
              <Button className="px-4 py-2 text-xs font-bold leading-3 text-black bg-white rounded-md lg:text-sm" onClick={handleModalOpen}>
                Add User
              </Button>
            </div>
          </div>
          <table className="w-full text-center">
            <tr className="border-b border-t border-gray-600 h-[60px]">
              <th>Staff name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Action</th>
              <th>Active</th>
            </tr>

            {userData.map((val, key) => {
              return (
                <tr key={key} className="text-xs h-[60px] border-b border-gray-600">
                  <td>{val.fullname}</td>
                  <td>{val.email}</td>
                  <td>{val.phoneNumber}</td>
                  <td>{val.role ? val.role : '-'}</td>
                  <td>
                    <div className="cursor-pointer" onClick={e => handleEditData(val)}>
                      <EditIcon />
                    </div>
                  </td>
                  <td>
                    <Switch checked={val?.isActive} onChange={() => updateUser(val)} />
                  </td>
                </tr>
              );
            })}
          </table>
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
        {/* TABLE */}
      </div>
      {notification && <Notification message={notification.message} type={notification.type} />}
    </>
  );
};

export default Staff;
