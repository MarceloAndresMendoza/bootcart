import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/index.css';
import './utils/i18next'
import { AppRouter } from './routes/AppRouter.jsx';
import { Navbar } from './components/ui/Navbar.jsx';
import { Footer } from './components/ui/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className='md:mt-16'>
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
