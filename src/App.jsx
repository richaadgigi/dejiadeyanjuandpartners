import React from 'react';
import "./assets/styles/main.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Index from './pages/Index';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Stories from './pages/Stories';
import Contact from './pages/Contact';
import StoryDetails from './pages/StoryDetails';
import TermsOfUse from './pages/TermsOfUse';
import Privacy from './pages/Privacy';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route index path='/' element={<Index />} />
                <Route index path='/about' element={<About />} />
                <Route index path='/stories' element={<Stories />} />
                <Route index path='/story/:uid/:stripped' element={<StoryDetails />} />
                <Route index path='/contact' element={<Contact />} />
                <Route index path='/terms-of-use' element={<TermsOfUse />} />
                <Route index path='/privacy-policy' element={<Privacy />} />
                <Route index path='*' element={<Index />} />
            </Routes>
            <Footer />
        </BrowserRouter>
        </>
    );
};

export default App;