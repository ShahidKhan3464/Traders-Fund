import React, { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Success = () => {
  useEffect(() => {
    toast.success('Success!');
  }, []);
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000
        }}
      />
    </div>
  );
};

export default Success;
