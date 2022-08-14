import React from "react";
import ServiceBanner from "../components/ServiceBanner";

const Services = () => {
  return (
    <>
    <div className="text-center h-auto py-20 bg-slate-50">
      <div className="w-7/12 mx-auto">
        <h1 className="text-6xl pb-10">Our Services</h1>
        <p className="text-2xl">
          Make home your own with us. HomeDez helps you build a best in class
          home that is fully customizable to your choice and made to fit in your
          cost expectations. We provide end to end services for your home
          including
        </p>
      </div>
      <div className="flex mx-auto w-9/12 justify-evenly pt-20">
        <div>
          <div className="h-48 w-64 shadow-xl rounded-xl">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_QDchDS.json"
              background="transparent"
              speed="1"
              className="h-48"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-2xl pt-4">Interior design</h1>
        </div>

        <div className="overflow-hidden ">
          <div className="shadow-xl rounded-xl">
            <div className="h-48 w-64 scale-150">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_vp7o91.json"
              background="transparent"
              speed="1"
              className="h-48 scale-150"
              loop
              autoplay
            ></lottie-player>
            </div>
          </div>
          <h1 className="text-2xl pt-4">Carpentry</h1>
        </div>

        <div>
          <div className="h-48 w-64 shadow-xl rounded-xl">
            <lottie-player
              src="https://assets2.lottiefiles.com/packages/lf20_43mT8t.json"
              background="transparent"
              speed="1"
              className="h-48"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-2xl pt-4">False Ceiling</h1>
        </div>

        <div>
          <div className="h-48 w-64 shadow-xl rounded-xl">
            <lottie-player
              src="https://assets6.lottiefiles.com/packages/lf20_geumvtzy.json"
              background="transparent"
              speed="1"
              className="h-48"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-2xl pt-4">Civil work</h1>
        </div>
      </div>

      <div className="flex mx-auto w-7/12 justify-evenly pt-20">
        <div>
          <div className="h-48 w-64 shadow-xl rounded-xl">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_b3a1wyt0.json"
              background="transparent"
              speed="1"
              className="h-48"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-2xl pt-4">Electrical & lighting</h1>
        </div>

        <div>
          <div className="h-48 w-64 shadow-xl rounded-xl">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_jlthamnp.json"
              background="transparent"
              speed="1"
              className="h-48"
              loop
              autoplay
            ></lottie-player>
          </div>
          <h1 className="text-2xl pt-4">Gas piping</h1>
        </div>

        <div className="overflow-hidden">
          <div className="h-48 w-64 shadow-xl rounded-xl">
            <div className="scale-75">
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_jCmeIg.json"
              background="transparent"
              speed="1"
              className="h-48"
              loop
              autoplay
            ></lottie-player>
            </div>
          </div>
          <h1 className="text-2xl pt-4">Gardening</h1>
        </div>
      </div>
    </div>

    <ServiceBanner />
    </>
  );
};

export default Services;
