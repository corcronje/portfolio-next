import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
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
          <button id="astronav-menu" aria-label="Toggle Menu">
            <svg
              fill="currentColor"
              className="w-4 h-4 text-gray-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              <title>Toggle Menu</title>
              <path
                className="astronav-close-icon astronav-toggle hidden"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                className="astronav-open-icon astronav-toggle"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav className="hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
        <ul className="flex flex-row gap-2">
          <li>
            <a href="#about" className="px-3 py-1 text-indigo-400 hover:text-indigo-600">
              About
            </a>
          </li>
          <li>
            <a
              href="#employment-history"
              className="px-3 py-1 text-indigo-400 hover:text-indigo-600"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="px-3 py-1 text-indigo-400 hover:text-indigo-600"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-3 py-1 text-indigo-400 hover:text-indigo-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="rounded px-3 py-1 bg-indigo-400 text-white hover:bg-indigo-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="fa-fw" /> Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/cor-cronje-developer"
              target="_blank"
              className="rounded px-3 py-1 bg-indigo-400 text-white hover:bg-indigo-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-fw" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://x.com/corcronje"
              target="_blank"
              className="rounded py-1 px-3 bg-indigo-400 text-white hover:bg-indigo-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faXTwitter} className="fa-fw" />.com
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
