import React from "react";
import Button from "./Button";

export default function Guides() {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4 w-full">
      <div className="row-span-2 align-middle mt-10 py-10 ml-8">
        <h2 className="text-3xl text-left font-playfair font-bold">
          Guides by Thousand Sunny{" "}
        </h2>

        <p className="text-left py-4">
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>

        <p className="text-left">
          <Button
            text="Download"
            styleName="font-inter text-white bg-amber-500 py-2 px-8 rounded-lg mr-3"
          />
        </p>
      </div>

      <div className="..."></div>

      <div className="row-span-2  ...">
        <img src="../images/Thousand-03.png" alt="bodyimage" />
      </div>
    </div>
  );
}
