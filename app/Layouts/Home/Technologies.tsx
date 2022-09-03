import React from 'react';

import { useEnglishLanguage } from '~/hooks/LanguageContext';

import SASS from 'public/technologies/SASSIcon';
import TailwindCSSIcon from 'public/technologies/TailwindCSSIcon';
import JavaScriptIcon from 'public/technologies/JavaScriptIcon';
import TypeScriptIcon from 'public/technologies/TypeScriptIcon';
import ReactIcon from 'public/technologies/ReactIcon';
import NextJSIcon from 'public/technologies/NextJSIcon';
import RemixIcon from 'public/technologies/RemixIcon';
import NodeIcon from 'public/technologies/NodeIcon';
import ExpressIcon from 'public/technologies/ExpressIcon';
import MongoDBIcon from 'public/technologies/MongoDBIcon';
import MongooseIcon from 'public/technologies/MongooseIcon';
import TestingLibraryIcon from 'public/technologies/TestingLibraryIcon';
import JestIcon from 'public/technologies/JestIcon';

import HeartFace from 'public/Emojis/HeartFace.png';

const technologiesIcons = [
  SASS,
  TailwindCSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJSIcon,
  RemixIcon,
  NodeIcon,
  ExpressIcon,
  MongoDBIcon,
  MongooseIcon,
  TestingLibraryIcon,
  JestIcon
];

const Technologies = () => {
  const [iconHover, setIconHover] = React.useState<string>('');

  const [isEnglish] = useEnglishLanguage()!;

  return (
    <div className="xl:w-[1200px] xl:mx-auto">
      <h3 className="flex flex-row xl:h-52 justify-center font-bold text-3xl xl:text-5xl xl:mb-6 text-primary mt-36 p-4">
        <img
          src={HeartFace}
          alt=""
          className="h-8 xl:h-12 mr-4 xl:mr-8 inline"
        />
        <p>
          {isEnglish ? 'Technologies that i use!' : 'Tecnologias que eu uso!'}
        </p>
      </h3>
      <div className="flex flex-wrap justify-center gap-6 my-12">
        {technologiesIcons.map((Icon, index) => {
          let formatName = Icon.name.replace('Icon', '');
          formatName = formatName.replaceAll('_', ' ');

          return (
            <div
              key={index}
              className={'flex flex-col items-center group gap-3'}
            >
              <Icon
                onMouseOver={() => setIconHover(formatName)}
                onClick={() => setIconHover(formatName)}
                onMouseOut={() => setIconHover('')}
                className="h-16 w-16 drop-shadow-[0_0__2px_rgba(255,255,255,0.8)] group-hover:scale-125 cursor-pointer bg-terciary/40 rounded p-2 transition-transform duration-200"
              />
              <span
                className={`absolute rounded ${
                  iconHover === formatName ? 'opacity-100' : 'opacity-0'
                } px-2 py-1 bg-secondary/40 translate-y-20 text-sm text-primary z-20 backdrop-blur-sm text-center`}
              >
                {formatName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
