import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  const navigate = useNavigate();
  if (!isAuthenticated && window.location.href !== 'http://localhost:3002/') {
    //Check not authenticated
    navigate('/login', { replace: true });
  }
  return <Outlet />;
};
export default ProtectedRoute;
