import React from 'react';
import { 
  MessageCircle
} from 'lucide-react';
import Navbar from '../../shared/components/Navbar';
import Hero from '../components/Hero';
import Solution from '../components/Solution';
import Modules from '../components/Modules';
import Sectores from '../components/Sectores';
import Trust from '../components/Trust';
import Pricing from '../components/Pricing';
import Russoft from '../components/Russoft';
import CTA from '../components/CTA';
import Footer from '../../shared/components/Footer';





const RussoftLanding = () => {

const WhatsAppFloat = () => (
    <a href="https://wa.me/123456789" target='_blank' className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition flex items-center justify-center">
        <MessageCircle size={32} fill="white" />
    </a>
);

  return (
    <div className="font-sans text-gray-800">
      {/* --- NAVBAR --- */}
      <Navbar></Navbar>

      {/* --- HERO SECTION
       --- */}
      <Hero></Hero>
      {/* --- PROBLEM & SOLUTION --- */}
      <Solution></Solution>

      {/* --- MODULES --- */}
      <Modules></Modules>

      {/* --- SECTORS --- */}
      <Sectores></Sectores>

      {/* --- DIFFERENTIATORS --- */}
      <Trust></Trust>

      {/* --- PLANS --- */}
      <Pricing></Pricing>

      {/* --- ABOUT US --- */}
      <Russoft></Russoft>

      {/* --- CONTACT & CTA --- */}
      <CTA></CTA>

      {/* --- FOOTER --- */}
      <Footer></Footer>

      {/*WHATSAPP*/}
      <WhatsAppFloat />
    </div>
  );
};

export default RussoftLanding;