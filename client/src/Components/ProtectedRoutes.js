import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const AdminRoute = ({ children }) => {
    const userDetails = useSelector((state) => state.users.userDetails);
    const userRole = userDetails?.role || localStorage.getItem('userRole'); // Get the role from localStorage
    return userRole === 'admin' ? children : <Navigate to="/" replace />;
  };
  
  export const EmployeeRoute = ({ children }) => {
    const userDetails = useSelector((state) => state.users.userDetails);
    const userRole = userDetails?.role || localStorage.getItem('userRole'); // Get the role from localStorage
    return userRole === 'employee' ? children : <Navigate to="/" replace />;
  };
