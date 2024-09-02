"use client";
import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  const toggleMenu = (e: any) => {
    e.preventDefault();
    const nav = document.getElementById("nav");
    if (!nav) return;
    nav.classList.toggle("hidden");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <a href="/" className="text-lg">
          <span className="font-bold text-slate-800 dark:text-indigo-400">
            cronje
          </span>
          <span className="text-slate-500">.dev</span>
        </a>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            id="astronav-menu"
            aria-label="Toggle Menu"
          >
            <svg
              fill="currentColor"
              className="w-4 h-4 text-slate-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <title>Toggle Menu</title>
              <path
                className="hidden"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                className=""
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="nav"
        className="hidden absolute lg:relative dark:bg-black bg-white p-4 lg:p-0 mt-10 w-full lg:w-auto lg:flex lg:m-0 border-b border-t border-1 border-slate-500 lg:border-none lg:shadow-none shadow-md"
      >
        <ul className="w-full flex flex-col lg:flex-row gap-2">
          <li className="w-full">
            <a
              href="#about"
              className="block lg:flex items-center justify-center px-3 py-1 text-indigo-400 hover:text-indigo-600"
            >
              About
            </a>
          </li>
          <li className="w-full">
            <a
              href="#employment-history"
              className="block lg:flex items-center justify-center px-3 py-1 text-indigo-400 hover:text-indigo-600"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="block lg:flex items-center justify-center px-3 py-1 text-indigo-400 hover:text-indigo-600"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block lg:flex items-center justify-center px-3 py-1 text-indigo-400 hover:text-indigo-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://github.com/corcronje"
              className="block lg:flex items-center justify-center rounded px-3 py-1 bg-indigo-400 text-white hover:bg-indigo-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-fw" /> Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cor-cronje-developer"
              target="_blank"
              className="block lg:flex items-center justify-center rounded px-3 py-1 bg-indigo-400 text-white hover:bg-indigo-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-fw" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/corcronje"
              target="_blank"
              className="block lg:flex items-center justify-center rounded py-1 px-3 bg-indigo-400 text-white hover:bg-indigo-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faXTwitter} className="fa-fw" />
              .com
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
