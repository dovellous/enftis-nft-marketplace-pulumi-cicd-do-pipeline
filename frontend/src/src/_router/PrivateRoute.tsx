import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute:any = () => {
    
    const { userInfo } = useSelector((state: any) => state.auth)
    
    if (!userInfo) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login"  /> //Todo: Navigate to previous url state={{ from: history.location }}
    }

    // authorized so return child components
    return <Outlet />
    
}

export { PrivateRoute };
