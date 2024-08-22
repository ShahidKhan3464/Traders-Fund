import React, { useState, useRef } from 'react';
import '../pages/Verification.css';
import SignatureCanvas from 'react-signature-canvas';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { useStore } from '../store';
import axios from 'axios';
import 'react-image-crop/dist/ReactCrop.css';

import { generateTemplate } from '../utils/generateTemplate';

const Signature = ({
  continueBtn,
  selectedCountry,
  setSelectedCountry,
  selectedDocument,
  setSelectedDocument,
  isOpen,
  setIsOpen,
  toggleModal,
  frontPreview,
  signatureImage,
  setSignatureImage,
  firstname,
  lastname,
  idnumber,
  expDate,
  gender,
  email,
  number,
  line1,
  line2,
  city,
  state,
  zipcode,
  dob
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
  const CustomOverlay = ({ style, ...rest }) => (
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
  const imgRef = useRef(null);
  const { docFront, selfie, transparentSig, setTransparentSig } = useStore();
  const [encodedSignZoom, setEncodedSignZoom] = useState('');
  const [encodedSignHand, setEncodedSignHand] = useState('');
  // const [transparentSig, setTransparentSig] = useState('');
  const [imageRef, setImageRef] = useState(null);

  const [crop, setCrop] = useState({
    unit: '%', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 50,
    height: 50
  });
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);

  const clearSignature = () => {
    canvasRef.current.clear();
  };

  const saveSignature = () => {
    const signature = canvasRef.current.toDataURL();
    // console.log(signature);
    setEncodedSignHand(signature);
    console.log(docFront);
    // do something with the signature data (e.g. send it to the server)
  };

  const handleKycSubmission = async () => {
    // Set up payload data
    const signature = canvasRef.current.toDataURL();

    let data = {
      encoded_id: docFront.replace(/^data:image\/jpeg;base64,/, ''),
      encoded_sel: selfie.replace(/^data:image\/jpeg;base64,/, '')
      // encoded_sign_zoom: encodedSignZoom.replace(/^data:image\/jpeg;base64,/, ''),
      // encoded_sign_hand: signature.replace(/^data:image\/png;base64,/, '')
    };

    // console.log(data.encoded_sign_hand);
    // console.log(data.encoded_sign_zoom);
    // try {
    //   const response = await axios.post(`${process.env.REACT_APP_KYC_API}/kyc-check`, data);
    //   const kycResult = response.data;
    //   await axios.post(`${process.env.REACT_APP_PTF_API}/auth/set-kyc-status`, { status: 'pending' }, { withCredentials: true });
    //
    //   // Extract the status of the ID and Selfie documents
    //   const idStatus = kycResult.documents.find(doc => doc.name === 'ID').status;
    //   const selfieStatus = kycResult.documents.find(doc => doc.name === 'Selfie').status;
    //
    //   console.log(response.data);
    //   // If both the ID and Selfie documents are approved, verify the user in the database
    //   if (idStatus === 'APPROVED' && selfieStatus === 'APPROVED') {
    //     // Make a request to your API to verify the user
    //     console.log('hey??? VERIFY');
    //     await axios.post(`${process.env.REACT_APP_PTF_API}/auth/set-kyc-verified`, {}, { withCredentials: true });
    //     await axios.post(`${process.env.REACT_APP_PTF_API}/auth/set-kyc-status`, { status: 'passed' }, { withCredentials: true });
    //     const personState = {
    //       firstName: firstname, // Input: User's first name
    //       lastName: lastname, // Input: User's last name
    //       gender: gender, // Input: User's gender
    //       dob: dob, // Input: User's date of birth
    //       phone: number, // Input: User's phone number
    //       email: email, // Input: User's email address
    //       addressLine1: line1, // Input: Address line 1
    //       addressLine2: line2, // Input: Address line 2
    //       city: city, // Input: City
    //       state: state, // Input: State/Province/Region
    //       zipCode: zipcode, // Input: Zip/Postal code
    //       country: selectedCountry, // Input: Country
    //       idType: selectedDocument, // Input: Type of the ID provided - Driver's License, Passport, or National ID
    //       idNumber: idnumber, // Input: ID Number
    //       signature: `data:;base64,${transparentSig}`
    //     };
    //
    //     const filledTemplate = generateTemplate(personState);
    //     try {
    //       const response = await axios.post(`${process.env.REACT_APP_PTF_API}/kyc/generate-pdf`, { filledTemplate });
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('Error during agreement gen:', error);
    //     }
    //
    //     try {
    //       const response = await axios.post(
    //         `${process.env.REACT_APP_PTF_API}/billing/generate-trading-accounts`,
    //         {},
    //         { withCredentials: true }
    //       );
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error('There was an error!', error);
    //     }
    //   } else {
    //     await axios.post(`${process.env.REACT_APP_PTF_API}/auth/set-kyc-status`, { status: 'failed' }, { withCredentials: true });
    //   }
    // } catch (error) {
    //   console.error('Error during KYC check:', error);
    // }
  };

  const highlightRef = useRef(null);

  const handleDraw = () => {
    const canvas = highlightRef.current.canvas;
    if (!canvas) return;
    const context = canvas.getContext('2d');

    // Set the rectangle properties
    const x = 50; // X-coordinate
    const y = 50; // Y-coordinate
    const width = 200; // Rectangle width
    const height = 100; // Rectangle height

    // Draw the rectangle
    context.strokeStyle = 'red';
    context.lineWidth = 1;
    context.strokeRect(x, y, width, height);
  };

  const handleClear = () => {
    highlightRef.current.clear(); // Clear the canvas
  };

  const onCropComplete = crop => {
    if (crop.width && crop.height) {
      console.log(imgRef.current);
      getCroppedImg(imgRef.current, crop).then(async croppedImageUrl => {
        console.log(croppedImageUrl);
        try {
          const response = await axios.post(`${process.env.REACT_APP_KYC_API}/transform-sign`, {
            img: croppedImageUrl.replace(/^data:image\/jpeg;base64,/, '')
          });
          console.log(response.data);
          // setEncodedSignZoom(response.data.img);
          setEncodedSignZoom(croppedImageUrl);
          setTransparentSig(response.data.img);
        } catch (error) {
          console.error('Error during KYC check:', error);
        }
      });
    }
  };

  const onImageLoaded = image => {
    imgRef.current = image.target;
    console.log(imgRef.current);
  };

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width, crop.height);

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        blob => {
          if (!blob) {
            console.error('Canvas is empty');
            return;
          }
          blob.name = 'crop.jpg';
          let reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = function () {
            let base64data = reader.result;
            resolve(base64data);
          };
        },
        'image/jpeg',
        1
      );
    });
  };

  const captureSignature = () => {
    const canvas = canvasRef.current.getCanvas();
    const dataUrl = canvas.toDataURL(); // Get the signature as a data URL
    setSignatureImage(dataUrl);
  };

  // useEffect(() => {
  //   async function postSignature() {
  //     let data = {
  //       output_format: 'coordinates',
  //       doc_base64: docFront.replace(/^data:image\/jpeg;base64,/, ''),
  //       req_id: 'sd-req-sn-1'
  //     };

  //     console.log(docFront.replace(/^data:image\/jpeg;base64,/, ''));

  //     try {
  //       const response = await axios({
  //         method: 'post',
  //         url: 'https://ping.arya.ai/api/v1/signature-detection',
  //         headers: {
  //           token: 'cc75f6cca2633a91a52ae6bf4c82ac4a',
  //           'content-type': 'application/json'
  //         },
  //         data: data
  //       });
  //       console.log(response.data);
  //       let signData = response.data.Signs.Sign_1;
  //       setCrop({
  //         unit: '%',
  //         x: signData.left * 100,
  //         y: signData.top * 100,
  //         width: signData.width * 100,
  //         height: signData.height * 100
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   postSignature();
  // }, []);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0)', // You can modify the overlay background color if needed
          zIndex: 9999 // Set the z-index for the overlay
        },
        content: {
          // Add your modal content styles here
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          borderRadius: '12px'
        }
      }}
      overlayComponent={CustomOverlay} // Set the overlay component to the custom overlay component
    >
      {/* Modal content */}
      <div className="px-0 space-y-4 sm:px-4">
        <div className="flex items-center justify-between">
          <p className="text-xl">Add your signature here</p>
          <AiOutlineClose className="text-lg cursor-pointer" onClick={toggleModal}></AiOutlineClose>
        </div>
        {/* <p className="text-sm font-[400] ">Please draw a box around the signature that appears on your ID below.</p> */}
      </div>
      {/* {frontPreview && (
        <div
          className="mt-3 preview-box"
          style={{
            height: 'auto'
          }}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '500px',
              height: 'auto',
              overflow: 'hidden'
            }}
            className="flex items-center justify-center mx-auto"
          >
            <ReactCrop crop={crop} onChange={c => setCrop(c)} onComplete={onCropComplete}>
              <img src={frontPreview} onLoad={onImageLoaded} />
            </ReactCrop>
          </div>{' '}
        </div>
      )} */}

      {/* <div
        class="bg-transparent w-[140px] flex justify-center hover:bg-blue-500 text-sm font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded mt-2 cursor-pointer"
        onClick={handleClear}
      >
        Clear drawing
      </div> */}

      <div className="sig-input">
        <p className="text-sm font-[400]">Draw you signature within the frame to continue.</p>
        <div className="flex flex-col items-center justify-center space-y-4">
          <SignatureCanvas
            ref={canvasRef}
            penColor="black"
            canvasProps={{
              className: 'sigCanvas'
            }}
          />

          <div className="flex gap-4 ml-auto ">
            <button
              className={`w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md `}
              onClick={() => {
                captureSignature();
                handleKycSubmission();
                toggleModal();
                continueBtn();
              }}
            >
              Sign and submit
            </button>
            <div className="px-4 py-2 font-bold border border-gray-300 rounded-md cursor-pointer" onClick={clearSignature}>
              Clear
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block">
        <div className="flex items-center justify-between gap-2">
          <div className="w-full h-[1px] bg-gray-800/20"></div>
          <p>or</p>
          <div className="w-full h-[1px] bg-gray-800/20"></div>
        </div>
        <div className="p-4 flex md:flex-row flex-col items-center justify-center rounded-md md:h-[178px] h-auto border-2 border-[#eaecf0]">
          <img src={qrcode} alt="" className="h-[130px] aspect-square" />
          <div className="flex flex-col space-y-2 text-center text-black md:text-left">
            <p className="text-lg font-bold">Scan the QR code</p>
            <p className="text-sm font-light">Open the camera app and scan the QR code on screen.</p>
            <p className="text-xs text-blue-600 underline cursor-pointer">How to scan QR code</p>
          </div>
        </div>
      </div> */}
    </Modal>
  );
};

export default Signature;
