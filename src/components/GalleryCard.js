import React from "react";

const GalleryCard = (props) => {
  return (
    <div class="w-full p-2 rounded-xl lg:w-1/3 md:w-1/2 overflow-hidden">
      <img
        src={props.imglink}
        alt=""
        className="rounded-xl h-[350px] w-[450px] hover:scale-125 transition delay-250"
      />
    </div>
  );
};

export default GalleryCard;
