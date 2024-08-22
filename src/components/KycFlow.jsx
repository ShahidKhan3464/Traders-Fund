import React, {useRef, useState, useEffect, useCallback} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import VerificationProgressBar from '../components/VerificationProgressBar';
import CountrySelector from './CountrySelector';
import KycButtons from './KycButtons';
import upload from '../images/icons/upload.svg';
import DocumentUpload from './DocumentUpload';
import VerificationAgreement from './VerificationAgreement';
import Signature from './Signature';
import idicon from '../images/icons/IDicon.svg';
import idicon2 from '../images/icons/idicon2.svg';
import passport from '../images/icons/passporticon.svg';
import tick from '../images/icons/tick.svg';
import cameraicon from '../images/icons/cameraicon.svg';
import qrcode from '../images/qrcode.png';
import PersonalDetails from './PersonalDetails';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DocumentPreviewModal from './DocumentPreviewModal';
import DocumentUploadBox from './DocumentUploadBox';
import checkmark from '../images/icons/greencheckmark.svg';
import deleteIcon from '../images/icons/delete.svg';
import {useStore} from '../store';
import {TailSpin} from 'react-loader-spinner';
import kycsuccess from '../images/kycdone.svg';
import Confirmation from './Confirmation';
import SignatureConfirmation from './SignatureConfirmation';
import axios from 'axios';
import toast from 'react-hot-toast';
import Webcam from 'react-webcam';
import {getUserProfileDetails, uploadKycImage} from '../api';
import CustomQRCode from './CustomQRCode';

