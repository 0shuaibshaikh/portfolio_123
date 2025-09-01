import React from "react";

const DownloadCVButton = () => {
  return (
    <div className="flex justify-center items-center mt-6 mb-6">
      <a
        href="/shuaib Resume.pdf"
        download="shuaib_Resume.pdf"
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out text-lg uppercase"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
