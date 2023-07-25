import React from "react";
import './App.css'
import Header from "./components/Header";
import HolidayFinder from "./components/HolidayFinder";
import Hero from "./components/Hero";
import Body from "./components/Body";


function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-right py-6'>
        <div className="grid grid-cols-2 gap-3 grid-rows-4" >
          <Hero />
          <div className="flex justify-between mx-2 max-w-6xl  py-4 col-span-1 ...">
            <HolidayFinder />
          </div>
          <div className="flex justify-between mx-2 max-w-6xl  py-4 col-span-2 ...">
            <Body />
          </div>
        </div>
      </div>
    </div>
  );

}
export default App;
