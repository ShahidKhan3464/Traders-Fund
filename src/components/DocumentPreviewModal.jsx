import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {fr} from 'date-fns/locale';

const DocumentPreviewModal = ({
                                  onClose,
                                  modalRef,
                                  frontPreview,
                                  backPreview,
                                  selfiePreview,
                                  index,
                                  signaturePreview,
  isDarkMode
                              }) => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div ref={modalRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          <div className="space-y-2 modal-content">
            {frontPreview && (
              <>
                <p className="text-2xl text-center">Front</p>
                <div className="p-2 mx-auto border border-black rounded-md img-box">
                  <img
                    src={typeof frontPreview == 'string' && frontPreview.startsWith('http') ? frontPreview : URL.createObjectURL(frontPreview)}
                    alt="File Preview"
                  />
                </div>
              </>
            )}

            {backPreview && (
              <>
                <p className="text-2xl text-center">Back</p>
                <div className="p-2 mx-auto border border-black rounded-md img-box">
                  <img
                    src={typeof backPreview == 'string' && backPreview.startsWith('http') ? backPreview : URL.createObjectURL(backPreview)}
                    alt="File Preview"
                  />
                </div>
              </>
            )}
            {selfiePreview && index === 4 && (
              <>
                <p className="text-2xl text-center">Front</p>
                <div className="p-2 mx-auto border border-black rounded-md img-box">
                  <img
                    src={
                      typeof selfiePreview == 'string' && selfiePreview.startsWith('http') ? selfiePreview : URL.createObjectURL(selfiePreview)
                    }
                    alt="File Preview"
                  />
                </div>
              </>
            )}

            {signaturePreview && (
              <>
                <p className="text-2xl text-center">Front</p>
                <div className="p-2 mx-auto border border-black rounded-md img-box">
                  <img
                    src={
                      typeof signaturePreview == 'string' && signaturePreview.startsWith('http') ? signaturePreview : URL.createObjectURL(signaturePreview)
                    }
                    alt="File Preview"
                  />
                </div>
              </>
            )}

            <button
              className="flex items-center justify-center pt-5 mx-auto text-black"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
    );
};

export default DocumentPreviewModal;
