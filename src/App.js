import React from "react"; 
import './App.css'
import Header from "./components/Header";
import HolidayFinder from "./components/HolidayFinder";


function App() {
  return (
    <div className="App">

      <Header/>
      <div className="grid grid-cols-2 gap-3 grid-rows-4" >
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-right py-6 ..." ><p className = "text-6xl text-left font-serif"> Explore and <br></br> Travel </p></div>

        <div className="row-span-3 py-6 ..."> <img src='../images/thousand-01 1.png' alt="explore and travel" /></div>
      </div>

      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto py-4 col-span-1 ..."> <HolidayFinder /> </div>

      
     
     
    </div>
  );
}

export default App;
