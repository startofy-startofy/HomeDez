import React, {useState} from "react";
import GalleryCard from "../components/GalleryCard";
import {bedroom, kitchen, living, pooja, study, terrace} from "../data/GalleryImages";


const Gallery = () => {
  const [selectedOption, setSelectedOption] = useState('bed');

  const set = (e)=>{
    console.log(e.target.value)
    setSelectedOption(e.target.value)
  }
  
    var topmap = {
      'bed':bedroom,
      'kit':kitchen,
      'liv':living,
      'poo':pooja,
      'stu':study,
      'ter':terrace
    }

  return (
    <>

      <div id="gallery" className="h-auto text-center py-14 md:py-20">
        <div className="">
          <h1 data-aos="fade-up" className="text-6xl md:text-6xl">Gallery</h1>
          <div className="pt-12">
            <div data-aos="fade-up" className="pb-12">
            <select className="text-center text-lg font-bold rounded-xl border-2 border-[#2a201f] text-gray-600 h-12 w-80 pl-5 pr-10 bg-white hover:border-[#facf30] focus:outline-none cursor-pointer" onChange={set} value={selectedOption}>
              <option value='bed'>Bedroom</option>
              <option value='kit'>Kitchen</option>
              <option value='liv'>Living</option>
              <option value='poo'>Pooja</option>
              <option value='stu'>Study</option>
              <option value='ter'>Terrace</option>
            </select>
            </div>
            <div className="grid-flow-row-dense px-3 md:w-8/12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mx-auto">
              {
              topmap[selectedOption].map((data, i) => {
                return <GalleryCard key={i} imglink={data} />;
              })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
