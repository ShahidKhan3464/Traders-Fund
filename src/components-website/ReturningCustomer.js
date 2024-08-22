import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReturningCustomer = () => {
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();
  return (
    !token && (
      <div className="bg-[#3B3C3D] flex justify-center items-center h-[48px]">
        <a
          onClick={() => {
            navigate('/login');
          }}
        >
          <p>Returning customer? Click here to login</p>
        </a>
      </div>
    )
  );
};

export default ReturningCustomer;
