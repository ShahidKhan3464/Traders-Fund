import React, {useState, useRef, useEffect} from 'react';
import upload from '../images/icons/upload.svg';
import '../pages/Verification.css';
import DocumentPreviewModal from './DocumentPreviewModal';
import checkmark from '../images/icons/greencheckmark.svg';
import deleteIcon from '../images/icons/delete.svg';
import {useStore} from '../store';
import DocumentUploadBox from './DocumentUploadBox';
import axios from 'axios';
import toast from 'react-hot-toast'
import {uploadKycImage} from "../api";
import CustomQRCode from "./CustomQRCode";

const DocumentUpload = ({
                            selectedDocument,
                            setProcessing,
                            frontPreview,
                            isMobile,
                            setFrontPreview,
                            backPreview,
                            setBackPreview,
                            isDarkMode,
                        }) => {
    const [open, setOpen] = useState(false);
    const modalRef = useRef(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [drag, setDrag] = useState(false);
    const {setDocFront, setDocBack, setOcrData} = useStore();

    const handleUploadFront = async event => {
        setProcessing(true);
        event.preventDefault();
        const maxSizeInBytes = 4 * 1024 * 1024;
        const files = event.type === 'drop' ? event.dataTransfer.files : event.target.files;
        if (files && files[0].size > maxSizeInBytes) {
            toast.error('File size exceeds the limit (4MB). Please select a smaller file.');
            event.target.value = null; // Clear the file input
            return;
        }
        if (files.length) {
            const formData = new FormData();
            const filename = `front-${Date.now()}`;
            formData.append('file', files[0], filename);
            setFrontPreview(files[0]);
            try {
                let documentType = ""
                if (selectedDocument === "National ID") {
                    documentType = "NATIONAL_ID"
                } else if (selectedDocument === "Passport") {
                    documentType = "PASSPORT"
                } else if (selectedDocument === "Drivers license") {
                    documentType = "DRIVING_LICENSE"
                }
                const response = await uploadKycImage(formData, documentType);

                if (response.code === 200 || response.code === 201) {
                    toast.success(response.message || "Image uploaded successfully")
                    setDocFront(response.imageUrl);
                    setFrontPreview(response.imageUrl);
                } else if (response.code === 300) {
                    toast.success(response.message || "Something went wrong, please try again later");
                    setDocFront(response.imageUrl);
                    setFrontPreview(response.imageUrl);
                    setDocFront("");
                } else {
                    toast.error(response.message || "Something went wrong, please try again later");
                    setFrontPreview("");
                    setDocFront("");
                }
                setProcessing(false);
            } catch (error) {
                setProcessing(false);
                setFrontPreview("");
                setDocFront("");
                console.error("Error during OCR check:", error);
            }
            setTimeout(() => {
                setProcessing(false);
            }, 3000);
        }
    };


    useEffect(() => {
        const handleOutsideClick = event => {
            if (event.target.closest('.modal-content') === null) {
                handleClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="mt-6 ">
            {open && <DocumentPreviewModal modalRef={modalRef} frontPreview={frontPreview} backPreview={backPreview}
                                           onClose={handleClose} isDarkMode={isDarkMode}/>}
            {selectedDocument !== 'Passport' ? (
                <div>
                    {frontPreview ? (
                        <div
                            className="flex flex-col items-center justify-center gap-1 p-6 mt-4 border border-blue-200 rounded-md sm:gap-6 sm:flex-row">
                            <img src={upload} alt="" className="h-8"/>
                            <div>
                                <p>Upload successful</p>
                                <div className="flex justify-center gap-1">
                                    <span>200 KB</span> - <span className="text-green-600">Done</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 ml-0 sm:ml-auto">
                                <button onClick={handleOpen}>View</button>
                                <img src={checkmark} alt=""/>{' '}
                                <img
                                    src={deleteIcon}
                                    alt=""
                                    className="h-8 cursor-pointer"
                                    onClick={() => {
                                        setFrontPreview(null);
                                        setDocFront('');
                                        // setDocumentExtracted("");
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <DocumentUploadBox
                            handleUpload={handleUploadFront}
                            uploadText={`Upload front of ${selectedDocument}`}
                            preview={frontPreview}
                            innerClass={'mt-4 space-y-1 document-upload-box'}
                        />
                    )}
                </div>
            ) : (
                <>
                    {frontPreview ? (
                        <div
                            className="flex flex-col items-center justify-center gap-1 p-6 mt-4 border border-blue-200 rounded-md sm:gap-6 sm:flex-row">
                            <img src={upload} alt="" className="h-8"/>
                            <div>
                                <p>Upload successful</p>
                                <div className="flex justify-center gap-1">
                                    <span>200 KB</span> - <span className="text-green-600">Done</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 ml-0 sm:ml-auto">
                                <button onClick={handleOpen}>View</button>
                                <img src={checkmark} alt=""/>{' '}
                                <img
                                    src={deleteIcon}
                                    alt=""
                                    className="h-8 cursor-pointer"
                                    onClick={() => {
                                        // if (documentUploadedId) {
                                        //   deleteUploadedDocument(documentUploadedId);
                                        // }
                                        setFrontPreview(null);
                                        setDocFront('');
                                    }}
                                />
                            </div>
                        </div>
                    ) : (
                        <DocumentUploadBox
                            handleUpload={handleUploadFront}
                            uploadText="Click to upload"
                            preview={frontPreview}
                            innerClass={'mt-4 space-y-1 document-upload-box'}
                        />
                    )}
                </>
            )}
            <br/>
            {!isMobile && (
                <>
                    <div className="flex items-center justify-between gap-1">
                        <div className="w-full h-[1px] bg-gray-800/20"></div>
                        <p>or</p>
                        <div className="w-full h-[1px] bg-gray-800/20"></div>
                    </div>
                    <br/>
                    <div
                        className="p-4 flex md:flex-row flex-col items-center justify-center rounded-md md:h-[178px] h-auto border-2 border-[#eaecf0]">
                        <div className="p-10">
                            <CustomQRCode
                                value={`${process.env.REACT_APP_LANDING_URL}/verification?token=${encodeURIComponent(localStorage.getItem('authToken') || '')}`}
                            />
                        </div>
                        <div className="flex flex-col space-y-2 text-center text-black md:text-left">
                            <p className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>Scan the QR
                                code</p>
                            <p className={`text-sm font-light ${isDarkMode ? 'text-white' : 'text-black'}`}>Open the
                                camera app and scan the QR code on screen.</p>
                            <p className="text-xs text-blue-600 underline cursor-pointer">How to scan QR code</p>
                        </div>
                    </div>
                    {' '}
                </>
            )}
        </div>
    );
};

export default DocumentUpload;
