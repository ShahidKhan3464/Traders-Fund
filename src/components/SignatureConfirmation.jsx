import React, {useState, useEffect, useRef} from 'react';
import down from '../images/down-arrow.svg';
import upload from '../images/icons/upload.svg';
import uploading from '../images/icons/uploading.svg';
import sampleId from '../images/sampleId.png';
import sampleId2 from '../images/sample id.png';
import closedocbtn from '../images/icons/closedocbtn.svg';
import {listOfCountries} from './CountryList';
import MobileSelfieQR from './MobileSelfieQR';
import '../pages/Verification.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {styled, Box} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import Typography from '@mui/material/Typography';
import deleteIcon from '../images/icons/delete.svg';
import SignatureCanvas from 'react-signature-canvas';
import Modal from 'react-modal';
import {AiOutlineClose} from 'react-icons/ai';

import qrcode from '../images/qrcode.png';

import {useStore} from '../store';
import axios from 'axios';

import Draggable from 'react-draggable';
import CanvasDraw from 'react-canvas-draw';
import {saveAs} from 'file-saver';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import {generateTemplate} from '../utils/generateTemplate';
import toast from 'react-hot-toast'
import {uploadKycImage} from "../api";
import CustomQRCode from "./CustomQRCode";
import DocumentPreviewModal from "./DocumentPreviewModal";
import checkmark from "../images/icons/greencheckmark.svg";
import DocumentUploadBox from "./DocumentUploadBox";

