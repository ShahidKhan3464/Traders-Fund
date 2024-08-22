import React from "react";
import "./VerificationProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

// React Step Progress Bar Library
// https://github.com/pierreericgarcia/react-step-progress-bar
const VerificationProgressBar = (props, { setStep }) => {
  return (
    <ProgressBar
      className="VerificationProgressBar"
      percent={((props.step - 1) * 100) / 2}
      height={0}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${props.step >= 1 ? "completed" : ""}`}></div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${props.step >= 2 ? "completed" : ""}`}></div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div className={`step ${props.step >= 6 ? "completed" : ""}`}></div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default VerificationProgressBar;
