import React from 'react';

export default function Testimonials() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <div className="col-span-4 text-left ml-8 ...">
        <h1 className="text-3xl text-left font-playfair">Testimonials</h1>
      </div>

      <div className="col-start-1 col-end-3 ml-8 ...">
        <div className="mt-28 w-1/2">
          <img src="../images/stars.png" alt="stars"></img>

          <p className="text-left py-8">
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis
            purus. Morbi blandit sit amet turpis nec”
          </p>

          <p className="text-left mt-10">
            <h4 className="text-1xl text-left font-playfair">Edward Newgate</h4>

            <p className="font-inter">Founder Circle</p>
          </p>
        </div>
      </div>

      <div className="col-span-2 ...">
        <img src="../images/photo.png" alt="review"></img>
      </div>
    </div>
  );
}
