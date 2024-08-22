import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Error = () => {
  useEffect(() => {
    toast.error("This didn't work.");
  }, []);
  return (
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000
      }}
    />
  );
};

export default Error;
