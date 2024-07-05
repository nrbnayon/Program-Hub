import Logo from "../../public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="navbar bg-base-100 border-b shadow-lg sticky top-0 z-50 max-w-7xl mx-auto">
      <div className="navbar-start flex items-center">
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost" aria-label="Open menu">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              {" "}
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

        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 uppercase text-base font-bold">
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

      <div className="navbar-end flex items-center">
        <div className="hidden lg:block mr-4">
          <CiSearch
            size={24}
            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
          />
        </div>

        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            aria-label="User menu"
            className="btn btn-ghost btn-circle avatar flex items-center justify-center"
          >
            <FaUser size={24} className="text-gray-700" />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link
                href="/settings"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
