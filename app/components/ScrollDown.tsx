import React from "react";

import Arrow from "public/Icons/Arrow";

import { useEnglishLanguage } from "~/hooks/LanguageContext";

const ScrollDown = () => {
  const isLanguageEnglish = useEnglishLanguage();

  return (
    <div className="absolute flex flex-col w-24 right-0 justify-center items-center text-primary mr-8 pt-28">
      <div className="h-8 w-8 flex justify-center items-center bg-primary rounded-full mb-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)] animate-bounceAndLight cursor-pointer">
        <Arrow className="stroke-terciary" />
      </div>
      <p className="text-xs">
        {isLanguageEnglish ? "Scroll Down!" : "Desça a página"}
      </p>
    </div>
  );
};

export default ScrollDown;
