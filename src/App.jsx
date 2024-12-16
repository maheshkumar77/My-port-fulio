 import About from "./Compnent/About"
import Adgucation from "./Compnent/Adgucation"
import Getintoch from "./Compnent/Getintoch"
import Hero from "./Compnent/Hero"
import Navbar from "./Compnent/Navbar"
import Project from "./Compnent/Project"
import Technology from "./Compnent/Technology"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300  antialiased slec selection:bg-cyan-300 selection:text-cyan-900">
    <div  className="fixed top-0 -z-10 h-full w-full ">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    </div>
   <div className=" container mx-auto px-8 ">
   <Navbar/>
   <Hero/>
   <About/>
   <Technology/>
   <Adgucation/>
   <Project/>
   <Getintoch/>
   </div>

   
    </div>
  )
}

export default App
