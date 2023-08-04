import React from "react";
import './App.css'
import Header from "./components/Header";
import HolidayFinder from "./components/HolidayFinder";
import Hero from "./components/Hero";
import Body from "./components/Body";
import data from "./data"
import Card from "./components/Card";


function App() {

  // const cards = data.map(item =>{
  //   return (
  //     <Card
  //     img = {item.coverImg}/>
  //   )
  // })

  return (
    <div className="App">
      <Header />
      <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-right py-6'>
        <div className="grid grid-cols-2 gap-3 grid-rows-2" >
          <Hero />
          <div className="flex justify-between mx-2 max-w-6xl  py-4 col-span-1 ...">
            <HolidayFinder />
          </div>
          <div className="flex justify-between mx-2 max-w-6xl col-span-2 w-full py-10 ...">
            <Body />
           </div>
           <div>
            <Card img = "Raja ampat.png" />
           </div>

        </div>
      </div>
    </div >
  );

}
export default App;
