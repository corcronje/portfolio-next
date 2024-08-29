import React from "react";
import Image from "next/image";
import LaravelIcon from "@/assets/images/laravel.png";
import ReactIcon from "@/assets/images/react.png";
import NodeIcon from "@/assets/images/node.png";
import LivewireIcon from "@/assets/images/livewire.png";
import TailwindIcon from "@/assets/images/tailwind.png";
import VueIcon from "@/assets/images/vue.png";
import NextJsIcon from "@/assets/images/nextjs.png";
import AlpineJsIcon from "@/assets/images/alpine.png";

function SkillStack() {
    const iconSize = 100;
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex justify-center items-center">
          <Image
            src={ReactIcon}
            width={iconSize}
            height={iconSize}
            alt="React"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image src={VueIcon} width={iconSize} height={iconSize} alt="Vue" />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={NextJsIcon}
            width={iconSize}
            height={iconSize}
            alt="NextJs"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image src={NodeIcon} width={iconSize} height={iconSize} alt="Node" />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={LaravelIcon}
            width={iconSize}
            height={iconSize}
            alt="Laravel"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={LivewireIcon}
            width={iconSize}
            height={iconSize}
            alt="Livewire"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={TailwindIcon}
            width={iconSize}
            height={iconSize}
            alt="Tailwind"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={AlpineJsIcon}
            width={iconSize}
            height={iconSize}
            alt="AlpineJs"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillStack;
