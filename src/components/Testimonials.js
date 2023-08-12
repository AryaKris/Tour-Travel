import React from 'react';

export default function Testimonials() {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 w-full">
      <div className="row-span-2 align-middle mt-10 py-10 ml-8">
        <h1 className="text-3xl text-left font-playfair">Testimonials</h1>
        <img src="../images/stars.png" alt="stars"></img>
        <p className="text-left py-4">
          “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus.
          Morbi blandit sit amet turpis nec”
        </p>
        <p className="text-left">
          <h4 className="text-1xl text-left font-playfair">Edward Newgate</h4>
          <h5 className="text-1xl text-left font-playfair">Founder Circle</h5>
        </p>
      </div>

      <div className="..."></div>

      <div className="row-span-2  ...">
        <img src="../images/photo.png" alt="review"></img>
      </div>
    </div>
  );
}
