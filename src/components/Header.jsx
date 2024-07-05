"use client";

import { usePathname } from "next/navigation";
import Logo from "../../public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    return pathname === path
      ? "text-secondary font-bold"
      : "hover:text-blue-600 transition-colors duration-300";
  };

  return (
    <header className="navbar bg-[#3a577e] border-b-2 border-info rounded-b-md shadow-lg sticky top-0 z-50 max-w-7xl mx-auto text-white">
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
              <Link href="/" className="text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/program" className="text-black">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-black">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/search" className="text-black">
                Search
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-black">
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
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </Link>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 uppercase text-md md:text-base font-bold">
          <li>
            <Link href="/" className='{getLinkClass("/")}'>
              Home
            </Link>
          </li>
          <li>
            <Link href="/program" className={getLinkClass("/program")}>
              Programs
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className={getLinkClass("/dashboard")}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/profile" className={getLinkClass("/profile")}>
              Profile
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        <div className="hidden lg:block mr-4">
          <CiSearch
            size={24}
            className="hover:text-blue-600 transition-colors duration-300"
          />
        </div>

        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            aria-label="User menu"
            className="btn btn-ghost btn-circle border-purple-400 avatar flex items-center justify-center"
          >
            <FaUser size={24} />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/settings" className="text-black">
                Settings
              </Link>
            </li>
            <li>
              <Link href="/logout" className="text-black">
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
