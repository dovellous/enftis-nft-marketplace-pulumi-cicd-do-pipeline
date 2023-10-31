import React, { lazy, useState } from 'react';
import { Routes as BrowserRoutes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './'; 
import { Portal, Portal2 } from '_pages';
import { Login } from '_pages';
import { H404 } from '_pages/http';
import { PageLoader } from '_components/ui/buttons/download-app/loaders/PageLoader';
import { Home } from '_pages/home/Home';

const Routes: React.FC = () => {

    return (
        <>
        <BrowserRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/portal2" element={<Portal2 />} />
            {/* <Route
                path="/portal"
                element={
                    <PrivateRoute>
                        <Route path="/" element={<Portal />}>
                            <Route
                                path="messages"
                                element={<DashboardMessages />}
                            />
                            <Route path="tasks" element={<DashboardTasks />} />
                        </Route>
                    </PrivateRoute>
                }
            /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/404" element={<H404 />} />
            <Route path="*" element={<Navigate to="/404" />} />

        </BrowserRoutes>
        </>
    );
}

export { Routes };
