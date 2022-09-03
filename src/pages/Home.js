import React from "react";
import p1 from "../assets/home/h1.jpg";
import p2 from "../assets/home/h2.jpg";
import p3 from "../assets/home/h3.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="md:h-screen bg-[#2a201f] overflow-x-hidden pt-36 md:pt-0"
    >
      <div className="md:flex w-full h-full items-center ">
        <div className="basis-5/12 text-center ">
          <div className="text-left md:w-3/4 mx-auto p-5 md:p-0">
            <h1 className="text-[#facf30] text-7xl md:text-8xl pb-8">
              HomeDez
            </h1>
            <h4 className="text-white text-4xl md:text-4xl pb-5">
              Make Home Your Own With Us
            </h4>
            <p className="text-white text-lg pb-9">
              Make a best in class home with us that is fully customisable to
              your choice and made to fit in your cost expectations. We created
              dream home interior for over 300 families, lets do it for you!
            </p>

            <Link
              activeClass=""
              smooth
              spy
              offset={-100}
              to="contact"
              className="py-4 text-xl px-9 rounded-xl bg-[#facf30] font-bold cursor-pointer"
            >
              Consult Us
            </Link>
          </div>
        </div>
        <div className="basis-7/12 text-center py-10">
          <div className="flex md:flex-row flex-col items-center">
            <div className="flex justify-evenly w-full md:w-auto pb-8 md:pb-0">
              <div className="h-52 w-52 md:h-[350px] overflow-hidden md:w-[300px] md:mr-6 rounded-3xl">
                <img
                  src={p1}
                  alt="Norway"
                  className="h-52 w-52 md:h-[350px] md:w-[300px] rounded-3xl hover:scale-125 transition delay-250"
                />
              </div>
              <div className="h-52 w-52 md:h-[350px] md:w-[300px] overflow-hidden md:mr-6 rounded-3xl">
                <img
                  src={p2}
                  alt="Norway"
                  className="h-52 w-52 md:h-[350px] md:w-[300px] rounded-3xl hover:scale-125 transition delay-250"
                />
              </div>
            </div>
            <div className="h-52 w-52 md:h-[350px] md:w-[300px] overflow-hidden rounded-3xl">
              <img
                src={p3}
                alt="Norway"
                className="h-52 w-52 md:h-[350px] md:w-[300px] rounded-3xl hover:scale-125 transition delay-250"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
