import React from "react";
import { Instagram, LinkedIn, Email } from "@material-ui/icons";

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
                <Instagram style={{ fontSize: "45px" }} />
              </a>
              <a
                href="https://www.linkedin.com/company/homedez-interiors/"
                className="pr-10 hover:text-[#facf30]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn style={{ fontSize: "45px" }} />
              </a>
              <a
                href="mailto:homedez4u@gmail.com"
                className="hover:text-[#facf30]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email style={{ fontSize: "45px" }} />
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
