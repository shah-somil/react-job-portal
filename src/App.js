import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

 import Home from './Components/Home';
import About from './Components/About';
import Layout from './Components/Layout';
import Users from './Components/Users';
import ChildCard from './Components/ChildCard';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="user" element = {<Users/>} />
    </Route>

    </Routes>
    </BrowserRouter>

  );
}

export default App;
