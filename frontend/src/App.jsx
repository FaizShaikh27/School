import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Admission from './Pages/Admission/Admission';
import Gallery from './Pages/Gallery/Gallery';
import Facilities from './Pages/Facilities/Facilities';
import Sports from './Pages/Sports/Sports';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Marquee from './Components/Marquee/Marquee';
import Footer from './Components/Footer/Footer';

// Wrapper to use `useLocation` correctly
const AppWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const notices = [
    "Admissions are now open for 2025!",
    "Upcoming Science Fair: 20th Jan 2025.",
    "PTM scheduled for 25th Jan 2025. Don't miss it!",
  ];

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: isHomePage ? '0px' : '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Marquee notices={notices} />
      <div className="px-3">
      <Footer/>
      </div>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
};

export default App;
