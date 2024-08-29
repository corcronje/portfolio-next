import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-4">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <a href="/" className="text-lg">
          <span className="font-bold text-slate-800 dark:text-indigo-400">cronje</span>
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
      <nav className="astronav-items astronav-toggle hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
        <ul className="flex flex-row gap-4">
          <li>
            <a href="#about" className="text-indigo-400 hover:text-indigo-500">About</a>
          </li>
          <li>
            <a href="#employment-history" className="text-indigo-400 hover:text-indigo-500">Work</a>
          </li>
          <li>
            <a href="#education" className="text-indigo-400 hover:text-indigo-500">Education</a>
          </li>
          <li>
            <a href="#projects" className="text-indigo-400 hover:text-indigo-500">Projects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
