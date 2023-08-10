import React from "react";

export default function Hero() {
  return (
    <>
      <div className="flex justify-between mx-2 max-w-6xl items-right py-6 ...">
        <p className="text-6xl text-left font-playfair">
          {" "}
          Explore and <br></br> Travel{" "}
        </p>
      </div>
      <div className="row-span-3 py-6 ...">
        {" "}
        <img src="../images/thousand-01 1.png" alt="explore and travel" />
      </div>
    </>
  );
}
