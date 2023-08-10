import React from "react";
import "./App.css";
import Header from "./components/Header";
import HolidayFinder from "./components/HolidayFinder";
import Hero from "./components/Hero";
import Body from "./components/Body";
import data from "./data";
import Card from "./components/Card";
import Guides from "./components/Guides";

function App() {
  const images = [
    {
      id: 1,
      coverImg: "Raja ampat.png",
    },
    {
      id: 2,
      coverImg: "Fanjingshan.png",
    },
    {
      id: 3,
      coverImg: "Vevey.png",
    },
    {
      id: 4,
      coverImg: "Skadar.png",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-right py-6">
        <div className="grid grid-cols-2 gap-3 grid-rows-2">
          <Hero />
          <div className="flex justify-between mx-2 max-w-6xl  py-4 col-span-1 ...">
            <HolidayFinder />
          </div>
          <div className="flex justify-between mx-2 max-w-6xl col-span-2 w-full py-10 ...">
            <Body />
          </div>
          <div className="flex justify-between mx-2 max-w-6xl col-span-2 w-full py-10 ...">
            <Card cardImages={images} />
          </div>
          <div>
            <Guides/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
