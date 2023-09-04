import { Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from '_components';
import { Home } from '_pages/home';
import { Login } from '_pages/login';

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