const KycFlow = ({
                     continueBtn,
                     previousBtn,
                     selectedCountry,
                     selectedCountryCode,
                     setSelectedCountry,
                     setSelectedCountryCode,
                     selectedDocument,
                     setSelectedDocument,
                     index,
                     setIndex,
                     kycComplete,
                     setKycComplete,
                     allCountries,
                     isMobile,
                     setFrontPreview,
                     frontPreview,
                     selfiePreview,
                     setSelfiePreview,
                     signaturePreview,
                     setSignaturePreview
                 }) => {
    const navigate = useNavigate();
    const {setSelfie, ocrData} = useStore();
    const [kycDocuments, setKycDocuments] = useState([]); // Add this state
    const [value, setValue] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [gender, setgender] = useState('');
    const [number, setnumber] = useState('');
    const [email, setemail] = useState('');
    const [expDate, setExpDate] = useState('');
    const [idnumber, setidnumber] = useState('');
    const [line1, setline1] = useState('');
    const [line2, setline2] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [country, setCountry] = useState('');
    const [zipcode, setzipcode] = useState('');
    const [backPreview, setBackPreview] = useState(null);
    const [dob, setdob] = useState('');
    const webcamRef = useRef(null);
    const [isWebcamOpen, setIsWebcamOpen] = useState(false);
    const [selfieMatched, setSelfieMatched] = useState('');
    const [captureFromWeb, setCaptureFromWeb] = useState(false);
    const [sigImageFormData, setSigImageFormData] = useState('');
    const [submitForm, setSubmitForm] = useState(false);
    const [reSubmitForm, setReSubmitForm] = useState(false);
    // for when kyc is processing
    const [processing, setProcessing] = useState(false);
    const [retrievedSig, setRetrievedSig] = useState('');
    const [searchParams] = useSearchParams();
    // kyc success modal
    const [success, setSuccess] = useState(false);

    const isNumber = value !== '' && value !== null;

    const [signatureImage, setSignatureImage] = useState('');

    // MODAL
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [isDarkMode, setIsDarkMode] = useState(true); // Add dark mode state

    const cameFromKycDocumentStatus = (searchParams.get('from') === 'kyc-document-status');

    useEffect(() => {
        if (searchParams.get('tab')) {
            if (searchParams.get('tab') === 2 && !selectedDocument) {
                toast.error('Choose one option to proceed');
            } else {
                setIndex(Number(searchParams.get('tab')));
            }
        }
    }, [searchParams]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const hasAllRequiredDocuments = kycDocuments.length === 3; // Check if all 3 documents are present

    const handleUploadSelfie = async event => {
        event.preventDefault();
        setProcessing(true);
        const files = event.type === 'drop' ? event.dataTransfer.files : event.target.files;
        const maxSizeInBytes = 4 * 1024 * 1024;
        if (files && files[0].size > maxSizeInBytes) {
            toast.error('File size exceeds the limit (4MB). Please select a smaller file.');
            event.target.value = null;
            return;
        }
        if (files.length) {
            const filename = `selfie${Date.now()}.jpeg`;
            const formData = new FormData();
            formData.append('file', files[0], filename);
            setSelfiePreview(files[0]);
            try {
                const documentType = 'SELFIE_WITH_ID';
                const response = await uploadKycImage(formData, documentType);
                if (response.code === 200 || response.code === 201) {
                    toast.success('Image uploaded successfully');
                    setSelfie(response.imageUrl);
                } else {
                    toast.error('something went wrong, please try again later');
                    setSelfiePreview('');
                    setSelfie('');
                    toast.error('Image upload failed!');
                }
                setProcessing(false);
            } catch (error) {
                setProcessing(false);
                setBackPreview('');
                setSelfiePreview('');
                console.error('Error during OCR check:', error);
            }
        }
    };

    const handleWebcamSelfie = useCallback(async () => {
        setProcessing(true);
        try {
            const imageSrc = webcamRef.current.getScreenshot();
            setIsWebcamOpen(false);
            setCaptureFromWeb(true);
            const filename = `selfie${Date.now()}.jpeg`;
            const blob = await fetch(imageSrc).then(res => res.blob());

            const formData = new FormData();
            formData.append('file', blob, filename);
            const documentType = 'SELFIE_WITH_ID';
            const response = await uploadKycImage(formData, documentType);
            if (response.code === 200 || response.code === 201) {
                toast.success('Image uploaded successfully');
                setSelfie(response.imageUrl);
                setSelfiePreview(response.imageUrl);
            } else {
                toast.error(response?.message || 'Something went wrong, please try again later');
                setSelfiePreview('');
                setSelfie('');
                toast.error('Image upload failed!');
            }
            setProcessing(false);
        } catch (error) {
            setProcessing(false);
            setBackPreview('');
            setSelfiePreview('');
            console.error('Error during upload selfie:', error);
        }
    }, [webcamRef]);

    useEffect(() => {
        const fetchKycDocuments = async () => {
            try {
                const userProfile = await getUserProfileDetails();
                setKycDocuments(userProfile.KYC || []);
            } catch (error) {
                console.error('Error fetching user profile details:', error);
            }
        };

        fetchKycDocuments();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://ipapi.co/json/');
                console.log(res.data.ip, res.data.country_name);
                setSelectedCountry(res.data.country_name);
            } catch (error) {
                console.log(error);
            }

            setfirstname(ocrData.firstName);
            setlastname(ocrData.lastName);
            setidnumber(ocrData.idNumber);
            setExpDate(ocrData.idExpiryDate);
            setgender(ocrData.gender);
            setemail(ocrData.email);
            setnumber(ocrData.phoneNumber);
            setline1(ocrData.addressLine1);
            setline2(ocrData.addressLine2);
            setcity(ocrData.city);
            setstate(ocrData.stateParishRegion);
            setzipcode(ocrData.postalCode);
        };

        fetchData();

        const handleOutsideClick = event => {
            if (event.target.closest('.modal-content') === null) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [ocrData]);

    return (
        <div className={`md:w-[546px] w-full relative ${isDarkMode ? '#1c1d20 text-white' : 'text-black'}`}>
            <div className="text-right">
                <button onClick={toggleDarkMode}
                        className="px-4 mx-2 py-2 mb-5 font-bold text-white bg-[#00A4E6] rounded-md cursor-pointer">
                    Toggle Dark Mode
                </button>
                {index > 1 && (
                    <button
                        className="w-auto px-4 mb-5 py-2 font-bold text-white bg-[#00A4E6] rounded-md cursor-pointer"
                        onClick={() => {
                            // getUserAllUploadedDocuments();
                            // setRetrievedFront("");
                            // setRetrievedSig("");
                            // setRetrievedSelfie("");
                        }}
                    >
                        Refresh
                    </button>
                )}
            </div>
            {index < 9 && (
                <div
                    className={`relative h-auto px-1 py-4 overflow-visible border-2 rounded-md sm:p-4 ${isDarkMode ? '#1c1d20 border-gray-700' : 'bg-white border-gray-600/20'}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            {index !== 6 ? (
                                <p className="text-sm font-[500]"> Verify your identity</p>
                            ) : (
                                <p className="text-sm font-[500]">Read and sign our customer agreement</p>
                            )}
                        </div>
                        <div className="my-6">
                            <VerificationProgressBar step={index} setIndex={setIndex}
                                                     isDarkMode={isDarkMode}></VerificationProgressBar>
                        </div>
                        {processing && (
                            <div
                                className={`absolute z-10 top-0 left-0 w-full rounded-md sm:[h-70%] h-full border-2 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-[#D0D5DD]'}`}>
                                <div
                                    className="flex flex-col items-center justify-center h-full px-4 space-y-6 text-center">
                                    <TailSpin
                                        height="60"
                                        width="60"
                                        color="#1570EF"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={true}
                                    />
                                    <p className="font-bold text-[24px]">Processing...</p>
                                    <p className="text-sm font-light">Hang on while we process your documents. </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {index === 1 && (
                        <div className="flex flex-col h-[90%]">
                            <CountrySelector
                                allCountries={allCountries}
                                selectedCountry={selectedCountry}
                                selectedCountryCode={selectedCountryCode}
                                setSelectedCountry={setSelectedCountry}
                                setSelectedCountryCode={setSelectedCountryCode}
                                darkmode={isDarkMode}
                            ></CountrySelector>
                            <p className="font-light">
                                By knowing your country, we can ensure that we are complying with the laws and
                                regulations of that country when verifying your identity and processing transactions.
                            </p>
                            <KycButtons
                                selectedCountry={selectedCountry}
                                index={index}
                                continueBtn={continueBtn}
                                previousBtn={cameFromKycDocumentStatus ? null : previousBtn}
                                cameFromKycDocumentStatus={cameFromKycDocumentStatus}
                            ></KycButtons>
                        </div>
                    )}
                    {index === 2 && (
                        <div className="flex flex-col h-[90%]">
                            <div className="my-4">
                                <p className="text-xl">Verify it’s you</p>
                                <p className="mt-4 font-light">
                                    Select a document to verify your identity, please ensure you have the selected
                                    document and ensure that they are up-to-date.
                                </p>
                                <div
                                    className="flex flex-wrap items-center justify-center gap-4 my-4 text-center md:justify-between">
                                    <div
                                        className={`flex flex-col items-center justify-evenly px-6 py-4 border h-[160px] w-[152px] rounded-md cursor-pointer hover:${isDarkMode ? 'bg-gray-700' : 'bg-[#EAECF0]'} ${selectedDocument === 'National ID' && 'border-[#00A4E6]'}`}
                                        onClick={() => setSelectedDocument('National ID')}
                                    >
                                        <img src={idicon} alt=""/>
                                        <p className="text-sm">National ID</p>
                                        {selectedDocument === 'National ID' && <img src={tick} alt=""/>}
                                    </div>
                                    <div
                                        className={`flex flex-col items-center justify-evenly px-6 py-4 border h-[160px] w-[152px] rounded-md cursor-pointer hover:${isDarkMode ? 'bg-gray-700' : 'bg-[#EAECF0]'} ${selectedDocument === 'Passport' && 'border-[#00A4E6]'}`}
                                        onClick={() => setSelectedDocument('Passport')}
                                    >
                                        <img src={passport} alt=""/>
                                        <p className="text-sm">Passport</p>
                                        {selectedDocument === 'Passport' && <img src={tick} alt=""/>}
                                    </div>
                                    <div
                                        className={`flex flex-col items-center justify-evenly px-6 py-4 border h-[160px] w-[152px] rounded-md cursor-pointer hover:${isDarkMode ? 'bg-gray-700' : 'bg-[#EAECF0]'} ${selectedDocument === 'Drivers license' && 'border-[#00A4E6]'}`}
                                        onClick={() => setSelectedDocument('Drivers license')}
                                    >
                                        <img src={idicon} alt=""/>
                                        <p className="text-sm">Drivers license</p>
                                        {selectedDocument === 'Drivers license' && <img src={tick} alt=""/>}
                                    </div>
                                </div>
                            </div>

                            <KycButtons
                                selectedDocument={selectedDocument}
                                index={index}
                                continueBtn={continueBtn}
                                previousBtn={cameFromKycDocumentStatus ? null : previousBtn}
                                cameFromKycDocumentStatus={cameFromKycDocumentStatus}
                            ></KycButtons>
                        </div>
                    )}
                    {index === 3 && (
                        <div className="flex flex-col h-[90%]">
                            {selectedDocument === 'National ID' && (
                                <>
                                    <div className="mt-4">
                                        <p className="text-xl">Upload your document</p>
                                        <div className="custom-select relative"></div>
                                        <div className="my-4 text-sm">
                                            <p className="font-light">Please upload a copy of your
                                                valid {selectedDocument}.</p>
                                            <DocumentUpload
                                                setProcessing={setProcessing}
                                                isMobile={isMobile}
                                                selectedDocument={selectedDocument}
                                                frontPreview={frontPreview}
                                                setFrontPreview={setFrontPreview}
                                                backPreview={backPreview}
                                                setBackPreview={setBackPreview}
                                                isDarkMode={isDarkMode}
                                            ></DocumentUpload>
                                        </div>
                                    </div>
                                </>
                            )}
                            {selectedDocument === 'Passport' && (
                                <>
                                    <div className="mt-4">
                                        <p className="text-xl">Upload your document</p>
                                        <div className="custom-select relative"></div>
                                        <div className="my-4 text-sm">
                                            <p className="font-light">Please upload a copy of your
                                                valid {selectedDocument}.</p>
                                            <DocumentUpload
                                                setProcessing={setProcessing}
                                                isMobile={isMobile}
                                                selectedDocument={selectedDocument}
                                                frontPreview={frontPreview}
                                                setFrontPreview={setFrontPreview}
                                                backPreview={backPreview}
                                                setBackPreview={setBackPreview}
                                                isDarkMode={isDarkMode}
                                            ></DocumentUpload>
                                        </div>
                                    </div>
                                </>
                            )}
                            {selectedDocument === 'Drivers license' && (
                                <>
                                    <div className="mt-4">
                                        <p className="text-xl">Upload your document</p>
                                        <div className="custom-select relative"></div>
                                        <div className="my-4 text-sm">
                                            <p className="font-light">Please upload a copy of your
                                                valid {selectedDocument}.</p>
                                            <DocumentUpload
                                                setProcessing={setProcessing}
                                                isMobile={isMobile}
                                                selectedDocument={selectedDocument}
                                                frontPreview={frontPreview}
                                                setFrontPreview={setFrontPreview}
                                                backPreview={backPreview}
                                                setBackPreview={setBackPreview}
                                                isDarkMode={isDarkMode}
                                            ></DocumentUpload>
                                        </div>
                                    </div>
                                </>
                            )}
                            <KycButtons
                                index={index}
                                continueBtn={continueBtn}
                                previousBtn={cameFromKycDocumentStatus ? null : previousBtn}
                                cameFromKycDocumentStatus={cameFromKycDocumentStatus}
                            ></KycButtons>
                        </div>
                    )}
                    {index === 4 && (
                        <>
                            {open &&
                                <DocumentPreviewModal modalRef={modalRef} index={index} selfiePreview={selfiePreview}
                                                      onClose={handleClose} isDarkMode={isDarkMode}/>}
                            <div className="flex flex-col h-[90%]">
                                <div className="my-4 space-y-4">
                                    <p className="text-xl">Take a selfie</p>
                                    <p className="mt-4 text-sm font-light">To verify your uploaded documents, please
                                        take a selfie holding ID beside your face.</p>
                                    <div
                                        className={`mt-2 space-y-4 border-2 flex justify-center items-center flex-col sm:p-6 p-2 rounded-md text-center ${isDarkMode ? 'border-gray-700' : 'border-[#eaecf0]'}`}>
                                        <img src={cameraicon} alt=""/>
                                        {!isWebcamOpen && !captureFromWeb && (
                                            <button onClick={() => setIsWebcamOpen(true)}
                                                    className="px-4 py-2 text-white bg-[#00A4E6] rounded-md cursor-pointer">
                                                Take Selfie Using webcam
                                            </button>
                                        )}
                                        {isWebcamOpen && (
                                            <>
                                                <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg"/>
                                                <button onClick={handleWebcamSelfie}>Capture photo</button>
                                            </>
                                        )}

                                        {!isWebcamOpen ? (
                                            <>
                                                {selfiePreview ? (
                                                    <div
                                                        className="flex flex-col items-center justify-center w-full gap-1 p-6 mt-4 text-left border rounded-md sm:gap-6 sm:flex-row border-[#00A4E6]">
                                                        <img src={upload} alt="" className="h-8"/>
                                                        <div>
                                                            <p className="text-sm">Upload successful</p>
                                                            <div className="flex justify-center gap-1">
                                                                <span>200 KB</span> - <span
                                                                className="text-green-600">Done</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="flex items-center justify-between gap-4 ml-0 sm:ml-auto">
                                                            <button onClick={handleOpen}>View</button>
                                                            <img src={checkmark} alt=""/> {' '}
                                                            <img
                                                                src={deleteIcon}
                                                                alt=""
                                                                className="h-8 cursor-pointer"
                                                                onClick={() => {
                                                                    setSelfieMatched('');
                                                                    setSelfiePreview(null);
                                                                    setSelfie('');
                                                                    setCaptureFromWeb(false);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <DocumentUploadBox
                                                        handleUpload={handleUploadSelfie}
                                                        uploadText="Click to upload selfie holding your ID"
                                                        preview={selfiePreview}
                                                        innerClass={'w-full p-4 space-y-1 text-sm document-upload-box'}
                                                    />
                                                )}
                                            </>
                                        ) : (
                                            <button onClick={() => setIsWebcamOpen(false)}
                                                    className="px-4 py-2 text-white bg-[#00A4E6] rounded-md cursor-pointer">
                                                Upload File
                                            </button>
                                        )}
                                    </div>
                                    {!isMobile && (
                                        <div>
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="w-full h-[1px] bg-gray-800/20"></div>
                                                <p>or</p>
                                                <div className="w-full h-[1px] bg-gray-800/20"></div>
                                            </div>
                                            {/* OTHER OPTIONS */}
                                            <div className="flex flex-col justify-between gap-2 md:flex-row">
                                                <div
                                                    className={`mt-2 space-y-4 border-2 flex flex-col p-4 rounded-md w-full ${isDarkMode ? 'border-gray-700' : 'border-[#eaecf0]'}`}>
                                                    <p className="text-xs font-light">Option 1</p>
                                                    <p className="text-xl">Scan the QR code</p>
                                                    <p className="text-xs font-light">
                                                        Open the camera app and scan the QR code on screen. <br/> {' '}
                                                        <span className="text-[#00A4E6] underline cursor-pointer ">How to scan QR code</span>
                                                    </p>
                                                    <CustomQRCode
                                                        value={`${process.env.REACT_APP_LANDING_URL}/verification?token=${encodeURIComponent(localStorage.getItem('authToken') || '')}`}
                                                    />
                                                </div>
                                                <div
                                                    className={`mt-2 space-y-4 border-2 flex flex-col p-4 rounded-md w-full ${isDarkMode ? 'border-gray-700' : 'border-[#eaecf0]'}`}>
                                                    <p className="text-xs font-light">Option 2</p>
                                                    <p className="text-xl">Get link via SMS</p>
                                                    <p className="text-xs font-light">We’ll text a secure link to your
                                                        mobile at no extra cost.</p>
                                                    <div className="space-y-2">
                                                        {' '}
                                                        <p className="text-xs font-light">Phone number</p>
                                                        <div
                                                            className={`w-full px-2 bg-white rounded-lg shadow-sm ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                                                            <PhoneInput placeholder="Eg-1-800-000-0000" value={value}
                                                                        onChange={setValue}/>
                                                        </div>
                                                    </div>
                                                    <button
                                                        disabled={!isNumber}
                                                        className={`w-full px-4 py-2 font-bold text-white rounded-md cursor-pointer ${isNumber ? 'bg-[#008ffd] hover:bg-[#00A4E6]' : 'bg-blue-600/20'}`}
                                                    >
                                                        Get the link
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <KycButtons
                                    index={index}
                                    continueBtn={continueBtn}
                                    previousBtn={cameFromKycDocumentStatus ? null : previousBtn}
                                    cameFromKycDocumentStatus={cameFromKycDocumentStatus}
                                ></KycButtons>
                            </div>
                        </>
                    )}

                    {index === 5 && (
                        <>
                            <div className="flex flex-col h-[90%]">
                                <SignatureConfirmation
                                    isMobile={isMobile}
                                    continueBtn={continueBtn}
                                    signaturePreview={signaturePreview}
                                    setSignaturePreview={setSignaturePreview}
                                    signatureImage={signatureImage}
                                    setSignatureImage={setSignatureImage}
                                    sigImageFormData={sigImageFormData}
                                    setSigImageFormData={setSigImageFormData}
                                    setProcessing={setProcessing}
                                    setRetrievedSig={setRetrievedSig}
                                    isDarkMode={isDarkMode}
                                ></SignatureConfirmation>
                                {/* buttons */}
                                <KycButtons
                                    selectedCountry={selectedCountry}
                                    index={index}
                                    continueBtn={continueBtn}
                                    signaturePreview={signaturePreview}
                                    previousBtn={cameFromKycDocumentStatus ? null : previousBtn}
                                    requiredUploadComplete={!!selectedCountry} // Check if country is selected
                                    kycDocuments={kycDocuments} // Pass this prop
                                    setSubmitForm={setSubmitForm}
                                    cameFromKycDocumentStatus={cameFromKycDocumentStatus}
                                />
                            </div>
                        </>
                    )}
                </div>
            )}
            {index === 6 && (
                <div className="my-4 text-sm text-center">
                    By clicking ‘I accept’ you are agreeing that you have read and understood our customer services
                    agreement
                </div>
            )}
        </div>
    );
};

export default KycFlow;
