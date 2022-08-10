import React from "react";

import WavingHand from "public/Emojis/WavingHand.png";
import Globe from "public/Emojis/Globe.png";
import CrystalBall from "public/Emojis/CrystalBall.png";
import HandWriting from "public/Emojis/HandWriting.png";
import HandPointingRight from "public/Emojis/HandPointingRight.png";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div
      id="about-me"
      className="xl:flex xl:flex-wrap xl:justify-center xl:mx-auto xl:max-w-[1400px] scroll-mt-28"
    >
      <div className="flex flex-col xl:w-1/2 text-primary font-display text-2xl my-auto xl:my-0 xl:px-8">
        <h3 className="flex flex-row font-bold text-3xl xl:text-5xl xl:mb-6 mx-8">
          <img
            src={WavingHand}
            alt=""
            className="h-8 xl:h-12 mr-4 xl:mr-8 inline"
          />{" "}
          Who am I?
        </h3>
        <p className="font-light text-base xl:text-lg p-6">
          Hello, I am Henrique Torres, a passionate developer who has dreamed
          for decades about being a Software Developer. With the first
          console.log(), I fell in love with programming, and since then, I have
          been studying hard to show my skills to the{" "}
          <img src={Globe} alt="" className="h-4 inline mr-1" />!
        </p>
      </div>
      <div className="flex flex-col xl:w-1/2 text-primary font-display text-2xl my-auto xl:my-0 xl:px-8 mt-12">
        <h3 className="flex flex-row font-bold text-3xl xl:text-5xl xl:mb-6 mx-8">
          <img
            src={CrystalBall}
            alt=""
            className="h-8 xl:h-12 mr-4 xl:mr-8 inline"
          />{" "}
          Where do I see myself in 5 years?
        </h3>
        <p className="font-light text-base xl:text-lg p-6">
          I want to financially stabilize myself and my family, providing them
          with a safer and healthier place. I will also expand my knowledge of
          software engineering, computer security, ethical hacking, and design
          to become a polymath!
        </p>
      </div>
      <div className="flex flex-col xl:w-1/2 text-primary font-display text-2xl my-auto xl:mt-32 xl:px-8 mt-12">
        <h3 className="flex flex-row justify-center font-bold text-3xl xl:text-5xl xl:mb-6 mx-8">
          <img
            src={HandWriting}
            alt=""
            className="h-8 xl:h-12 mr-4 xl:mr-8 inline"
          />{" "}
          Check out my Blog
        </h3>
        <p className="font-light text-base xl:text-lg p-6 text-center">
          Read articles about diverse content in software development. I am
          constantly updating it with new knowledge that I acquire!
          <br />
          <br />
          <img
            src={HandPointingRight}
            alt=""
            className="h-4 inline mr-1"
          />{" "}
          <a
            href="https://simplifiedknowledge.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="underline font-semibold"
          >
            Simplified Knowledge Blog
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
