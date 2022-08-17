import React from "react";

const GalleryCard = (props) => {
  return (
    <div className="md:p-2 rounded-xl overflow-hidden">
      <img
        src={props.imglink}
        alt=""
        className="rounded-xl w-[230px] h-[230px] md:h-[350px] md:w-[350px] hover:scale-125 transition delay-250"
      />
    </div>
  );
};

export default GalleryCard;
