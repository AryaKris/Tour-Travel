import React from "react";
import Button from "./Button";

export default function Body() {
  return (
    <div class="grid grid-rows-2 grid-flow-col gap-4 w-full">
      <div class="row-span-2  ...">
        <img src="../images/Thousand-02 1.png" alt="bodyimage" />
      </div>
      <div className="row-span-2 align-middle mt-10 py-10 ml-8">
        <h2 className="text-3xl text-left font-playfair font-bold">
          A new way to explore the world
        </h2>
        <p className="text-left py-4">
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <p className="text-left">
          <Button
            text="Learn more"
            styleName="font-inter text-white bg-amber-500 py-2 px-8 rounded-lg mr-3"
          />
        </p>
      </div>
    </div>
  );
}
