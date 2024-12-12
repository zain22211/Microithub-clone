import React from 'react';
import Navbar from './assets/Components/Navbar/Navbar';
import Footer from './assets/Components/Navbar/Footer';
import ScrolltoTop from './ScrolltoTop';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <ScrolltoTop />
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
