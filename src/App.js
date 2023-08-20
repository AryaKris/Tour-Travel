import React from "react";
import "./App.css";
import Header from "./components/Header";
import HolidayFinder from "./components/HolidayFinder";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Card from "./components/Card";
import Guides from "./components/Guides";
import Testimonials from "./components/Testimonials";
import Stories from "./components/Stories";
import Footer from "./components/Footer";

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
  const stories = [
    {
      id: 1,
      image: "blog01.png",
    },
    {
      id: 2,
      image: "blog02.png",
    },
    {
      id: 3,
      image: "blog03.png",
    },
    {
      id: 4,
      image: "blog04.png",
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
          <div className="flex justify-between mx-2 max-w-6xl col-span-2 w-full py-10 ...">
            <Guides />
          </div>
          <div className="flex justify-between mx-2 max-w-6xl col-span-2 w-full py-10 ...">
            <Testimonials />
          </div>
          <div className="flex justify-between mx-2 max-w-6xl col-span-2 w-full py-10 ...">
            <Stories trendingStories={stories} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
