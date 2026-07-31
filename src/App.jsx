import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* We'll use Home as fallback for Fragrances link in this demo since it's not requested specifically yet */}
          <Route path="fragrances" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
