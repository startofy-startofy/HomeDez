import React from "react";
import ServiceBanner from "../components/ServiceBanner";
import carp from "../assets/services/carp.gif";
import ceil from "../assets/services/ceil.jpeg";

const Services = () => {
  return (
    <>
      <div id="services" className="text-center h-auto py-14 md:py-20 bg-slate-100">
        <div className="p-4 md:w-7/12 mx-auto">
          <h1 data-aos="fade-up" className="text-6xl md:text-6xl pb-10">Our Services</h1>
          <p data-aos="fade-up" className="md:text-2xl text-xl">
            Make home your own with us. HomeDez helps you build a best in class
            home that is fully customizable to your choice and made to fit in
            your cost expectations. We provide end to end services for your home
            including
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 text-center items-center md:w-9/12 md:gap-x-36 content-center mx-auto pt-20 place-items-center">
          <div className="md:w-64 w-44 pb-8 md:pb-0 text-center">
            <div data-aos="fade-up" className="h-36 w-44 md:h-48 md:w-64 shadow-xl rounded-xl bg-white">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_QDchDS.json"
                background="transparent"
                speed="1"
                className="h-48"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h1 className="text-xl md:text-2xl pt-4">Interior design</h1>
          </div>
          <div data-aos="fade-up" className="md:w-64 w-44 pb-8 md:pb-0">
            <div className="h-36 w-44 md:h-48 md:w-64 shadow-xl rounded-xl bg-white">
              <img src={carp} alt="" className="h-36 w-44 md:h-48 md:w-64 rounded-xl" />
            </div>
            <h1 className="text-xl md:text-2xl pt-4">Carpentry</h1>
          </div>
          <div data-aos="fade-up" className="md:w-64 w-44 pb-8 md:pb-0">
            <div className="h-36 w-44 md:h-48 md:w-64 shadow-xl rounded-xl bg-white">
              <img src={ceil} alt="" className="h-36 w-44 md:h-48 md:w-64 rounded-xl" />
            </div>
            <h1 className="text-xl md:text-2xl pt-4">False Ceiling</h1>
          </div>
          <div data-aos="fade-up" className="md:w-64 w-44 pb-8 md:pb-0">
            <div className="h-36 w-44 md:h-48 md:w-64 shadow-xl rounded-xl bg-white">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_geumvtzy.json"
                background="transparent"
                speed="1"
                className="h-48"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h1 className="text-xl md:text-2xl pt-4">Civil work</h1>
          </div>
        </div>

        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 md:w-7/12 mx-auto place-items-center md:gap-x-36 md:pt-20">
          <div className="md:w-64 w-44 pb-8 md:pb-0 text-center ">
            <div className="h-36 w-44 md:h-48 md:w-64 shadow-xl rounded-xl text-center bg-white">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_b3a1wyt0.json"
                background="transparent"
                speed="1"
                className="h-48"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h1 className="text-xl md:text-2xl pt-4">Electrical & lighting</h1>
          </div>

          <div data-aos="fade-up" className="md:w-64 w-44 pb-8 md:pb-0">
            <div className="h-36 w-44 md:h-48 md:w-64 shadow-xl rounded-xl text-center bg-white">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_jlthamnp.json"
                background="transparent"
                speed="1"
                className="h-48"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h1 className="text-xl md:text-2xl pt-4">Gas piping</h1>
          </div>

          <div data-aos="fade-up" className="md:w-64 w-44 pb-8 md:pb-0 col-span-2 md:col-span-1">
            <div className="h-36 w-44 md:h-48 md:w-64 shadow-xl rounded-xl text-center bg-white">
              <lottie-player
                src="https://assets8.lottiefiles.com/packages/lf20_jCmeIg.json"
                background="transparent"
                speed="1"
                className="h-48"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h1 className="text-xl md:text-2xl pt-4">Gardening</h1>
          </div>
        </div>
      </div>

      <ServiceBanner />
    </>
  );
};

export default Services;
