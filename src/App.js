import "./App.css";
import DesktopComp from "./Components/DesktopComp";
import { useEffect, useState } from "react";
import MobileComp from "./Components/MobileComponents/MobileComp";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check the screen width and set the 'isMobile' state accordingly
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check the initial screen width
    window.addEventListener("resize", handleResize); // Add a resize event listener

    return () => {
      // Clean up the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);


  return (
    <div>
      {isMobile ?
       (<BrowserRouter>   <MobileComp/>     </BrowserRouter>)
       : (<DesktopComp/>) }

    </div>
  );
}

export default App;
