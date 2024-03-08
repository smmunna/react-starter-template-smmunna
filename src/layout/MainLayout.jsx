import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Include your Header/Navbar at the Top  */}
            <Outlet />
            {/* Include your Footer after outlet  */}
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;