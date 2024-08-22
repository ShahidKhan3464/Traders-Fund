import React, {useEffect, useState} from 'react';
import KycFlow from '../components/KycFlow';
import KycInstructions from '../components/KycInstructions';
import './Verification.css';
import KycVerificationStatus from '../components/kycVerificationStatus';
import axios from 'axios';
import {listOfCountries} from '../components/CountryList';
import {getProfile, getUserProfileDetails, updateUserCountry} from "../api";
import {showCustomSuccess} from "../utils/utils";
import toast from 'react-hot-toast'
import {useSearchParams} from 'react-router-dom';

// ----------------------VERIFICATION PROCESS PAGE------------------

const Verification = ({activeNav, setActiveNav}) => {
    const [kycDocdata, setKycDocdata] = useState([]);
    const [nationalIdDoc, setNationalIdDoc] = useState();
    const [passportDoc, setPassportDoc] = useState()
    const [drivingLicense, setDrivingLicense] = useState()
    const [selfieWithId, setSelfieWithId] = useState()
    const [signature, setSignature] = useState()
    const [frontPreview, setFrontPreview] = useState('')
    const [selfiePreview, setSelfiePreview] = useState('');
    const [signaturePreview, setSignaturePreview] = useState('')

    useEffect(() => {
        setActiveNav(false);
        window.scrollTo(0, 0);
    }, []);

    const fetchUserProfileData = async () => {
        try {
            const response = await getUserProfileDetails();
            setKycDocdata(response?.KYC)
            setNationalIdDoc(response?.KYC?.find((doc) => doc?.documentType === 'NATIONAL_ID'))
            setPassportDoc(response?.KYC?.find((doc) => doc?.documentType === 'PASSPORT'))
            setDrivingLicense(response?.KYC?.find((doc) => doc?.documentType === 'DRIVING_LICENSE'))
            setSelfieWithId(response?.KYC?.find((doc) => doc?.documentType === 'SELFIE_WITH_ID'))
            setSignature(response?.KYC?.find((doc) => doc?.documentType === 'SIGNATURE'))

            const nationalIdDocument = response?.KYC?.find(
                (doc) => doc?.documentType === 'NATIONAL_ID' && doc?.status !== 'REJECTED'
            );

            const passportDocument = response?.KYC?.find(
                (doc) => doc?.documentType === 'PASSPORT' && doc?.status !== 'REJECTED'
            );

            const drivingLicenseDocument = response?.KYC?.find(
                (doc) => doc?.documentType === 'DRIVING_LICENSE' && doc?.status !== 'REJECTED'
            );

            const selfieDoc = response?.KYC?.find(
                (doc) => doc?.documentType === 'SELFIE_WITH_ID' && doc?.status !== 'REJECTED'
            );

            const signatureDoc = response?.KYC?.find(
                (doc) => doc?.documentType === 'SIGNATURE' && doc?.status !== 'REJECTED'
            );

// Set front preview based on available documents
            if (nationalIdDocument) {
                setFrontPreview(nationalIdDocument);
            } else if (passportDocument) {
                setFrontPreview(passportDocument);
            } else if (drivingLicenseDocument) {
                setFrontPreview(drivingLicenseDocument);
            }

// Set other previews
            setSelfiePreview(selfieDoc || '');
            setSignaturePreview(signatureDoc || '');


        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserProfileData()
    }, []);


    useEffect(() => {
        // const fetchData = async () => {
        //   const response = await axios.get(`${process.env.REACT_APP_PTF_API}/billing/get-user`, { withCredentials: true });
        //   const user = response.data;
        //
        //   if (user.isKycVerified) {
        //     window.location.href = `${process.env.REACT_APP_LANDING_URL}/`;
        //     return;
        //   }
        // };
        // fetchData();
    }, []);

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('');
    const [selectedDocument, setSelectedDocument] = useState('');
    const [kycComplete, setKycComplete] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [index, setIndex] = useState(0);
    const [allCountries, setAllCountries] = useState([]);
    const [searchParams] = useSearchParams()

    useEffect(() => {
        if (searchParams.get('tab')) {
            setIndex(Number(searchParams.get('tab')));
        }
        if (searchParams.get('token')) {
            const token = searchParams.get('token')
            localStorage.setItem('authToken', token);
        }
    }, [searchParams]);


    const continueBtn = async () => {
        if (index < 8) {  // Assuming 8 is now the finish step
            switch (index) {
                case 0: // Introduction
                    setIndex(1);
                    break;
                case 1: // User country
                    if (hasValidDocument()) {
                        if (hasValidSelfie() && !hasValidSignature()) {
                            if (!signaturePreview) {
                                setIndex(5)
                                toast.error('Provide a signature');
                            } else {
                                if (hasValidSignature() || signaturePreview) {
                                    setIndex(6); // Go to review step
                                } else {
                                    toast.error('Signature upload failed or is still processing. Please try again.');
                                }
                            }
                        } else if (hasValidSelfie() && hasValidSignature()) {
                            setIndex(6); // Skip to review step
                        } else {
                            setIndex(4); // Go to selfie step
                        }
                    } else {
                        setIndex(2); // Go to document upload
                    }
                    break;
                case 2: // Select document
                    if (!selectedDocument) {
                        toast.error('Select a document!');
                    } else {
                        setIndex(3); // Go to document upload
                    }
                    break;
                case 3: // Upload document photo
                    if (!frontPreview) {
                        toast.error('Upload the picture');
                    } else {
                        if (hasValidDocument() || frontPreview) {
                            setIndex(4); // Go to selfie step
                        } else {
                            toast.error('Please Upload Document!');
                        }
                    }
                    break;
                case 4: // Selfie with ID)
                    if (!selfiePreview) {
                        toast.error('Upload a selfie with ID');
                    } else {
                        if ((hasValidSelfie() || selfiePreview) && (hasValidSignature() || signaturePreview)) {
                            window.location.href = '/kyc-document-status';
                        } else if (hasValidSelfie() || selfiePreview) {
                            setIndex(5); // Go to signature step
                        } else {
                            toast.error('Selfie upload failed or is still processing. Please try again.');
                        }
                    }
                    break;
                case 5:
                    if (!signaturePreview) {
                        toast.error('Provide a signature');
                    } else {
                        if (hasValidSignature() || signaturePreview) {
                            setIndex(6); // Go to review step
                        } else {
                            toast.error('Signature upload failed or is still processing. Please try again.');
                        }
                    }
                    break;
                case 6: // Review
                    if (isKycComplete()) {
                        setIndex(7); // Go to finish step
                    } else {
                        navigateToNextIncompleteStep();
                    }
                    break;
                case 7: // Finish
                    // Handle finish step (e.g., submit data to server)
                    break;
                default:
                    setIndex(prevIndex => prevIndex + 1);
            }
        }
    };

    const navigateToNextIncompleteStep = () => {
        if (!hasValidDocument()) {
            setIndex(3); // Go to document upload
        } else if (!hasValidSelfie()) {
            setIndex(4); // Go to selfie step
        } else if (!hasValidSignature()) {
            setIndex(5); // Go to signature step
        } else {
            setIndex(6); // All steps completed, go to finish
        }
    };

    const isKycComplete = () => {
        return hasValidDocument() && hasValidSelfie() && hasValidSignature();
    };

    const hasValidDocument = () => {
        return (nationalIdDoc && nationalIdDoc.status !== "REJECTED") ||
            (passportDoc && passportDoc.status !== "REJECTED") ||
            (drivingLicense && drivingLicense.status !== "REJECTED");
    };

    const hasValidSelfie = () => {
        return selfieWithId && selfieWithId.status !== "REJECTED";
    };

    const hasValidSignature = () => {
        return signature && signature.status !== "REJECTED";
    };
    const previousBtn = () => {
        if (index > 0) {
            switch (index) {
                case 1: // User country
                    setIndex(0); // Go back to Introduction
                    break;
                case 2: // Select document
                case 3: // Upload document photo
                case 4: // Selfie with ID
                    if (hasValidDocument()) {
                        setIndex(1); // Go back to User country
                    } else {
                        setIndex(Math.max(1, index - 1)); // Go back one step, but not before User country
                    }
                    break;
                case 5: // Signature
                    if (hasValidSelfie()) {
                        setIndex(1); // Go back to User country if selfie is valid
                    } else {
                        setIndex(4); // Go back to Selfie with ID
                    }
                    break;
                case 6: // Review
                    if (hasValidSignature()) {
                        setIndex(1); // Go back to User country if signature is valid
                    } else {
                        setIndex(5); // Go back to Signature
                    }
                    break;
                default:
                    setIndex(prevIndex => prevIndex - 1);
            }
        }
    };

    const detectDevice = () => {
        if (
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/samsung/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        async function getAllCountries() {
            try {
                setAllCountries(listOfCountries);

                const ipResponse = await fetch('https://api.ipify.org?format=json');
                const ipData = await ipResponse.json();
                const userIp = ipData.ip;

                const locationResponse = await fetch(`https://ipapi.co/${userIp}/json/`);
                const locationData = await locationResponse.json();

                if (locationData && locationData.country_name && locationData.country_code) {
                    setSelectedCountry(locationData.country_name);
                    setSelectedCountryCode(locationData.country_code)
                }
            } catch (error) {
                console.log(error);
            }
        }

        detectDevice()
        getAllCountries();
    }, []);
    return (
        <>
            <div className="dashboard-page">
                <div className="dashboard-container">
                    {kycComplete ? <KycVerificationStatus></KycVerificationStatus> : null}

                    <div className="relative verification-form-container">
                        {index === 0 && (
                            <KycInstructions index={index} setIndex={setIndex} continueBtn={continueBtn}
                                             previousBtn={previousBtn} isMobile={isMobile}></KycInstructions>
                        )}
                        {index > 0 && (
                            <KycFlow
                                allCountries={allCountries}
                                index={index}
                                setIndex={setIndex}
                                continueBtn={continueBtn}
                                previousBtn={previousBtn}
                                selectedCountry={selectedCountry}
                                selectedCountryCode={selectedCountryCode}
                                setSelectedCountry={setSelectedCountry}
                                setSelectedCountryCode={setSelectedCountryCode}
                                selectedDocument={selectedDocument}
                                setSelectedDocument={setSelectedDocument}
                                kycComplete={kycComplete}
                                setKycComplete={setKycComplete}
                                isMobile={isMobile}
                                setFrontPreview={setFrontPreview}
                                frontPreview={frontPreview}
                                setSelfiePreview={setSelfiePreview}
                                selfiePreview={selfiePreview}
                                signaturePreview={signaturePreview}
                                setSignaturePreview={setSignaturePreview}
                            ></KycFlow>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Verification;
