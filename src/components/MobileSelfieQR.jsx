import React from "react";
import styled from "styled-components";
import deleteIcon from "../images/icons/delete.svg";

import qrcode from "../images/qrcode.png";

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  z-index: 500;
  border-radius: 20px;
`;

const MobileSelfieQR = ({ closeModal }) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <ModalContainer>
      <div className="cpm">
        <div className="change-password-modal">
          <div className="cpm-container modal-form">
            <div className="cpm-top">
              <h2>Take Selfie with Mobile</h2>
              <div className="close-cpm" onClick={() => closeModal(false)}>
                <img src={deleteIcon} alt="" />
              </div>
            </div>
            <div className="light-text">
              <p>
                Scan the QR code with your mobile camera to take a selfie
                holding id beside face. You will get 2:00 min to complete the
                process.
              </p>
            </div>

            <div className="center">
              <div className="qr-code">
                <img src={qrcode} alt="" />
              </div>
              <p className="light-text">OR</p>
            </div>

            <button>Copy Mobile Link</button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default MobileSelfieQR;
