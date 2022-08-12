import React from "react";
import GalleryCard from "../components/GalleryCard";
import { living } from "../data/GalleryImages";

const Gallery = () => {
  return (
    <>
      <div className="h-auto text-center py-20">
        <div className="">
          <h1 className="text-6xl">Gallery</h1>
          <div className="pt-12">
            <div class="container flex flex-wrap w-8/12 mx-auto">
              {living.map((data, i) => {
                return <GalleryCard key={i} imglink={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
