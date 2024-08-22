import React, { useState } from "react";
import styled from "styled-components";

// react-calendar
// https://www.npmjs.com/package/react-calendar
// import Calendar from "react-calendar";

import deleteIcon from "../images/icons/delete.svg";
import idfront from "../images/idfront.png";
import idback from "../images/idback.png";
import idselfie from "../images/idselfie.png";
import close from "../images/icons/closedocbtn.svg";

import "./VerificationReview.css";
const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 270%;
  background: rgba(0, 0, 0, 0.05);
  z-index: 500;
  border-radius: 20px;
`;

const VerificationReview = ({
  datevalue,
  setdatevalue,
  dateOpen,
  setDateOpen,
  closeModal,
  firstname,
  setfirstname,
  lastname,
  setlastname,
  fullname,
  setfullname,
  address,
  number,
  setnumber,
  dobvalue,
  setdobvalue,
  dobOpen,
  setdobOpen,
  email,
  setemail,
  fullDate,
  selectedDocument,
  selectedCountry,
  setSelectedCountry,
  continueBtn,
  sigImage,
  male,
  setMale,
  female,
  setFemale,
  idnumber,
  setidnumber,
  line1,
  setline1,
  line2,
  setline2,
  state,
  setstate,
  zipcode,
  setzipcode,
  city,
  setcity,
}) => {
  return (
    <ModalContainer>
      <div className="cpm">
        <div className="signature-modal">
          <div className="cpm-container">
            <div className="cpm-top">
              <h2>KYC Verification Review</h2>

              <div className="close-cpm" onClick={() => closeModal(false)}>
                <img src={deleteIcon} alt="" />
              </div>
            </div>
            <p className="text-xs md:text-sm">
              To avoid delays during our KYC verification process, please make
              sure that the name, Government-Issued ID Number, Type, and
              signature on your Customer Agreement document all match what
              appears on your Government-Issued ID. <br /> <br /> Please also
              ensure that the information entered in the Customer Agreement form
              is consistent with what appears on your Government-Issued ID.
            </p>
            <br />
            <p className="text-xs text-red-600 md:text-sm">
              Do not upload blurry, low quality, expired documents or incorrect
              information. All information MUST match. Thank you for your
              cooperation.
            </p>
            <div className="enter-amount">
              <div className="enter-amt-top-row">
                <p>Registration info</p>
              </div>
            </div>
            <div className="reg-info-box">
              <div className="reg-info-row">
                <p>Full Name:</p>
                <span>
                  {firstname} {lastname}
                </span>
              </div>
              <div className="reg-info-row">
                <p>Email Address:</p>
                <span>{email}</span>
              </div>
              <div className="reg-info-row">
                <p>Phone Number:</p>
                <span>{number}</span>
              </div>
              <div className="reg-info-row">
                <p>Gender:</p>
                <span>{male ? "Male" : "Female"}</span>
              </div>
              <div className="reg-info-row">
                <p>Date of Birth:</p>
                <span>
                  {/* {dobvalue ? moment(dobvalue).format("MMMM Do YYYY") : null} */}
                </span>
              </div>
              <div className="reg-info-row col">
                <p>Government-Issued ID:</p>
                <span>
                  <b>Type:</b> {selectedDocument} <br />
                  <b>Number:</b> {idnumber} <br />
                  <b>Expiry Date:</b>{" "}
                  {/* {datevalue ? moment(datevalue).format("MMMM Do YYYY") : null} */}
                </span>
              </div>

              <div className="reg-info-row col">
                <p>Address:</p>
                <span>
                  {line1}, {line2}, <br />
                  {city}, {state}, {zipcode} <br />
                  {selectedCountry}{" "}
                </span>
              </div>
            </div>
            <div className="enter-amount">
              <div className="enter-amt-top-row">
                <p>Step 1: Proof of Government-Issued ID</p>
                <span>{selectedDocument}</span>
              </div>
            </div>
            <div className="review-id">
              {selectedDocument === "Passport" ? (
                <div className="id-img center">
                  <img src={idfront} alt="" />
                  <p>Front Side</p>
                </div>
              ) : (
                <>
                  {" "}
                  <div className="id-img">
                    <img src={idfront} alt="" />
                    <p>Front Side</p>
                  </div>
                  <div className="id-img">
                    <img src={idback} alt="" />
                    <p>Back Side</p>
                  </div>
                </>
              )}
            </div>
            <div className="enter-amount">
              <div className="enter-amt-top-row">
                <p>Step 2: Selfie Holding Government-Issued ID Beside Face</p>
              </div>
            </div>
            <div className="review-selfie">
              <img src={idselfie} alt="" />
            </div>

            <div className="enter-amount">
              <div className="enter-amt-top-row">
                <p>Step 3: Apex E-Commerce Services Customer Agreement</p>
              </div>
            </div>
            <div className="verification-agreement-box">
              <div className="pdf">
                {/* PAGE 1 */}
                <div className="pdfpage">
                  <div className="pdf-top">
                    <div className="agreement-row">
                      <p>
                        <b>Client’s Personal Information</b>
                      </p>
                    </div>

                    <div className="agreement-row">
                      <p>First Name:</p>
                      <span>
                        <input
                          type="text"
                          value={firstname}
                          placeholder="Enter your first name here"
                          onChange={(e) => setfirstname(e.target.value)}
                          style={{ width: `${firstname.length}ch` }}
                        />
                      </span>
                    </div>
                    <div className="agreement-row">
                      <p>Last Name:</p>
                      <span>
                        <input
                          type="text"
                          value={lastname}
                          placeholder="Enter your last name here"
                          onChange={(e) => setlastname(e.target.value)}
                          style={{ width: `${lastname.length}ch` }}
                        />
                      </span>
                    </div>

                    <div className="agreement-name-row agreement-row">
                      <p>Gender:</p>
                      <div className="agreement-row">
                        <span>
                          <input
                            type="checkbox"
                            onChange={() => {
                              setMale(true);
                              setFemale(false);
                            }}
                            checked={male ? true : false}
                          />

                          <p>Male</p>
                        </span>
                        <span>
                          <input
                            type="checkbox"
                            onChange={() => {
                              setFemale(true);
                              setMale(false);
                            }}
                            checked={female ? true : false}
                          />
                          <p>Female</p>
                        </span>
                      </div>
                    </div>
                    <div className="agreement-row">
                      <div className="agreement-row">
                        <p>Date of Birth:</p>
                        <span className="relative">
                          <div className="flex">
                            <input
                              type="text"
                              value={dobvalue}
                              placeholder="Month-Day-Year"
                              // onChange={(e) => setdob(e.target.value)}
                              // style={{ width: `${dob.length}ch` }}
                              onClick={() => setdobOpen(!dobOpen)}
                            />
                            <img
                              src={close}
                              alt=""
                              onClick={() => setdobOpen(false)}
                            />
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="agreement-row">
                      <div className="agreement-row">
                        <p>Phone Number: </p>
                        <span>
                          <input
                            type="text"
                            value={number}
                            placeholder="Enter your phone number"
                            onChange={(e) => setnumber(e.target.value)}
                            style={{ width: `${address.length}ch` }}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="agreement-row">
                      <div className="agreement-row">
                        <p>Enter Email Address:</p>
                        <span>
                          <input
                            type="text"
                            value={email}
                            placeholder="Enter your email address"
                            onChange={(e) => setemail(e.target.value)}
                            style={{ width: `${email.length}ch` }}
                          />
                        </span>
                      </div>
                    </div>

                    <div className="agreement-row">
                      <p>
                        <b>Address</b>
                      </p>
                    </div>

                    <div className="agreement-row">
                      <p>Line 1 :</p>
                      <span>
                        <input
                          type="text"
                          value={line1}
                          onChange={(e) => setline1(e.target.value)}
                          style={{ width: `${line1.length}ch` }}
                        />
                      </span>
                    </div>

                    <div className="agreement-row">
                      <p>Line 2 :</p>
                      <span>
                        <input
                          type="text"
                          value={line2}
                          placeholder="{optional apt # etc}"
                          onChange={(e) => setline2(e.target.value)}
                          style={{ width: `${line2.length}ch` }}
                        />
                      </span>
                    </div>

                    <div className="agreement-row">
                      <p>City :</p>
                      <span>
                        <input
                          type="text"
                          value={city}
                          onChange={(e) => setcity(e.target.value)}
                          style={{ width: `${city.length}ch` }}
                        />
                      </span>
                    </div>
                    <div className="agreement-row">
                      <p>State/parish/providence/region :</p>
                      <span>
                        <input
                          type="text"
                          value={state}
                          onChange={(e) => setstate(e.target.value)}
                          style={{ width: `${state.length}ch` }}
                        />
                      </span>
                    </div>
                    <div className="agreement-row">
                      <p>Postal/Zip Code :</p>
                      <span>
                        <input
                          type="text"
                          value={zipcode}
                          onChange={(e) => setzipcode(e.target.value)}
                          style={{ width: `${zipcode.length}ch` }}
                        />
                      </span>
                    </div>
                    <div className="agreement-row">
                      <p>Country :</p>

                      <span className="country-select">
                        <input type="text" value={selectedCountry} />
                      </span>
                    </div>
                    <div className="agreement-row">
                      <p>Date Signed:</p>
                      <span>
                        <input
                          type="text"
                          placeholder=""
                          value={fullDate}
                          readonly
                        />
                      </span>
                    </div>
                    <span className="pdf-subject">
                      <p>To: Apex E-Commerce Services LLC</p>
                      <p>
                        <u>
                          Re: Payment Authorization For Apex E-Commerce Services
                          LLC’s Online Software Services.
                        </u>
                      </p>
                    </span>
                  </div>
                  <div className="pdf-body">
                    <p>
                      I
                      <span>
                        <input
                          type="text"
                          placeholder="Enter your full name here"
                          value={firstname + " " + lastname}
                          // onChange={(e) => setfullname(e.target.value)}
                        />
                      </span>
                      holder of Government ID type:
                      {/*--------- DRIVERS LICENSE------------- */}
                      {selectedDocument === "Drivers License" && (
                        <>
                          <input
                            type="checkbox"
                            checked={
                              selectedDocument === "Drivers License"
                                ? true
                                : false
                            }
                          />
                          Driver's License and
                          <span> Government ID number</span>:
                          <span>
                            <input
                              type="text"
                              placeholder="Enter your id no:"
                              value={idnumber}
                              onChange={(e) => setidnumber(e.target.value)}
                            />
                          </span>{" "}
                          <span> with Expiry Date</span>:{" "}
                          <span>
                            <div className="flex exp-date">
                              <input
                                type="text"
                                placeholder="Month, Day, Year"
                                value={datevalue}
                                onClick={() => setDateOpen(!dateOpen)}
                              />
                              <img
                                src={close}
                                alt=""
                                onClick={() => setDateOpen(false)}
                              />
                            </div>
                          </span>
                        </>
                      )}
                      {/*--------- PASSPORT------------- */}
                      {selectedDocument === "Passport" && (
                        <>
                          <input
                            type="checkbox"
                            checked={
                              selectedDocument === "Passport" ? true : false
                            }
                          />
                          Passport and
                          <span> Government ID number</span>:
                          <span>
                            <input
                              type="text"
                              placeholder="Enter your id no:"
                              value={idnumber}
                              onChange={(e) => setidnumber(e.target.value)}
                            />
                          </span>{" "}
                          <span> with Expiry Date</span>:{" "}
                          <span>
                            <div className="flex exp-date">
                              <input
                                type="text"
                                placeholder="Month, Day, Year"
                                value={datevalue}
                                onClick={() => setDateOpen(!dateOpen)}
                              />
                              <img
                                src={close}
                                alt=""
                                onClick={() => setDateOpen(false)}
                              />
                            </div>
                          </span>
                        </>
                      )}
                      {/*--------- NATIONAL ID------------- */}
                      {selectedDocument === "National ID" && (
                        <>
                          <input
                            type="checkbox"
                            checked={
                              selectedDocument === "National ID" ? true : false
                            }
                          />
                          National ID and
                          <span> Government ID number</span>:
                          <span>
                            <input
                              type="text"
                              placeholder="Enter your id no:"
                              value={idnumber}
                              onChange={(e) => setidnumber(e.target.value)}
                            />
                          </span>{" "}
                          <span> with Expiry Date</span>:{" "}
                          <span>
                            <div className="flex exp-date">
                              <input
                                type="text"
                                placeholder="Month, Day, Year"
                                value={datevalue}
                                onClick={() => setDateOpen(!dateOpen)}
                              />
                              <img
                                src={close}
                                alt=""
                                onClick={() => setDateOpen(false)}
                              />
                            </div>
                          </span>
                        </>
                      )}{" "}
                      hereby confirm the authorization of the legality and
                      validity of payments made to Apex E-Commerce Services by
                      card payment/bank transfers.
                    </p>
                    <p>
                      I confirm that I am the authorized holder of the above
                      stated identification number, and the authorized card
                      holder of the card used to make the payments. Thereby,
                      verifying this non- refundable payment and future payments
                      to Apex E-Commerce Services LLC for access to their online
                      software licenses pursuant to Apex E-Commerce Services'
                      terms of service.
                    </p>
                    <p>
                      I represent and warrant that any transaction in accordance
                      with this letter will serve as an act in full compliance
                      with all the applicable local, national and international
                      laws and regulations. Continually, I represent and warrant
                      and certify that I am by no means under investigation by
                      any governmental authority with regards to, have been
                      charged with, or convicted of; money laundering, drug
                      trafficking, any terrorist related activities, or any
                      crimes which in any jurisdiction would be predicate crimes
                      or offenses that are in contravention to anti-money
                      laundering laws.
                    </p>
                    <p>
                      I affirm that I have not been assessed civil or criminal
                      penalties under any Anti money laundering law or have had
                      any seizure of funds or forfeiture of any action under any
                      anti-money laundering laws of any country/ jurisdiction.
                    </p>
                    <p>
                      Therefore, I represent and warrant that the funds for this
                      monetary payment to Apex E- Commerce Services does not and
                      will not derive from any illegal activity that violates
                      any Anti Money Laundering Laws and Regulations.
                    </p>
                    <p>
                      I recognize that by law, Apex E-Commerce Services may
                      disclose my name and identity in the event that such
                      information is requested in relation to this letter.
                      Additionally, I will notify Apex E- Commerce Services at
                      once, when it is known to me that said representation is
                      fallacious or becomes fallacious.
                    </p>
                    <p>
                      Finally, subject to and upon the terms and conditions of
                      this agreement, I shall indemnify and hold harmless Apex
                      E-Commerce Services, its employees, affiliates and
                      directors from any claim or disputes that may arise as a
                      result of any payments made by me in relation to Apex E-
                      Commerce Services software license agreement/s.
                    </p>
                    <p>
                      I further confirm that this is a non refundable monetary
                      payment conducted pursuant to Apex E- Commerce Services'
                      terms of service.
                    </p>
                  </div>
                  <div>
                    <div>
                      <p>Client’s Full Name:</p>

                      <span>
                        <input
                          type="text"
                          placeholder=""
                          value={firstname + " " + lastname}
                          // onChange={(e) => setfullname(e.target.value)}
                        />
                      </span>
                    </div>

                    <div className="pt-2 pdf-signature">
                      <p>
                        Client’s Signature:
                        {/* <button onClick={clear}>Clear</button>
                  <button onClick={save}>Save</button> */}
                      </p>

                      {sigImage ? (
                        <img
                          src={sigImage}
                          alt="my signiture"
                          style={{
                            display: "block",
                            width: "150px",
                            height: "50px",
                          }}
                        />
                      ) : null}

                      {/* <div>
                  <SignaturePad ref={signaturePad}></SignaturePad>
                </div> */}
                    </div>
                  </div>
                </div>
                {/* PAGE 2 */}
                <div className="pdfpage">
                  <div className="pdf-body">
                    <p>
                      We, <b>Apex E-Commerce Services LLC</b>, acknowledge the
                      above statements.
                    </p>
                    <p>
                      We acknowledge and understand that payments shall be made
                      through our corporate bank account in the name Apex
                      E-Commerce Services. We further confirm that payments made
                      by the named payer will reach the stated bank account. If
                      this is to change for any given reason, it is our duty to
                      promptly inform the payer of such changes.
                    </p>
                    <p>
                      Apex E-Commerce Services LLC represents and warrants that
                      any activity in relation to this payment letter will be in
                      full compliance with all applicable local, national and
                      international laws, rules and regulations. This includes
                      Anti-Money Laundering laws and regulation of any
                      applicable jurisdiction or to respond to requests for
                      information concerning the identity of the payer from any
                      government Authority, regulatory organization or financial
                      institution in connection with its anti-money laundering
                      compliance and to update such information as necessary.
                    </p>
                    <p>
                      Conversely, in compliance with anti-money laundering laws
                      and other regulatory bodies related to this issue, we
                      agree to provide at any time further documents verifying
                      the identity of the named payer and the source of funds
                      used for payment transfer towards our bank account.
                    </p>
                    <p>
                      <b>
                        Apex E-Commerce Services LLC holds a strict NO REFUND
                        POLICY{" "}
                      </b>
                    </p>
                    <p>
                      You may cancel your Service by contacting Apex E-Commerce
                      Services support via email. If the client makes a request
                      for cancellation after payment, the client is not entitled
                      to a refund.
                    </p>
                    <p>
                      Additionally, If you made any payment error, you may
                      contact us as soon as reasonably possible and we will
                      assist you in resolving the issue. If a refund is
                      requested without contacting us it will be held invalid
                      and will risk your account being banned.
                    </p>
                    <p>
                      It should be duly noted that all accounts associated with
                      a chargeback will be automatically forfeited.{" "}
                    </p>
                    <br />
                    <p>
                      <b>
                        Apex E-Commerce Services Authorized Representative
                        Signature:
                      </b>
                    </p>
                    <div className="pdf-signature">
                      {/* <input type="text" placeholder="signature" /> */}
                      {/* <button onClick={clear}>Clear</button>
                <div>
                  <SignaturePad ref={signaturePad}></SignaturePad>
                </div> */}
                    </div>
                  </div>

                  <div className="pdf-disclaimer">
                    <p>
                      Disclaimer of Warranties and Limitation of liability: Apex
                      E-Commerce Services LLC provides a licensed online
                      software service that facilitates the creation of accounts
                      for authorized users, which enables them access to a host
                      of services. The service provided by Apex E-Commerce
                      Services LLC is not to be confused or misconstrued to be
                      anything else as not to prejudice the operation and
                      goodwill of the company. Apex E-Commerce Services LLC
                      bears no responsibility or liability for any aspect of
                      usage by users that are not in conformity with our
                      services as per the governing laws concerning this
                      industry. Lastly, if any provision of this agreement is
                      unenforceable or held illegal in a judicial proceeding
                      such provision shall be severed and held inoperative,
                      whilst holding the remaining portion of this agreement
                      operative and binding on both parties. Apex E-Commerce
                      Services LLC and Apex E-Commerce Services Ltd are one in
                      the same, registered in different countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 pt-8 md:flex-row ">
              <div
                className="bg-[#008FFD] rounded-full py-4 w-full flex justify-center text-white cursor-pointer"
                onClick={continueBtn}
              >
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default VerificationReview;
