import React from 'react';
import Navbar from './components/Navbar';
import HeroGrid from './components/HeroGrid';
import Features from './components/Features';
import Industries from './components/Industries';
import Stats from './components/Stats';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-abt-dark text-white font-sans selection:bg-abt-blue selection:text-white">
      <Navbar />
      <main>
        <HeroGrid />
        <Features />
        <Industries />
        <Stats />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;