import Logo from "../../public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="navbar bg-base-100 border-b shadow-lg sticky top-0 z-50 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/program"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={Logo}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/program"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className=" navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
