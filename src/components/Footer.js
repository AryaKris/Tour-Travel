import React from "react";

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 bg-gray-50 w-full">
        <div className="flex items-center justify-center mx-6  w-full py-10">
          <div class="grid grid-cols-5 gap-4 w-4/5 text-gray-400 text-sm text-left">
            <div className="row-span-2">
              <img src="../images/logo.png" alt="logo" />
            </div>
            <div className="row-span-5">&nbsp;</div>
            <div className="font-bold">
              <p>Destinations</p>
            </div>
            <div className="font-bold">
              <p>Shop</p>
            </div>
            <div className="font-bold">
              <p>Interests</p>
            </div>
            <div>
              <p>Africa</p>
            </div>
            <div>
              <p>Destination Guides</p>
            </div>
            <div>
              <p>Adventure Travel</p>
            </div>
            <div className="row-span-2">
              <p>
                Plan and book your perfect trip with expert advice, travel tips
                destination information from us
              </p>
            </div>
            <div>
              <p>Antartica</p>
            </div>
            <div>
              <p>Pictorial & Gifts</p>
            </div>
            <div>
              <p>Art And Culture</p>
            </div>
            <div>
              <p>Asia</p>
            </div>
            <div>
              <p>Special Offers</p>
            </div>
            <div>
              <p>Wildlife And Nature</p>
            </div>
            <div>
              <p>&nbsp;</p>
            </div>
            <div>
              <p>Europe</p>
            </div>
            <div>
              <p>Delivery Times</p>
            </div>
            <div>
              <p>Family Holidays</p>
            </div>
            <div className="text-sm col-span-2">
              <p>©2020 Thousand Sunny. All rights reserved</p>
            </div>
            <div>
              <p>America</p>
            </div>
            <div>
              <p>FAQs</p>
            </div>
            <div>
              <p>Food And Drink</p>
            </div>
            <div className="col-span-5 pt-8">
              <p>
                <hr className="w-11/12" />
              </p>
            </div>
            <div className="flex w-full justify-center items-center col-span-5">
              <img src="../images/social media.png" alt="social media" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}