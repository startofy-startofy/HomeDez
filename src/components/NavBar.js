import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/homedezlogo.png";
import { Link } from "react-scroll";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="z-10 w-full fixed bg-[#2a201f] shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-2">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-end w-full justify-between">
              <div className="flex-shrink-0">
                <Link activeClass="" smooth spy to="home" className="">
                  <img
                    className="h-20 cursor-pointer"
                    src={logo}
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden md:block self-center">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="underline decoration-[#facf30] decoration-[3px] underline-offset-[15px] text-[#facf30]"
                    smooth
                    spy
                    to="home"
                    className="text-white hover:underline decoration-[#facf30] decoration-4 underline-offset-[15px]  px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="underline decoration-[#facf30] decoration-[3px] underline-offset-[15px] text-[#facf30]"
                    smooth
                    spy
                    offset={-100}
                    to="services"
                    className="text-white hover:underline decoration-[#facf30] decoration-4 underline-offset-[15px]  px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                  >
                    Services
                  </Link>
                  <Link
                    activeClass="underline decoration-[#facf30] decoration-[3px] underline-offset-[15px] text-[#facf30]"
                    smooth
                    spy
                    to="gallery"
                    offset={-100}
                    className="text-white hover:underline decoration-[#facf30] decoration-4 underline-offset-[15px]  px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                  >
                    Gallery
                  </Link>
                  <Link
                    activeClass="underline decoration-[#facf30] decoration-[3px] underline-offset-[15px] text-[#facf30]"
                    smooth
                    spy
                    to="tests"
                    offset={-120}
                    className="text-white hover:underline decoration-[#facf30] decoration-4 underline-offset-[15px]  px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                  >
                    Testimonials
                  </Link>
                  <Link
                    activeClass="underline decoration-[#facf30] decoration-[3px] underline-offset-[15px] text-[#facf30]"
                    smooth
                    spy
                    offset={-100}
                    to="contact"
                    className="text-white hover:underline decoration-[#facf30] decoration-4 underline-offset-[15px]  px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6 text-[#C4A484]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#facf30"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#C4A484"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#C4A484] text-center">
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  activeClass="bg-slate-200"
                  smooth
                  spy
                  to="home"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  activeClass="bg-slate-200"
                  smooth
                  spy
                  offset={-90}
                  to="services"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  activeClass="bg-slate-200"
                  smooth
                  spy
                  offset={-90}
                  to="gallery"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Gallery
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  activeClass="bg-slate-200"
                  smooth
                  spy
                  offset={-90}
                  to="tests"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Testimonials
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  activeClass="bg-slate-200"
                  smooth
                  spy
                  offset={-70}
                  to="contact"
                  className="text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          }
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
