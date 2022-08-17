import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="h-auto text-white bg-[#2a201f]">
        <footer className="text-center bg-[#2a201f] text-white">
          <div className="container min-w-full pt-6">
            <div className="flex justify-center mb-6">
              <a
                href="https://instagram.com/homedez_interiors"
                className="pr-10 hover:text-[#facf30]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/homedezinteriors/"
                className="pr-10 hover:text-[#facf30]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-4xl" />
              </a>
              <a
                href="mailto:homedez4u@gmail.com"
                className="hover:text-[#facf30]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl" />
              </a>
            </div>
          </div>
          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright &nbsp;
            <span className="text-[#f8a219]">HOMEDEZ</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
