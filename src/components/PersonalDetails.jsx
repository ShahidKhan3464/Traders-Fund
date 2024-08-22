import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const PersonalDetails = ({
  firstname,
  setfirstname,
  lastname,
  setlastname,
  idnumber,
  setidnumber,
  expDate,
  setExpDate,
  gender,
  setgender,
  email,
  setemail,
  number,
  setnumber,
  line1,
  setline1,
  line2,
  setline2,
  city,
  setcity,
  state,
  setstate,
  zipcode,
  setzipcode,
  selectedCountry,
  dob,
  setdob
}) => {
  return (
    <div className="my-4 space-y-4 personal-info">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">ID expiry date</p>
          <input
            type="date"
            value={expDate}
            onChange={e => setExpDate(e.target.value)}
            class="shadow-sm  rounded-lg h-[3rem] w-full p-4"
            placeholder="Enter id expiration date"
          ></input>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">ID number</p>

          <input
            type="text"
            value={idnumber}
            onChange={e => setidnumber(e.target.value)}
            class="shadow-sm  rounded-lg  p-4"
            placeholder="Enter id number"
          ></input>
        </div>
      </div>
      <br />
      <p className="text-xl">Personal details</p>
      <p className="text-sm font-light ">Please review and confirm that the following details are accurate.</p>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">First Name</p>
          <input
            type="text"
            class="shadow-sm  rounded-lg  p-4"
            placeholder="Enter first name"
            value={firstname}
            onChange={e => setfirstname(e.target.value)}
          ></input>
        </div>{' '}
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">Last Name</p>
          <input
            type="text"
            class="shadow-sm  rounded-lg   p-4"
            placeholder="Enter last name"
            value={lastname}
            onChange={e => setlastname(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <p className="text-sm text-[#344054]">Date of birth</p>
        <input
          type="date"
          value={dob}
          onChange={e => setdob(e.target.value)}
          class="shadow-sm  rounded-lg h-[3rem] w-full p-4"
          placeholder="Enter id expiration date"
        ></input>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div class="flex flex-col gap-2 flex-1">
          <p className="text-sm text-[#344054]">Gender</p>
          <div class="relative flex items-center after:border-black">
            <select
              required
              value={gender ? gender : null}
              onChange={e => setgender(e.target.value)}
              class="bg-white px-3 py-2 transition-all cursor-pointer border border-gray-200 rounded-lg flex-1 h-[44px] text-black"
            >
              <option disabled selected>
                Select a gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* <div className="flex flex-col md:w-[300px] w-full gap-2 flex-1">
          <p className="text-sm text-[#344054]">Date of Birth</p>
          <input
            type="date"
            class="shadow-sm  rounded-lg p-4 h-[3rem] w-full"
            placeholder="Enter date of birth"
          ></input>
        </div> */}
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col md:w-[300px] w-full gap-2 flex-1">
          <p className="text-sm text-[#344054]">Email</p>
          <input
            type="text"
            value={email}
            onChange={e => setemail(e.target.value)}
            class="shadow-sm  rounded-lg  p-4"
            placeholder="Enter email address"
          ></input>
        </div>
        <div className="flex flex-col md:w-[300px] w-full gap-2 flex-1">
          <p className="text-sm text-[#344054]">Phone Number</p>
          <div className="w-full px-2 bg-white border border-gray-300 rounded-lg shadow-sm">
            <PhoneInput placeholder="Eg-1-800-000-0000" value={number} onChange={setnumber} />
          </div>
        </div>
      </div>
      <br />
      <p className="text-xl">Place of residence</p>
      <p className="text-sm font-light ">
        To verify your identity, we kindly ask for your address information. This should be the address where your bank statement, bills etc
        are mailed to.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">Country</p>

          <input disabled type="text" value={selectedCountry} class="shadow-sm  rounded-lg  p-4"></input>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">Address line 1</p>

          <input
            type="text"
            value={line1}
            onChange={e => setline1(e.target.value)}
            class="shadow-sm  rounded-lg  p-4"
            placeholder=""
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">
            Address line 2 <span className="text-gray-400">(optional)</span>
          </p>

          <input
            type="text"
            value={line2}
            onChange={e => setline2(e.target.value)}
            class="shadow-sm  rounded-lg  p-4"
            placeholder=""
          ></input>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">City</p>

          <input type="text" value={city} onChange={e => setcity(e.target.value)} class="shadow-sm  rounded-lg  p-4" placeholder=""></input>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <p className="text-sm text-[#344054]">State/parish/providence/region</p>

          <input
            type="text"
            value={state}
            onChange={e => setstate(e.target.value)}
            class="shadow-sm  rounded-lg  p-4"
            placeholder=""
          ></input>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-2">
        <p className="text-sm text-[#344054]">Postal code</p>

        <input
          type="text"
          value={zipcode}
          onChange={e => setzipcode(e.target.value)}
          class="shadow-sm  rounded-lg  p-4"
          placeholder="0000"
        ></input>
      </div>
    </div>
  );
};

export default PersonalDetails;
