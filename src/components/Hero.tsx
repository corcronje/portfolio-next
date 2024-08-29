import React from 'react'
import Image from "next/image";
import HeroImage from "@/assets/images/hero.png";

function Hero() {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="p-4 order-2 lg:order-1">
        <h1>Build, ship and scale fast ...</h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          With almost two decades of experience, I build and ship high quality scalable web applications faster.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
            target="_blank"
            className="flex justify-center items-center bg-black dark:bg-indigo-500 text-white px-4 py-2 rounded-md border-2 border-black dark:border-indigo-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
          >
            Next.js
          </a>
          <a
            href="https://github.com/surjithctly/astroship"
            rel="noopener"
            target="_blank"
            className="flex justify-center items-center px-4 py-2 bg-white rounded-md text-indigo-500 border-2 border-indigo-400 dark:border-white hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
          >
            Laravel
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center order-1 lg:order-2">
        <picture>
          <Image
            src={HeroImage}
            alt="Astronaut in the air"
            width="520"
            height="424"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  );
}

export default Hero