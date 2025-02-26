import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import AdvancedBusesPage from './pages/Buses';
import AdvancedSupportPage from './pages/support';
import AdvancedAboutPage from './pages/About';
import LoginPage from './pages/Login';
import RegistrationPage from './pages/RegistrationPage';
import TermsPage from './pages/terms';
import BookingPage from './pages/BookingPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/buses' element={<AdvancedBusesPage />} />
            <Route path='/support' element={<AdvancedSupportPage />} />
            <Route path='/about' element={<AdvancedAboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/booking' element={<BookingPage />} />
          </Routes>
          <Footer />
          {/* Footer */}
        </div>
      </Router>
    </>
  );
}

export default App;
