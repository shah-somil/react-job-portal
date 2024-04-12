import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import AdminHeader from './AdminHeader';
import Footer from './Footer';
import Login from '../Pages/login';
import Home from '../Pages/home';
import About from '../Pages/about';
import Listing from '../Pages/listing';
import CompanyShowcase from '../Pages/companies';
import Contact from '../Pages/contact';
import RequireAuth from './RequireAuth';
import AdminDashboard from '../Pages/admin/admin';
import AddJobs from '../Pages/admin/add-jobs';
import { AdminRoute,EmployeeRoute } from './ProtectedRoutes';

function PageLayout() {
  const location = useLocation();
  const user = useSelector(state => state.users.userDetails); // Adjust based on your state management
//   const isLoginOrAdminPage = location.pathname.startsWith('/login') || location.pathname.startsWith('/admin');
const isLoginPage = location.pathname.startsWith('/login') ;
  // Determine which header to use
  const HeaderComponent = user && user.role === 'admin' ? AdminHeader : Header;

  return (
    <>
      {!isLoginPage && <HeaderComponent />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <RequireAuth>
            <AdminRoute>
              <AdminDashboard />              
            </AdminRoute>
          </RequireAuth>
        }/>
        <Route path="/admin/add-jobs" element={
          <RequireAuth>
            <AdminRoute>
                <AddJobs/>
            </AdminRoute>
          </RequireAuth>
        }/>
        <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
        <Route path="/listing" element={<RequireAuth><Listing /></RequireAuth>} />
        <Route path="/companies" element={<RequireAuth><CompanyShowcase /></RequireAuth>} />
        <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default PageLayout;
