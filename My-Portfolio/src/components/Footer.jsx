import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black shadow-[0_-4px_15px_rgba(0,0,0,0.7)] text-white">



        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-5 mt-4">
              <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                {/* &copy;*/} 
              </p>
              <p className="text-sm"> 
          📧 Email: mshuaib279@gmail.com  
          📞 Phone: +91 6395206656  
          📍 Location: New Delhi, India</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
