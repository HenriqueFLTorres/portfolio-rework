import { useEffect, useState } from 'react';

import CircleParticle from 'public/SVG/CircleParticle.png';

const Background = (props: any) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className='fixed bg-terciary w-screen h-full overflow-hidden clip-path -z-10 transform-gpu'>
      <img
        src={CircleParticle}
        alt=''
        className={
          'absolute min-w-[800px] w-[800px] md:min-w-[1000px] md:w-[1000px] left-[15rem] bottom-[38rem] md:left-[-15rem] md:-bottom-[19rem] -rotate-[90deg] blur-[20px] animate-[opacity_8s_infinite_alternate]'
        }
        style={{
          transform: `translateY(-${scrollPosition * 0.02}px)`
        }}
      />
      <img
        src={CircleParticle}
        alt=''
        className={
          'absolute min-w-[900px] w-[900px] md:min-w-[1100px] md:w-[1100px] left-[-10rem] top-[30rem] md:left-[-20rem] md:top-[-24rem] md:-rotate-[180deg] blur-[30px] animate-[opacity_12s_infinite_alternate]'
        }
        style={{
          transform: `translateY(${scrollPosition * 0.03}px)`
        }}
      />
      <img
        src={CircleParticle}
        alt=''
        className={
          'hidden md:block absolute min-w[800px] w-[800px] right-[-18rem] -bottom-[-12rem] -rotate-[220deg] blur-[30px] animate-[opacity_6s_infinite_alternate]'
        }
        style={{
          transform: `translateX(-${scrollPosition * 0.02}px)`
        }}
      />
    </div>
  );
};

export default Background;
