import React from "react";

const GalleryCard = (props) => {
  return (
    <div class="w-full p-2 rounded lg:w-1/3 md:w-1/2">
      <img
        src={props.imglink}
        alt=""
        className="rounded-xl h-[350px] w-[450px]"
      />
    </div>
  );
};

export default GalleryCard;
