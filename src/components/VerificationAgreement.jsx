import React, {useState, useRef, useEffect, forwardRef} from 'react';
import './SignatureModal.css';
import $ from 'jquery';
import html2pdf from 'html2pdf.js';
import Loader from '../components/Loader';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import {styled, Box} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Typography from '@mui/material/Typography';
import moment from 'moment';

// css is in
import '../pages/Verification.css';
import './SignatureModal.css';

// import "react-calendar/dist/Calendar.css";
// ! Modal
const BackdropUnstyled = React.forwardRef((props, ref) => {
    const {open, className, ...other} = props;
    return <div className={clsx({'MuiBackdrop-open': open}, className)} ref={ref} {...other} />;
});
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
    bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    border: '1px solid currentColor',
    padding: '12px 24px',
    borderRadius: '8px'
});
const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

const VerificationAgreement = forwardRef(({
                                              data,
                                              setFormHtml,
                                          }, ref) => {
    const clientSignatureUrl = data?.KYC?.find(item => item.documentType === 'SIGNATURE')?.documentUrl;
    const governmentDocumentUrl = data?.KYC?.find(item =>
        item.documentType === 'NATIONAL_ID' ||
        item.documentType === 'PASSPORT' ||
        item.documentType === 'DRIVING_LICENSE'
    )?.documentUrl;
    const governmentDocumentType = data?.KYC?.find(item =>
      item.documentType === 'NATIONAL_ID' ||
      item.documentType === 'PASSPORT' ||
      item.documentType === 'DRIVING_LICENSE'
    )?.documentType;
    const selfieDocumentUrl = data?.KYC?.find(item => item.documentType === 'SELFIE_WITH_ID')?.documentUrl;
    useEffect(() => {

        const updateFormHtml = () => {
            const formContent = document.querySelector('.verification-agreement-box');
            if (formContent && setFormHtml) {
                setFormHtml(formContent.innerHTML);
            }
        };

        // Call immediately and set up a small delay to ensure content is rendered
        updateFormHtml();
        const timeoutId = setTimeout(updateFormHtml, 100);

        return () => clearTimeout(timeoutId);
    }, [data, setFormHtml]);


    return (
        <>
            <div className="mt-6 verification-agreement-box">
                <div className="text-black pdf">
                    <div id={"verification-agreement-box"} style={{
                        height: '39rem',
                        width: '39rem'
                    }} className="customer-agreement-container">
                        <h1 className="heading-1">Pro Traders Fund Customer Agreement</h1>
                        <div className="sub-container">
                            <h2 className="heading-2">Client’s Personal Information</h2>
                            <div className="thin-font">
                                <div className="d-flex">
                                    <div className="d-flex magin-right-4 margin-bottom-2">
                                        <label className="right-margin-3 thin-font width-8rem">First Name:</label>
                                        <input className="thin-font" value={data?.firstName} type="text"
                                               name="firstName" readOnly/>
                                    </div>

                                    <div className="d-flex magin-right-4 margin-bottom-2">
                                        <label className="right-margin-3 thin-font width-8rem">Last Name:</label>
                                        <input className="thin-font" value={data?.lastName} type="text"
                                               name="lastName"
                                               readOnly/>
                                    </div>
                                </div>

                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                                     className="d-flex item-center margin-bottom-2">
                                    <div className="right-margin-3 thin-font width-8rem">Gender:</div>
                                    <div className="flex items-center gap-2">
                                        <div className="relative">
                                            <input
                                                disabled
                                                type="checkbox"
                                                name="Female"
                                                value="Female"
                                                checked={data?.sex?.toLowerCase() === "male"}
                                                className="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-gray-200 checked:border-gray-700 focus:outline-none disabled:opacity-50"
                                                style={{
                                                    position: 'relative',
                                                }}
                                            />
                                            {data?.sex?.toLowerCase() === "male" && (
                                                <span
                                                    className="absolute"
                                                    style={{
                                                        top: '2px',
                                                        left: '6px',
                                                        width: '6px',
                                                        height: '12px',
                                                        border: 'solid black',
                                                        borderWidth: '0 3px 3px 0',
                                                        transform: 'rotate(45deg)',
                                                    }}
                                                ></span>
                                            )}
                                        </div>
                                        <label className="text-gray-800 font-medium">Male</label>

                                        <div className="flex items-center gap-2">
                                            <div className="relative">
                                                <input
                                                    disabled
                                                    type="checkbox"
                                                    name="Female"
                                                    value="Female"
                                                    checked={data?.sex?.toLowerCase() === "female"}
                                                    className="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-gray-200 checked:border-gray-700 focus:outline-none disabled:opacity-50"
                                                    style={{
                                                        position: 'relative',
                                                    }}
                                                />
                                                {data?.sex?.toLowerCase() === "female" && (
                                                    <span
                                                        className="absolute"
                                                        style={{
                                                            top: '2px',
                                                            left: '6px',
                                                            width: '6px',
                                                            height: '12px',
                                                            border: 'solid black',
                                                            borderWidth: '0 3px 3px 0',
                                                            transform: 'rotate(45deg)',
                                                        }}
                                                    ></span>
                                                )}
                                            </div>
                                            <label className="text-gray-800 font-medium">Female</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex magin-right-4 margin-bottom-2">
                                    <label className="right-margin-3 thin-font width-8rem">Date of Birth:</label>
                                    <input className="thin-font" value={data?.dateOfBirth} name="dob"
                                           readOnly/>
                                </div>

                                <div className="d-flex magin-right-4 margin-bottom-2">
                                    <label className="right-margin-3 thin-font width-8rem">Phone Number:</label>
                                    <input className="thin-font" name="firstName" value={data?.phone}
                                           type="telephoneCell" readOnly/>
                                </div>
                                <div className="d-flex magin-right-4 margin-bottom-2">
                                    <label className="right-margin-3 thin-font width-8rem">Email Address:</label>
                                    <input style={{width: '200px'}} className="thin-font w-[65%]" name="email"
                                           value={data?.email} type="email" readOnly/>
                                </div>

                                <div className="margin-top-2">
                                    <h2 className="bold-font">Address</h2>
                                    <div style={{marginLeft: '1.5rem'}}>
                                        <div className="d-flex margin-top-1">
                                            <label className="right-margin-3 thin-font width-8rem">Line 1:</label>
                                            <input className="thin-font grow-flex" name="street" value={''}
                                                   type="text"
                                                   readOnly/>
                                        </div>
                                        <div className="d-flex margin-top-1">
                                            <label className="right-margin-3 thin-font width-8rem">Line 2:</label>
                                            <input className="thin-font grow-flex" type="text" name="street2"
                                                   readOnly/>
                                        </div>
                                        <div className="d-flex margin-top-1">
                                            <label className="right-margin-3 thin-font width-8rem">City:</label>
                                            <input className="thin-font grow-flex" type="text" name="city"
                                                   readOnly/>
                                        </div>
                                        <div className="d-flex margin-top-1">
                                            <label
                                                className="right-margin-3 thin-font width-8rem">State/Region:</label>
                                            <input className="thin-font grow-flex" type="text" name="state"
                                                   readOnly/>
                                        </div>
                                        <div className="d-flex margin-top-1">
                                            <label className="right-margin-3 thin-font width-8rem">Postal/Zip
                                                Code:</label>
                                            <input className="thin-font grow-flex" type="text" name="postalCode"
                                                   readOnly/>
                                        </div>
                                        <div className="d-flex margin-top-1">
                                            <label className="right-margin-3 thin-font width-8rem">Country:</label>
                                            <input className="thin-font grow-flex" type="text" name="country"
                                                   value={data?.country} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{marginTop: '1rem'}}>
                                    <label className="right-margin-3 thin-font">Date Signed:</label>
                                    <input className="thin-font" value={new Date().toISOString().split('T')[0]}
                                           type="date" readOnly/>
                                </div>
                            </div>

                            <div className="margin-top-6 light-font font-15">
                                <h6>To: Pro Traders Fund</h6>
                                <h1
                                    style={{
                                        wordSpacing: '0.25rem',
                                        marginTop: '0.75rem',
                                        fontSize: '1.125rem',
                                        lineHeight: '1.75rem',
                                        fontWeight: 600
                                    }}
                                    className="underline-text"
                                >
                                    Re: Payment Authorization For Pro Traders Fund Online Software Services.
                                </h1>

                                <p className="light-font margin-top-6">
                                    I{' '}
                                    <span className="bold-font">
                    {!data?.firstName && !data?.lastName
                        ? '___________________'
                        : data?.firstName + ' ' + data?.lastName}
                  </span>{' '}
                                    holder of
                                </p>
                                <div
                                    style={{
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        gap: '2rem'
                                    }}
                                    className="d-flex item-center margin-top-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="relative">
                                            <input
                                                disabled
                                                type="checkbox"
                                                checked={governmentDocumentType?.toLowerCase()?.includes('drivers_license')}
                                                className="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-gray-200 checked:border-gray-700 focus:outline-none disabled:opacity-50"
                                                style={{
                                                    position: 'relative',
                                                }}
                                            />
                                            {governmentDocumentType?.toLowerCase()?.includes('license') && (
                                                <span
                                                    className="absolute"
                                                    style={{
                                                        top: '2px',
                                                        left: '6px',
                                                        width: '6px',
                                                        height: '12px',
                                                        border: 'solid black',
                                                        borderWidth: '0 3px 3px 0',
                                                        transform: 'rotate(45deg)',
                                                    }}
                                                ></span>
                                            )}
                                        </div>
                                        <label className="text-gray-800 font-medium">Driver's License</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="relative">
                                            <input
                                                disabled
                                                type="checkbox"
                                                checked={governmentDocumentType?.toLowerCase().includes('passport')}
                                                className="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-gray-200 checked:border-gray-700 focus:outline-none disabled:opacity-50"
                                                style={{
                                                    position: 'relative',
                                                }}
                                            />
                                            {governmentDocumentType?.toLowerCase()?.includes('passport') && (
                                                <span
                                                    className="absolute"
                                                    style={{
                                                        top: '2px',
                                                        left: '6px',
                                                        width: '6px',
                                                        height: '12px',
                                                        border: 'solid black',
                                                        borderWidth: '0 3px 3px 0',
                                                        transform: 'rotate(45deg)',
                                                    }}
                                                ></span>
                                            )}
                                        </div>
                                        <label className="text-gray-800 font-medium">Passport</label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="relative">
                                            <input
                                                disabled
                                                type="checkbox"
                                                checked={governmentDocumentType?.includes('id')}
                                                className="w-5 h-5 appearance-none border-2 border-gray-300 rounded checked:bg-gray-200 checked:border-gray-700 focus:outline-none disabled:opacity-50"
                                                style={{
                                                    position: 'relative',
                                                }}
                                            />
                                            {governmentDocumentType?.toLowerCase()?.includes('id') && (
                                                <span
                                                    className="absolute"
                                                    style={{
                                                        top: '2px',
                                                        left: '6px',
                                                        width: '6px',
                                                        height: '12px',
                                                        border: 'solid black',
                                                        borderWidth: '0 3px 3px 0',
                                                        transform: 'rotate(45deg)',
                                                    }}
                                                ></span>
                                            )}
                                        </div>
                                        <label className="text-gray-800 font-medium">National ID</label>
                                    </div>
                                </div>
                                <p className="light-font margin-top-6">
                  <span className="bold-font">
                    ID Number: &nbsp;
                      <span style={{textDecorationLine: 'underline'}}>{data?.docId}</span>
                  </span>
                                    &nbsp; with{' '}
                                    <span className="bold-font">
                    Expiry Date: &nbsp;
                                        <span style={{textDecorationLine: 'underline'}}>{data?.expiryDate}</span>
                                        &nbsp;
                  </span>
                                    hereby confirm the authorization of the legality and validity of payments made
                                    to
                                    Pro Traders Fund by card payment/bank
                                    transfers.
                                </p>
                                <p className="light-font margin-top-6">
                                    I confirm that I am the authorized holder of the above stated identification
                                    number,
                                    and the authorized card holder of the
                                    card used to make the payments. Thereby, verifying this non-refundable payment
                                    and
                                    future payments to Pro Traders Fund for
                                    access to their online software licenses pursuant to Pro Traders Fund terms of
                                    service.
                                </p>
                                <p className="light-font margin-top-6">
                                    I represent and warrant that any transaction in accordance with this letter will
                                    serve as an act in full compliance with
                                    all the applicable local, national and international laws and regulations.
                                </p>
                                <p className="light-font margin-top-6">
                                    Continually, I represent and warrant and certify that I am by no means under
                                    investigation by any governmental authority
                                    with regards to, have been charged with, or convicted of; money laundering, drug
                                    trafficking, any terrorist related
                                    activities, or any crimes which in any jurisdiction would be predicate crimes or
                                    offenses that are in contravention to
                                    anti-money laundering laws.
                                </p>
                                <p className="light-font margin-top-6">
                                    I affirm that I have not been assessed civil or criminal penalties under any
                                    Anti
                                    money laundering law or have had any
                                    seizure of funds or forfeiture of any action under any anti-money laundering
                                    laws of
                                    any country/ jurisdiction.
                                </p>
                                <p className="light-font margin-top-6">
                                    Therefore, I represent and warrant that the funds for this monetary payment to
                                    Pro
                                    Traders Fund does not and will not
                                    derive from any illegal activity that violates any Anti Money Laundering Laws
                                    and
                                    Regulations.
                                </p>
                                <p className="light-font margin-top-6">
                                    I recognize that by law, Pro Traders Fund may disclose my name and identity in
                                    the
                                    event that such information is
                                    requested in relation to this letter. Additionally, I will notify Pro Traders
                                    Fund
                                    at once, when it is known to me that
                                    said representation is fallacious or becomes fallacious.
                                </p>
                                <p className="light-font margin-top-6">
                                    Finally, subject to and upon the terms and conditions of this agreement, I shall
                                    indemnify and hold harmless Pro Traders
                                    Fund, its employees, affiliates and directors from any claim or disputes that
                                    may
                                    arise as a result of any payments made
                                    by me in relation to Pro Traders Fund software license agreement/s.
                                </p>
                                <p className="light-font margin-top-6">
                                    I further confirm that this is a non refundable monetary payment conducted
                                    pursuant
                                    to Pro Traders Fund terms of service.
                                </p>
                            </div>

                            <div className="font-15">
                                <h1 className="margin-top-6">Declaration and Acknowledgment of Accuracy:</h1>
                                <div>
                                    <h2 className="thin-font margin-top-6">1. &nbsp; Comprehensive Declaration:</h2>
                                    <p className="thin-font margin-left-5 margin-top-6">
                                        By signing this Agreement, the client declares all provided information,
                                        whether
                                        explicit or implied, to be accurate.
                                        This encompasses personal details, qualifications, experiences, and
                                        representations made during the evaluation and
                                        contracting process.
                                    </p>

                                    <h2 className="thin-font margin-top-6">2. &nbsp; Implications of
                                        Misrepresentation:</h2>
                                    <p className="thin-font margin-left-5 margin-top-6">
                                        Misrepresentations, whether by omission or commission, may lead to immediate
                                        voiding of the application, termination of
                                        this Agreement, and potential legal actions.
                                    </p>

                                    <h2 className="thin-font margin-top-6">3. &nbsp; Catch-All Provision:</h2>
                                    <p className="thin-font margin-left-5 margin-top-6">
                                        The client acknowledges this declaration as a comprehensive safeguard for
                                        Pro
                                        Traders Fund and its affiliates, ensuring
                                        the company&#39;s protection against undisclosed facts, misrepresented
                                        information, or unforeseen circumstances that
                                        arise contrary to the client&#39;s declarations. This provision covers all
                                        engagement aspects with Pro Traders Fund.
                                    </p>

                                    <h2 className="thin-font margin-top-6">4. &nbsp; Responsibility of the
                                        Client:</h2>
                                    <p className="thin-font margin-left-5 margin-top-6">
                                        The client is responsible for truthfully disclosing all relevant information
                                        and
                                        promptly informing Pro Traders Fund of
                                        any changes. Failure to do so constitutes a breach of this Agreement,
                                        potentially leading to termination.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex item-center space-between margin-top-6">
                                <div className="d-flex item-center half-width">
                                    <label style={{marginRight: 8}}>Client’s Full Name:</label>
                                    <input
                                        className="thin-font grow-flex"
                                        value={`${data?.firstName} ${data?.lastName}`}
                                        type="text"
                                        readOnly
                                    />
                                </div>
                                <div className="d-flex item-center flex-end half-width">
                                    <label>Client’s Signature:</label>
                                    <img
                                        style={{
                                            height: 70,
                                            maxWidth: 220,
                                            objectFit: 'contain'
                                        }}
                                        src={clientSignatureUrl}
                                        alt="Client's Signature"
                                    />
                                </div>
                            </div>

                            <div className="font-15">
                                <p className="margin-top-6 thin-font">
                                    We, <span className="bold-font">Pro Traders Fund LLC</span>, acknowledge the
                                    above
                                    statements.
                                </p>
                                <p className="margin-top-6 thin-font">
                                    We acknowledge and understand that payments shall be made through our corporate
                                    bank
                                    account in the name Pro Traders Fund.
                                    We further confirm that payments made by the named payer will reach the stated
                                    bank
                                    account. If this is to change for any
                                    given reason, it is our duty to promptly inform the payer of such changes.
                                </p>
                                <p className="margin-top-6 thin-font">
                                    Pro Traders Fund represents and warrants that any activity in relation to this
                                    payment letter will be in full compliance
                                    with all applicable local, national and international laws, rules and
                                    regulations.
                                    This includes Anti-Money Laundering
                                    laws and regulation of any applicable jurisdiction or to respond to requests for
                                    information concerning the identity of
                                    the payer from any government Authority, regulatory organization or financial
                                    institution in connection with its
                                    anti-money laundering compliance and to update such information as necessary.
                                </p>
                                <p className="margin-top-6 thin-font">
                                    Conversely, in compliance with anti-money laundering laws and other regulatory
                                    bodies related to this issue, we agree to
                                    provide at any time further documents verifying the identity of the named payer
                                    and
                                    the source of funds used for payment
                                    transfer towards our bank account.
                                </p>
                                <p style={{lineHeight: 2, fontSize: 14}} className="margin-top-6 thin-font">
                                    <span
                                        className="bold-font">Pro Traders Fund LLC holds a strict NO REFUND POLICY</span>
                                    <br/>
                                    If the client makes a request for cancellation after payment, the client is not
                                    entitled to a refund. <br/>
                                    Additionally, If you made any payment error, you may contact us as soon as
                                    reasonably possible and we will assist you in
                                    resolving the issue. If a refund is requested without contacting us it will be
                                    held
                                    invalid and will risk your account
                                    being banned. <br/>
                                    It should be duly noted that all accounts associated with a chargeback will be
                                    automatically forfeited.
                                </p>

                                <div className="d-flex item-center space-between margin-top-6">
                                    <div className="d-flex item-center flex-end">
                                        <label className="right-margin-3">Pro Traders Fund Authorized Representative
                                            Signature:</label>
                                        <img style={{height: 70}} className="width-auto" src={clientSignatureUrl}
                                             alt="Client's Signature"/>
                                    </div>
                                </div>
                            </div>

                            <div style={{borderTopWidth: '.01px', margin: '5px 0px'}} className="black-border"/>

                            <div>
                                <p style={{widthMarginTop: '8rem', fontSize: 12}} className="thin-font">
                                    Disclaimer of Warranties and Limitation of liability: Pro Traders Fund provides
                                    a
                                    licensed online software service that
                                    facilitates the creation of accounts for authorized users, which enables them
                                    access
                                    to a host of services. The service
                                    provided by Pro Traders Fund is not to be confused or misconstrued to be
                                    anything
                                    else as not to prejudice the operation
                                    and goodwill of the company. Pro Traders Fund bears no responsibility or
                                    liability
                                    for any aspect of usage by users that
                                    are not in conformity with our services as per the governing laws concerning
                                    this
                                    industry. Lastly, if any provision of
                                    this agreement is unenforceable or held illegal in a judicial proceeding such
                                    provision shall be severed and held
                                    inoperative, whilst holding the remaining portion of this agreement operative
                                    and
                                    binding on both parties. Pro Traders
                                    Fund LLC and Pro Traders Fund Ltd are one in the same, registered in different
                                    countries.
                                </p>
                            </div>

                            <div style={{marginTop: '5rem'}} className="center-text">
                                <h1 className="underline-text">
                                    PLEASE ATTACH YOUR VALID GOVERNMENT ISSUED ID AND A PICTURE OF YOU HOLDING YOUR
                                    GOVERNMENT ISSUED ID BESIDE YOUR FACE:
                                </h1>
                                <table
                                    style={{
                                        width: '100%',
                                        borderCollapse: 'collapse',
                                        marginTop: '2.5rem',
                                        marginBottom: '2.5rem',
                                        borderWidth: 1,
                                        borderColor: 'black'
                                    }}
                                    className="black-border"
                                >
                                    <thead>
                                    <tr>
                                        <th
                                            style={{borderWidth: 1, borderColor: 'black'}}
                                            className="black-border half-width center-text font-15 black-text"
                                        >
                                            GOVERNMENT ISSUED ID
                                        </th>
                                        <th className="black-border half-width center-text font-15 black-text">
                                            PICTURE HOLDING YOUR GOVERNMENT ISSUED ID BESIDE YOUR FACE
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr style={{height: 200, borderStyle: 'none !important'}}>
                                        <td className="black-border"
                                            style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                            <img
                                                style={{
                                                    maxWidth: 300,
                                                    maxHeight: 200,
                                                    objectFit: 'contain',
                                                    margin: 'auto',
                                                    display: 'block'
                                                }}
                                                src={governmentDocumentUrl}
                                                alt="Client's Government Document"
                                            />
                                        </td>
                                        <td className="black-border"
                                            style={{textAlign: 'center', verticalAlign: 'middle'}}>
                                            <img
                                                style={{
                                                    maxWidth: 300,
                                                    maxHeight: 200,
                                                    objectFit: 'contain',
                                                    margin: 'auto',
                                                    display: 'block'
                                                }}
                                                src={selfieDocumentUrl}
                                                alt="Client's Selfie"
                                            />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default VerificationAgreement;
