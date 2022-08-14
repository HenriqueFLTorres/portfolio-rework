import { useEffect, useState } from "react";

import CircleParticle from "public/SVG/CircleParticle.png";

const Background = (props: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="fixed bg-terciary w-screen h-full overflow-hidden clip-path -z-10 transform-gpu">
      <img
        src={CircleParticle}
        alt=""
        className={`absolute w-[500px] xl:w-[1000px] left-[-12rem] -bottom-[19rem] -rotate-[90deg] blur-[20px] animate-[opacity_8s_infinite_alternate]`}
        style={{
          transform: `translateY(-${scrollPosition * 0.02}px)`
        }}
      />
      <img
        src={CircleParticle}
        alt=""
        className={`absolute w-[600px] xl:w-[1100px] left-[-18rem] -top-[24rem] -rotate-[180deg] blur-[30px] animate-[opacity_12s_infinite_alternate]`}
        style={{
          transform: `translateY(${scrollPosition * 0.03}px)`
        }}
      />
      <img
        src={CircleParticle}
        alt=""
        className={`absolute w-[600px] xl:w-[1200px] right-[-24rem] -bottom-[5rem] -rotate-[220deg] blur-[30px] animate-[opacity_6s_infinite_alternate]`}
        style={{
          transform: `translateX(-${scrollPosition * 0.02}px)`
        }}
      />
    </div>
  );
};

export default Background;
