import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="footer">
      <div className="flex flex-col items-center">
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center w-full px-10">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © {new Date().getFullYear()} Aura Dev
          </p>

          <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
             {/* Add your updated social icons here linking to your profiles */}
             <p className="text-sm text-gray-400">Built by Hani Zahran | aura-dev.net</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;