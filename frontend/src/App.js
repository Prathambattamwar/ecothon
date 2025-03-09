import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import './App.css';
import './player.css';

// Ensure window.$ is assigned after importing jQuery


// Import components
import Home from './components/Home';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/ServiceSection';
import WorkSection from './components/WorkSection';
import HelpSection from './components/HelpSection';
import ProductSection from './components/ProductSection';
import GenericBox from './components/GenericBox';
import Testimonials from './components/Testimonials';
// import Blog from './components/BlogSection';
import FooterSection from './components/FooterSection';
import AboutPage from './pages/AboutPage';
import WhyChooseSection from './components/WhyChooseSection';
// import ContactPage from './pages/ContactPage';
import NewsSection from './components/NewsSection';
import Wallet from './components/Wallet';
import SchemesSection from './components/SchemesSection';
import FarmersSocial from './components/FarmersSocial';
import WasteDashboard from './components/WasteDashboard';
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <BrowserRouter>

      <Header />
   
        <Routes>
          <Route path="/" element={<><Banner /><Home /></>} />
          <Route path="/home" element={<><Banner /><Home /></>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whychooseSection" element={<WhyChooseSection />} />
          <Route path="/newssection" element={<NewsSection />} />
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/schemes" element={<SchemesSection/>}/>
          <Route path="/farmarsocial" element={<FarmersSocial />}/>
          <Route path="/waste-management" element={<WasteDashboard />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          {/* <Route path="/worksection" element={<WorkSection />} /> */}
          {/* <Route path="/helpsection" element={<HelpSection />} /> */}
          {/* <Route path="/products" element={<ProductSection />} /> */}
          {/* <Route path="/genericbox" element={<GenericBox />} /> */}
          {/* <Route path="/testimonials" element={<Testimonials />} />/ */}
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
    
      <FooterSection />
  
  </BrowserRouter>
  );
}

export default App;