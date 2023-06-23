import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Destination from './Pages/Destination/Destination';
import Login from "./Pages/Login/Login";
import Event from "./Pages/Event/Event";
import Contact from "./Pages/Contact/Contact";


const App= () => {

 
  return (
    <div className="app">
      
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/product"  element={<Product />} />
        <Route path="/destination"  element={<Destination/>} />
        <Route path="/login"  element={<Login/>} />
        <Route path="/contact"  element={<Contact/>} />
        <Route path="/event"  element={<Event/>} />
  
      </Routes>

     </div>
  );
}

export default App;