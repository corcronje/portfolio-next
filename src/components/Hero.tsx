import React from 'react'
import Image from "next/image";
import HeroImage from "@/assets/images/hero.png";

function Hero() {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
      <div className="p-4 order-2 lg:order-1">
        <h1>Build, ship and scale fast ...</h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          With almost two decades of experience, I build and ship high quality scalable web applications faster.
        </p>
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