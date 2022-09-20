import { useState } from 'react';
import Arrow from 'public/Icons/Arrow';

type Props = {
  images: Array<string>;
};

const ProjectCarrousel = ({ images }: Props) => {
  const [position, setPosition] = useState(0);

  const checkPosition = (position: number) => {
    if (position >= images.length - 1) {
      return 0;
    } else if (position <= 0) {
      return images.length - 1;
    } else {
      return position;
    }
  };

  return (
    <div className='w-screen md:w-full flex flex-row justify-center items-center my-32 md:mt-72 p-2 md:p-0'>
      <Arrow
        onClick={() => setPosition(checkPosition(position - 1))}
        className='stroke-primary z-10 h-14 rotate-90 mr-auto cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]'
      />
      {images.map((image, index) => {
        return (
          position === index && (
            <div
              key={image}
              className={
                'absolute w-3/5 md:w-[600px] h-[200px] md:h-[350px] rounded-xl select-none'
              }
            >
              <img
                src={image}
                alt=''
                className='absolute w-full h-full blur-[3px] md:blur-[8px] rounded'
              />
              <img
                src={image}
                alt=''
                className='absolute w-full h-full object-contain rounded'
              />
            </div>
          )
        );
      })}
      <Arrow
        onClick={() => setPosition(checkPosition(position + 1))}
        className='stroke-primary h-14 -rotate-90 ml-auto cursor-pointer hover:bg-primary/20 rounded transition-colors drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]'
      />
    </div>
  );
};

export default ProjectCarrousel;
