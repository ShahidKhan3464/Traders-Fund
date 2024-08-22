import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white flex justify-center items-center flex-col mt-10 px-3 mb-10">
      <p className="mb-8">Oops! That’s an error</p>
      <p className="text-sm font-light text-center">
        We are sorry, the page you are looking for does not exist. <br /> You could return to the dashboard page or back to previous page.
      </p>
      <p className="text-[130px] tracking-widest">404</p>
      <button className="bg-mainColor text-black p-3 rounded-md" onClick={() => navigate('/dashboard')}>
        Go back to Dashboard
      </button>
    </div>
  );
};

export default NotFoundPage;
