import React from "react";

import Logo from "public/Icons/Logo";
import ScrollDown from "../ScrollDown";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <div className="flex flex-col items-center text-primary font-display text-2xl xl:text-4xl h-screen">
      <ScrollDown />
      <div className="flex flex-col items-center my-auto">
        <Logo className="h-44 w-44 xl:h-64 xl:w-64 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)] mb-6 animate-[appear_1s_ease-out_forwards_,light_1.5s_infinite_alternate]" />
        <p className="font-bold opacity-0 mb-4 animate-[reveal_1s_ease-out_1s_forwards]">
          Henrique Torres
        </p>
        <p className="font-light opacity-0 animate-[reveal_1s_ease-out_1.5s_forwards]">
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
};

export default Introduction;
