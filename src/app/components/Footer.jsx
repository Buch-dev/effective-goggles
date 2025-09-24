import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-600 w-full p-4">
      <div className="flex flex-col gap-4 items-center justify-between md:flex-row md:gap-0">
        <div className="flex items-center gap-2">
          <div
            className="text-4xl font-bold text-white bg-black flex items-center justify-center px-2"
            aria-label="Krea AI logo"
          >
            K
          </div>
          <h5 className="text-white text-2xl font-semibold">Krea AI</h5>
        </div>
        <div className="text-white flex items-center gap-3">
          <h5>curated by</h5>
          <h2 className="text-2xl font-semibold">Mobbin</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
