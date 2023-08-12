import React from "react";

export default function Stories({trendingStories}){
    return (
      <>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 ...">
            <div className="grid grid-cols-2 gap-4">
              <div ClassName="...">
                <h1 className="text-4xl text-left font-playfair font-bold">Trending Stories</h1>
                <div ClassName="...">
                  <h1 className="text-right font-inter mx-1 font-semibold text-amber-500 py-6">View all &gt;</h1>
                </div>
              </div>
            </div>
          </div>
          {trendingStories.map((img)=>(
             <div ClassName="...">
                <img src = {`../images/${img.image}`} alt="" />
                </div>
                
          ))}
        </div>
      </>
    );


}