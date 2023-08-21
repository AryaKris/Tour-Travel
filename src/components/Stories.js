import React from "react";

export default function Stories({ trendingStories }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4 ...">
          <div className="grid grid-cols-2 gap-4">
            <h1 className="text-4xl text-left font-playfair font-bold">
              Trending Stories
            </h1>

            <h1 className="text-right font-inter mx-1 font-semibold text-amber-500 py-6">
              View all &gt;
            </h1>
          </div>
        </div>
        {/* Whenever mapping objects, make sure to use the key attribute. */}
        {trendingStories.map((img, idx) => (
          <div className="trendingStories" key={idx}>
            <img src={`../images/${img.storyImg}`} alt="stories" />
          </div>
        ))}
      </div>
    </>
  );
}
