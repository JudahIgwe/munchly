import Resct from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BrowseMenu from './pages/BrowseMenu';
import SpecialOffers from './pages/SpecialOffers';
import TrackOrder from './pages/TrackOrder';

function App() {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/browse-menu" element={<BrowseMenu />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/track-order" element={<TrackOrder />} />
      </Routes>
      <Footer />
      </div>
   
  );
}

export default App;