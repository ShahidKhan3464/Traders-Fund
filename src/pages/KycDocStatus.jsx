import React, {useState, useEffect, useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import KycStatusTable from '../components/KycStatusTable';
import axios from 'axios';
import VerificationAgreement from '../components/VerificationAgreement';
import {getUserProfileDetails, uploadKycImage} from "../api";
import html2pdf from 'html2pdf.js';
import toast from 'react-hot-toast'
import html2canvas from 'html2canvas';
import 'blueimp-canvas-to-blob';


const KycVerificationStatus = ({activeNav, setActiveNav}) => {
    const [iskycverified, setIskycverified] = useState(false);
    const [kycVerifiedStatus, setKycVerifiedStatus] = useState('');
    const [kycDocsSubmittedDate, setKycDocsSubmittedDate] = useState('');
    const [kycDocsResponseDate, setKycDocsResponseDate] = useState('');
    const [data, setData] = useState();
    const [allDocumentsApproved, setAllDocumentsApproved] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formHtml, setFormHtml] = useState('');
    const formRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        setActiveNav(false);
        window.scrollTo(0, 0);
    }, []);

    const fetchData = async () => {
        try {
            const response = await getUserProfileDetails();
            setData(response)
            setIskycverified(!!data?.verifiedBy);
            setKycVerifiedStatus(data?.kycStatus);
            setKycDocsSubmittedDate(data?.kycDocsSubmittedDate);
            setKycDocsResponseDate(data?.kycDocsResponseDate);

            const allChallengesHaveTradingAccounts = data?.userChallenges?.every(challenge => challenge?.tradingAccount !== null);

            setAllDocumentsApproved(response?.KYC?.every((doc) => doc?.status === "APPROVED"))

            if (data?.isKycVerified && allChallengesHaveTradingAccounts) {
                window.location.href = `${process.env.REACT_APP_LANDING_URL}/`;
                return;
            } else {
                console.log('NOT ALL USER CHALLENGES HAVE A TRADING ACCOUNT.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    const handleSubmit = async () => {
        if (isSubmitting) return;
        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 0));

            const filename = `Form_${Date.now()}.png`;
            const formElement = document.getElementById('verification-agreement-box');

            if (!formElement) {
                throw new Error('Form element not found');
            }

            const originalStyle = {
                height: formElement.style.height,
                overflow: formElement.style.overflow,
                position: formElement.style.position
            };

            formElement.style.height = 'auto';
            formElement.style.overflow = 'visible';
            formElement.style.position = 'static';

            const canvas = await html2canvas(formElement, {
                useCORS: true,
                scrollX: 0,
                scrollY: 0,
                width: formElement.scrollWidth,
                height: formElement.scrollHeight,
                windowWidth: formElement.scrollWidth,
                windowHeight: formElement.scrollHeight
            });

            formElement.style.height = originalStyle.height;
            formElement.style.overflow = originalStyle.overflow;
            formElement.style.position = originalStyle.position;

            const blob = await new Promise(resolve => {
                if (canvas.toBlob) {
                    canvas.toBlob(resolve, 'image/png');
                } else {
                    resolve(null);
                }
            });

            if (!blob) {
                throw new Error('Failed to generate blob from canvas');
            }

            const formData = new FormData();
            formData.append('file', blob, filename);

            const response = await uploadKycImage(formData, "AGREEMENT_FORM");

            if (response.code === 200 || response.code === 201) {
                toast.success(response.message || 'Form uploaded successfully');
                navigate('/dashboard');
            } else {
                toast.error(response?.message || 'Form failed to upload');
            }
        } catch (error) {
            console.error('Error uploading form:', error);
            toast.error(error?.message || 'Form failed to upload');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (<div className="min-h-[100vh]">
        {!allDocumentsApproved && (
            <div className="flex flex-col items-center justify-center p-10 mt-5 text-center">
                <p className="text-[18px] ">
                    "Automatic KYC verification for your document has failed. You will be verified by our agent within 2
                    business days."
                </p>
            </div>
        )}
        <KycStatusTable
            iskycverified={iskycverified}
            kycVerifiedStatus={kycVerifiedStatus?.toUpperCase()}
            kycDocsResponseDate={kycDocsResponseDate}
            kycDocsSubmittedDate={kycDocsSubmittedDate}
            kycData={data?.KYC}
        ></KycStatusTable>
        {!allDocumentsApproved && (<div className="flex flex-col items-center justify-center p-10 text-center">
            <p className="text-[18px] ">"Once all your documents are verified, you will see a customer agreement
                form."</p>
        </div>)}
        {allDocumentsApproved && (<div className="md:w-[700px] mx-auto w-auto text-black relative mt-5">
            {/* {isAgreeButtonDisabled && <VerificationBar personalInformation kycWarning />} */}
            <div
                className="relative h-auto p-4 overflow-visible bg-white border-2 rounded-md border-gray-600/20">

                <VerificationAgreement data={data} setFormHtml={setFormHtml} ref={formRef}/>


                <div className="flex justify-between w-full gap-4 mt-4 text-base sm:w-auto sm:ml-auto">

                    <button
                        className="flex items-center justify-center flex-1 px-4 py-2 font-bold border-2 border-solid rounded-md cursor-pointer border-slate-200"
                        // onClick={() => setOpenAgreement(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className={`w-full px-4 flex-1 py-2 font-bold text-white rounded-md ${
                            isSubmitting ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 cursor-pointer"
                        }`}
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "I Accept"}
                    </button>
                </div>
            </div>
            <div className="my-4 text-sm text-center text-white ">
                By clicking ‘I accept’ you are agreeing that you have read and understood our customer services
                agreement
            </div>
        </div>)}
    </div>);
};

export default KycVerificationStatus;
