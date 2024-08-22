import React from 'react';
const ProgressBar = ({ progressPercentage, color }) => {
  return (
    <div className="w-full h-2">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full rounded-lg ${color}`}
      ></div>
    </div>
  );
};

export default ProgressBar;
