// import logo from './logo.svg';
import './App.scss';
import './responsive.scss';
// import Home from './screens/Home.js';
// import About from './screens/About.js';
import AppHeader from './components/header';
import AppHero from './components/hero';
import AppForm from './components/form';
import AppDeals from './components/deals';
import AppBestdeals from './components/best-deals';
import AppFooter from './components/footer';
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className='App' >
      <header className='header'>
        <AppHeader />
      </header>
      <main>
        <AppHero />
        <AppForm />
        <AppDeals />
        <AppBestdeals />
      </main>

      <footer className='footer'>
        <AppFooter />
      </footer>


    </div >
  );
}
