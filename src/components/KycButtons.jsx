import React from 'react';
import toast from 'react-hot-toast';

const KycButtons = ({
                      continueBtn,
                      previousBtn,
                      index,
                      disabled,
                      setSubmitForm,
                      typeOfDocumentToResubmit,
                      setReSubmitForm,
                      retrievedFront,
                      retrievedSelfie,
                      signaturePreview,
                      kycDocuments = [],
                      cameFromKycDocumentStatus
                    }) => {
  const hasAllRequiredDocuments = kycDocuments.length === 3; // Check if all 3 documents are present

  const handleContinueClick = async () => {
    if (
      (typeOfDocumentToResubmit === 'Passport' && index === 3) ||
      (typeOfDocumentToResubmit === 'National ID' && index === 3) ||
      (typeOfDocumentToResubmit === 'Drivers license' && index === 3) ||
      (typeOfDocumentToResubmit === 'Selfie' && index === 4) ||
      (typeOfDocumentToResubmit === 'Signed Signature' && index === 5)
    ) {
      setReSubmitForm(true);
      return;
    }

    if (
      (typeOfDocumentToResubmit === 'Passport' && index === 3 && retrievedFront) ||
      (typeOfDocumentToResubmit === 'National ID' && index === 3 && retrievedFront) ||
      (typeOfDocumentToResubmit === 'Drivers license' && index === 3 && retrievedFront) ||
      (typeOfDocumentToResubmit === 'Selfie' && index === 4 && retrievedSelfie)
    ) {
      window.location.href = '/kyc-document-status';
      return;
    }

    if (index === 2 && retrievedFront) {
      continueBtn('sum');
      return;
    }

    if (index === 5 && signaturePreview) {
      setSubmitForm(true);
      window.location.href = '/kyc-document-status';
      return;
    }

    if (index === 5 && !hasAllRequiredDocuments) {
      toast.error('Please upload all required documents.');
      return;
    }

    // Add this condition to handle redirection after step 3
    if (index > 2 && cameFromKycDocumentStatus) {
      window.location.href = '/kyc-document-status';
      return;
    }

    continueBtn();
  };

  return (
    <div className="flex justify-between w-full gap-4 mt-4 text-base sm:w-auto sm:ml-auto">
      {index > 1 && !typeOfDocumentToResubmit && !cameFromKycDocumentStatus && (
        <div
          className="flex items-center justify-center flex-1 px-4 py-2 font-bold border rounded-md cursor-pointer border-bg-[#00A4E6]"
          onClick={() => {
            if (index === 4 && retrievedFront) {
              previousBtn('sub');
              return;
            }
            if (!cameFromKycDocumentStatus) {
              previousBtn();
            }
          }}
        >
          Previous
        </div>
      )}

      <button
        className={`w-full px-4 flex-1 py-2 font-bold text-white bg-[#00A4E6] rounded-md cursor-pointer ${disabled && 'bg-blue-600/20'}`}
        onClick={handleContinueClick}
        disabled={disabled}
      >
        {index === 1 && 'Next: Upload an ID document'}
        {index === 2 && retrievedFront && 'Proceed'}
        {index === 3 && retrievedFront && 'Proceed'}
        {index === 2 && !retrievedFront && 'Next: Upload a document'}
        {index === 3 && !retrievedFront && 'Next'}
        {index === 4 && !retrievedSelfie && 'Next'}
        {index === 4 && retrievedSelfie && 'Proceed'}
        {index === 5 && !signaturePreview && 'Proceed'}
        {index === 5 && signaturePreview && 'Proceed'}
      </button>
    </div>
  );
};

export default KycButtons;
