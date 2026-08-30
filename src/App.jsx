import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import TrustBar from './components/TrustBar.jsx'
import Services from './components/Services.jsx'
import Destinations from './components/Destinations.jsx'
import Fleet from './components/Fleet.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Testimonials from './components/Testimonials.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import BookingForm from './components/BookingForm.jsx'
import Footer from './components/Footer.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TrustBar />
      <Services />
      <Destinations />
      <Fleet />      
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
      <BookingForm />
      <Footer />
      <FloatingButtons />
    </>
  )
}
