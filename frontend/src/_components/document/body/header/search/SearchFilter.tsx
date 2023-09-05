import { Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from '_components'; 
import { Login } from '_pages/login';
import { Home } from '_pages/home/Home';

const SearchFilter: React.FC = () => {

    return (
        <BrowserRoutes>
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
        </BrowserRoutes>
    );
}

export { SearchFilter };
