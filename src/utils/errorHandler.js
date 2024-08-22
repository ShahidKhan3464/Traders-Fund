import axios from './axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AxiosErrorHandler = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // Request interceptor
    const requestInterceptor = axios.interceptors.request.use(request => {
      // Do something here with request if you need to
      return request;
    });

    // Response interceptor
    const responseInterceptor = axios.interceptors.response.use(
      response => {
        // Handle response here

        return response;
      },
      error => {
        console.log('error handled in errorHandler', error);
        // Handle errors here
        if (error.response?.status) {
          switch (error.response.status) {
            case 401:
              navigate('/login', { replace: true });
              break;
            case 403:
              navigate('/login', { replace: true });
              break;
            // ... And so on
          }
        }

        return error;
      }
    );

    return () => {
      // Remove handlers here
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return children;
};

export default AxiosErrorHandler;
