import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import toast, { Toaster } from 'react-hot-toast';
import BackToTop from "./components/BackToTop";
import SmoothScroll from "./components/SmoothScroll";
import Verify from "./pages/Verify";
import TawkToScript from "./components/TawkToScript";

 const App = () => {
   return (
     <div className="sm:px-[5vm] md:px-[7vm] lg:px-[10vm] lg:px-[9vm]">
      <SmoothScroll />
      <Toaster/>
       <Navbar />
       <SearchBar />
       <BackToTop />
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/place-order" element={<PlaceOrder/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/verify" element={<Verify/>} />
       </Routes>
       <Footer />
       <TawkToScript /> {/* <-- BƯỚC 2: RENDER (Đặt ở đây là đúng) */}
     </div>
   );
 }
 export default App;