import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderBanner from './components/HeaderBanner';
import Navbar from './components/Navbar';
import Gen1 from './features/gen1/Gen1';
import Home from './features/home/Home';

const App = () => (
    <div>
        <HeaderBanner>
            <Navbar />
        </HeaderBanner>
        <Routes>
            <Route path="/" element={<Gen1 />} />
            <Route path="/random" element={<Home />} />
        </Routes>
    </div>
);

export default App;
