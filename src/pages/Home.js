import React from "react";
import p1 from '../assets/home/p1.jpg'
import p2 from '../assets/home/p2.jpg'
import p3 from '../assets/home/p3.jpg'

const Home = () => {
  return (
    <div className="h-screen bg-[#2a201f]">
      <div className="flex w-full h-full items-center">
        <div className="basis-5/12 text-center ">
          <div className="text-left w-3/4 mx-auto">
            <h1 className="text-[#facf30] text-8xl pb-8">HomeDez</h1>
            <h4 className="text-white text-5xl pb-5">
              Make Home Your Own With Us
            </h4>
            <p className="text-white text-lg pb-4">
              Your interior should still represent your style. No matter how
              large your space is or what your design preference is, these
              designer examples are designed to inspire you.
            </p>
            <button className="py-3 text-xl px-9 rounded-xl bg-[#facf30] font-bold">
              Consult
            </button>
          </div>
        </div>
        <div className="basis-7/12 text-center">
          <div className="flex ">
            <div className="h-[450px] overflow-hidden w-[300px] mr-6 rounded-3xl">
              <img
                src={p1}
                alt="Norway"
                className="h-[450px] rounded-3xl hover:scale-125 transition delay-250"
              />
            </div>
            <div className="h-[450px] w-[300px] overflow-hidden mr-6 rounded-3xl">
              <img
                src={p2}
                alt="Norway"
                className="h-[450px] rounded-3xl hover:scale-125 transition delay-250"
              />
            </div>
            <div className="h-[450px] overflow-hidden rounded-3xl">
              <img
                src={p3}
                alt="Norway"
                className="h-[450px] w-[300px] rounded-3xl hover:scale-125 transition delay-250"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
