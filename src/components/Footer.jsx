// src/components/Footer.js
import Image from "next/image";
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
import { IoIosArrowUp } from "react-icons/io";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 flex flex-col items-center max-w-7xl mx-auto">
      <div className="flex space-x-4 mb-4">
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
      <form>
        <h6 className="text-base text-[#08090A] font-bold flex justify-between md:justify-start items-center">
          Social Media <IoIosArrowUp />
        </h6>
        <div className="flex flex-wrap gap-2 my-3">
          <a
            href="#"
            className="text-blue-600 btn btn-circle btn-sm bg-[#EBEDF0]"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="text-blue-400 btn btn-circle btn-sm bg-[#EBEDF0]"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-pink-600 btn btn-circle btn-sm bg-[#EBEDF0]"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="text-blue-700 btn btn-circle btn-sm bg-[#EBEDF0]"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="#"
            className="text-red-600 btn btn-circle btn-sm bg-[#EBEDF0]"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            className="text-red-700 btn btn-circle btn-sm bg-[#EBEDF0]"
          >
            <FaPinterestP size={20} />
          </a>
          <a
            href="#"
            className="text-yellow-5 btn btn-circle btn-sm bg-[#EBEDF0]"
          >
            <FaSnapchatGhost size={20} />
          </a>
          {/* <a
              href="#"
              className="text-black btn btn-circle btn-sm bg-[#EBEDF0]"
            >
              <FaTiktok size={20} />
            </a> */}
        </div>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Invite Friends</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="Email ID"
              className="input input-bordered border-[#8064A2] join-item"
            />
            <button className="btn bg-[#8064A2] text-white join-item">
              Invite
            </button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
