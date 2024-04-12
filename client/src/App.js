// import React, {useEffect} from 'react';
// import { useDispatch } from 'react-redux';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   useLocation
// } from "react-router-dom";

// import Home from './Pages/home';
// import Login from './Pages/login';
// import About from './Pages/about';
// import Listing from './Pages/listing';
// import Contact from './Pages/contact';
// import CompanyShowcase from './Pages/companies';
// import AdminDashboard from './Pages/admin';
// import RequireAuth from './Components/RequireAuth';
// import { AdminRoute, EmployeeRoute } from './Components/ProtectedRoutes';
// import Header from './Components/Header';
// import Footer from './Components/Footer';

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/login" element={<Login/>}/>
// //         <Route path="*" element={<MainLayout/>}/>
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

// // function MainLayout() {
// //   return (
// //     <>
// //       <Header/>
// //       <Routes>
// //         <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>}/>
// //         <Route path="/about" element={<RequireAuth><About/></RequireAuth>}/>
// //         <Route path="/listing" element={<RequireAuth><Listing /></RequireAuth>}/>
// //         <Route path="/companies" element={<RequireAuth><CompanyShowcase /></RequireAuth>}/>
// //         <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>}/>
// //         <Route path="/admin/*" element={
// //           <RequireAuth>
// //             <AdminRoute>
// //               {/* Replace with actual admin components/routes */}
// //               <Route path="dashboard" element={<AdminDashboard />} />
// //             </AdminRoute>
// //           </RequireAuth>
// //         }/>
// //       </Routes>
// //       <Footer />
// //     </>
// //   );
// // }

// // export default App;

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const userData = localStorage.getItem('user');
//     if (userData) {
//       const user = JSON.parse(userData);
//       dispatch({ type: 'users/setUserDetails', payload: user }); 
//     } 
//   }, [dispatch]);

//   return (
//     <BrowserRouter>
//       <PageLayout />
//     </BrowserRouter>
//   );
// }

// function PageLayout() {
//   const location = useLocation();
//   const isLoginOrAdminPage = location.pathname.startsWith('/login') || location.pathname.startsWith('/admin');

//   return (
//     <>
//       {!isLoginOrAdminPage && <Header />}
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         {/* <Route path="/admin/*" element={
//           <RequireAuth>
//             <AdminRoute>
//               <Route path="dashboard" element={<AdminDashboard />} />
//             </AdminRoute>
//           </RequireAuth>
//         }/> */}
//         <Route path="/admin" element={
//           <RequireAuth>
//             <AdminRoute>
//               <AdminDashboard/>
//             </AdminRoute>
//           </RequireAuth>
//         }/>
//         <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>} />
//         <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
//         <Route path="/listing" element={<RequireAuth><Listing /></RequireAuth>} />
//         <Route path="/companies" element={<RequireAuth><CompanyShowcase /></RequireAuth>} />
//         <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
//       </Routes>
//       {!isLoginOrAdminPage && <Footer />}
//     </>
//   );
// }

// export default App;



import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import PageLayout from './Components/PageLayout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      dispatch({ type: 'users/setUserDetails', payload: user });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  );
}

export default App;