const SignatureConfirmation = ({
                                   signatureImage,
                                   setSignatureImage,
                                   typeOfDocumentToResubmit,
                                   setSigImageFormData,
                                   frontPreview,
                                   retrievedFront,
                                   customer,
                                   documentToResubmit,
                                   isMobile,
                                   setRetrievedSig,
                                   setProcessing,
                                   signaturePreview,
                                   setSignaturePreview,
                                   isDarkMode,
                               }) => {
    // MODAL
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)'
        }
    };
    const CustomOverlay = ({style, ...rest}) => (
        <div
            style={{
                ...style,
                backgroundColor: 'transparent', // Set the background color to transparent
                border: 'none' // Remove any borders
            }}
            {...rest}
        />
    );
    const canvasRef = useRef(null);
    const inputRef = useRef(null);
    const imgRef = useRef(null);
    const {docFront, selfie} = useStore();
    const [encodedSignZoom, setEncodedSignZoom] = useState('');
    const [encodedSignHand, setEncodedSignHand] = useState('');
    const [transparentSig, setTransparentSig] = useState('');
    const [open, setOpen] = useState(false);
    const [imageRef, setImageRef] = useState(null);
    const highlightRef = useRef(null);
    const resubmitParam = typeOfDocumentToResubmit ? `resubmit=${documentToResubmit.id}` : '';
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const modalRef = useRef(null);
    // const QRValue = `${baseURL}/kyc-verification?${resubmitParam}&docFront=${
    //   docFront ? docFront : retrievedFront ? retrievedFront.image_path : ""
    // }&type=Signed%20Signature&email=${emailPrefix}&token=${token}`;

    const handleClick = () => {
        inputRef.current.click();
    };

    const clearSignature = () => {
        console.log('clearing signature');
        setSigImageFormData('');
        setSignatureImage('');
        setTimeout(() => {
            canvasRef?.current?.clear();
        }, 10);
    };

    const captureSignature = async () => {
        setProcessing(true)
        const canvas = canvasRef.current.getCanvas();
        const dataUrl = canvas.toDataURL();
        const filename = `signature_${Date.now()}.jpeg`;

        try {
            const blob = await fetch(dataUrl).then(res => res.blob());

            const formData = new FormData();
            formData.append('file', blob, filename);

            const documentType = "SIGNATURE";
            const response = await uploadKycImage(formData, documentType);

            if (response.code === 200 || response.code === 201) {
                toast.success("Signature uploaded successfully")
                setSignatureImage(response.imageUrl);
                setSignaturePreview(response.imageUrl);
            } else {
                toast.error("Signature upload failed!")
                setSignatureImage("");
                setSignaturePreview("");
            }
            console.log('Upload Response:', response);
            setProcessing(false);
        } catch (error) {
            console.error('Error during upload:', error);
            setSignatureImage("");
            setSignaturePreview("");
            setProcessing(false);
            toast.error('Something went wrong, please try again');
            clearSignature();
        }
        setTimeout(() => {
            setProcessing(false);
        }, 3000);
    };

    const handleFileInputChange = async event => {
        setProcessing(true);
        event.preventDefault();
        const maxSizeInBytes = 4 * 1024 * 1024;
        const files = event.type === 'drop' ? event.dataTransfer.files : event.target.files;
        if (files && files[0].size > maxSizeInBytes) {
            toast.error('File size exceeds the limit (4MB). Please select a smaller file.');
            event.target.value = null;
            return;
        }
        if (files.length) {
            try {
                const filename = `signature_${Date.now()}.jpeg`;
                const formData = new FormData();
                formData.append('file', files[0], filename);
                setSignaturePreview(files[0]);

                const documentType = "SIGNATURE";
                const response = await uploadKycImage(formData, documentType);

                if (response.code === 200 || response.code === 201) {
                    toast.success("Signature uploaded successfully")
                    setSignatureImage(response.imageUrl);
                    setSignaturePreview(response.imageUrl);
                } else {
                    toast.error("Signature upload failed!")
                    setSignatureImage("");
                    setSignaturePreview("");
                }
                console.log('Upload Response:', response);
                setProcessing(false);
            } catch (error) {
                console.error('Error during upload:', error);
                setSignatureImage("");
                setProcessing(false);
                setSignaturePreview("");
                toast.error('Something went wrong, please try again');
            }
            setTimeout(() => {
                setProcessing(false);
            }, 3000);
        }
    };

    const renderImage = () => {
        if (signatureImage) {
            const imgSrc = typeof signatureImage === 'string'
                ? signatureImage
                : (signatureImage instanceof File ? URL.createObjectURL(signatureImage) : null);

            if (imgSrc) {
                return (
                    <img
                        className="w-full h-auto rounded-lg shadow-md border border-gray-300"
                        alt="Signature Preview"
                        src={imgSrc}
                    />
                );
            }
        }
        return null;
    };


    return (
        <>
            {open && <DocumentPreviewModal modalRef={modalRef} signaturePreview={signaturePreview}
                                           onClose={handleClose} isDarkMode={isDarkMode}/>}
            <div className="space-y-4 ">
                <p className="text-xl">{typeOfDocumentToResubmit ? 'Upload your signature*' : 'Draw your signature here*'}</p>
            </div>

            <div className="sig-input px-4 sm:p-6 p-2 max-w-[640px] mx-auto w-full">
                <p className="text-sm font-[400]">{!typeOfDocumentToResubmit && ' Draw your signature within the frame to continue.'}</p>

                <div className="flex flex-col items-center justify-center space-y-4 w-full">
                    {!typeOfDocumentToResubmit ? (
                        <>
                            <div className="w-full overflow-hidden rounded-lg">
                                <SignatureCanvas
                                    ref={canvasRef}
                                    penColor="black"
                                    canvasProps={{
                                        className: 'sigCanvas w-full h-[200px]',
                                        style: {
                                            width: '100%',
                                            maxWidth: '100%',
                                            height: '200px',
                                            backgroundColor: 'white',
                                            borderRadius: '8px',
                                            boxSizing: 'border-box',
                                        }
                                    }}
                                />
                            </div>
                            {/* Remove the renderImage call here */}

                            <div className="flex justify-end w-full gap-2 ">
                                <button
                                    className="px-4 py-2 font-bold border border-solid rounded-md cursor-pointer border-slate-200"
                                    onClick={clearSignature}
                                >
                                    Clear
                                </button>
                                {signatureImage === "" &&
                                    <button
                                        className="px-4 py-2 font-bold border border-solid rounded-md text-white cursor-pointer bg-blue-600 border-slate-200"
                                        onClick={captureSignature}
                                    >
                                        Upload Signature
                                    </button>
                                }
                            </div>
                            <input type="file" onChange={handleFileInputChange} ref={inputRef} accept="image/jpeg"
                                   style={{display: 'none'}}/>
                            {signatureImage ? (
                                <div
                                    className="flex flex-col items-center justify-center gap-1 p-6 mt-4 border border-blue-200 rounded-md sm:gap-6 sm:flex-row">
                                    <img src={renderImage()} alt="" className="h-8"/>
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
                                                setSignatureImage("");
                                                setSignaturePreview(null)
                                            }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <DocumentUploadBox
                                    handleUpload={handleFileInputChange}
                                    uploadText={"Upload signature"}
                                    preview={signaturePreview}
                                    innerClass={'mt-4 space-y-1 document-upload-box'}
                                />
                            )}

                        </>
                    ) : (
                        <>
                            {/* Remove the renderImage call here */}
                            <input type="file" onChange={handleFileInputChange} ref={inputRef} accept="image/jpeg"
                                   style={{display: 'none'}}/>
                            <button className="px-4 py-2 text-white bg-blue-600 rounded-md cursor-pointer"
                                    onClick={handleClick}>
                                Choose a file
                            </button>

                            {!isMobile && (
                                <div
                                    className="p-4 flex md:flex-row flex-col items-center justify-center rounded-md md:h-[178px] h-auto border-2 border-[#eaecf0]">
                                    <div className="p-10">
                                        <CustomQRCode
                                            value={`${process.env.REACT_APP_LANDING_URL}/verification?token=${encodeURIComponent(localStorage.getItem('authToken') || '')}`}
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-2 text-center text-black md:text-left">
                                        <p className="text-lg font-bold">Scan the QR code</p>
                                        <p className="text-sm font-light">Open the camera app and scan the QR code on
                                            screen.</p>
                                        <p className="text-xs text-blue-600 underline cursor-pointer">How to scan QR
                                            code</p>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                </div>
            </div>
        </>
    );
};

export default SignatureConfirmation;
