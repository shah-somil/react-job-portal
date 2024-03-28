// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Home from './Pages/home';
// import Login from './Pages/login';
// import About from './Pages/about';
// import Listing from './Pages/listing';
// import Contact from './Pages/contact';
// import CompanyShowcase from './Pages/companies';
// import RequireAuth from './Components/RequireAuth';
// import Header from './Components/Header';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <BrowserRouter>
//     <Header/>
//       <Routes>
//         <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>}/>
//         <Route path="/about" element={<RequireAuth><About/></RequireAuth>}/>
//         <Route path="/listing" element={<RequireAuth><Listing /></RequireAuth>}/>
//         <Route path="/companies" element={<RequireAuth><CompanyShowcase /></RequireAuth>}/>
//         <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>}/>
//         <Route path="/login" element={<Login/>}/>
//       </Routes>
//       <Footer />
//     </BrowserRouter>

//   );
// }

// export default App;

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Pages/home';
import Login from './Pages/login';
import About from './Pages/about';
import Listing from './Pages/listing';
import Contact from './Pages/contact';
import CompanyShowcase from './Pages/companies';
import RequireAuth from './Components/RequireAuth';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<MainLayout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>}/>
        <Route path="/about" element={<RequireAuth><About/></RequireAuth>}/>
        <Route path="/listing" element={<RequireAuth><Listing /></RequireAuth>}/>
        <Route path="/companies" element={<RequireAuth><CompanyShowcase /></RequireAuth>}/>
        <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
