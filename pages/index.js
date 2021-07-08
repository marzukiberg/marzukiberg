import React from 'react';
import Footer from './components/footer';
import About from './components/_about';
import Contact from './components/_contact';
import Header from './components/_header';
import Home from './components/_home';
import AppNavbar from './components/_navbar';
import Portfolio from './components/_portfolio';
import Specializing from './components/_specializing';

export default function App() {
  const Main = () => (
    <>
      <Home />
      <About />
      <Specializing />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
  return (
    <div>
      <Header />
      <AppNavbar />
      <Main />
    </div>
  );
}
