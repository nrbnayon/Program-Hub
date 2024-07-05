import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaSnapchatGhost,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 flex flex-col items-center max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between w-full mb-6 ">
        <div className="flex flex-col mb-4">
          <h6 className="footer-title">Company</h6>
          <Link href="/about" className="mb-2 md:mb-0 hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="mb-2 md:mb-0 hover:underline">
            Contact
          </Link>
          <Link href="/privacy-policy" className="mb-2 md:mb-0 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="mb-2 md:mb-0 hover:underline">
            Terms of Service
          </Link>
        </div>
        <div className="flex flex-col mb-4">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg mb-6 w-full  md:max-w-xs">
          <h3 className="font-semibold font-xl text-center mb-1">
            {" "}
            Our Social Links
          </h3>
          <div className="flex flex-wrap justify-center space-x-3 mt-4 md:mt-0">
            <a href="#" className="text-blue-600 hover:text-blue-500">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-500">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-600">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-500">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-red-700 hover:text-red-600">
              <FaPinterestP size={20} />
            </a>
            <a href="#" className="text-yellow-500 hover:text-yellow-400">
              <FaSnapchatGhost size={20} />
            </a>
          </div>
          <h6 className="text-lg font-semibold mb-2 flex items-center">
            Invite Friends
          </h6>
          <div className="flex flex-col md:flex-row">
            <input
              type="text"
              placeholder="Enter Email ID"
              className="input input-bordered border-[#8064A2] rounded-lg w-full md:w-2/3 mb-2 md:mb-0 md:mr-2"
            />
            <button className="btn bg-[#8064A2] text-white rounded-lg w-full md:w-auto">
              Invite
            </button>
          </div>
        </div>
      </div>
      <dir className="divide border-b-2 border-gray-300 w-full"></dir>
      <div className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Program Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
