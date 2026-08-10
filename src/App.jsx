import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";

function App() {
 
  return(<div className="min-h-screen bg-slate-950 text-white overflow-hidden">

    <Navbar/>
    <Hero/>
    <Features/>
    <Pricing/>
    <Testimonial/>
    <Footer/>

   </div>
  );
}

export default App
