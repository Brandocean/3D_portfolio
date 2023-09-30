import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, TechPhone, Works, StarsCanvas } from './components';

import Test from "./components/Test";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        {/* <Tech/> */}
        <TechPhone/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
