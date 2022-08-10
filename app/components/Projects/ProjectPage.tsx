import Background from "~/components/Background";
import Navbar from "~/components/Navbar";
import ProjectCarrousel from "~/components/ProjectCarrousel";

import GreenParticle from "public/SVG/GreenParticle.svg";
import RedParticle from "public/SVG/RedParticle.svg";
import PurpleParticle from "public/SVG/PurpleParticle.svg";

import GitHub from "public/linksIcons/GitHub";
import Link from "public/Icons/Link";

import HandWriting from "public/Emojis/HandWriting.png";
import BuildingConstruction from "public/Emojis/BuildingConstruction.png";
import Mountain from "public/Emojis/Mountain.png";
import Brain from "public/Emojis/Brain.png";

type Props = {
  title: string;
  images: Array<string>;
  shortDescription: string;
  technologies: Array<any>;
  github: string;
  link: string;
  about: string;
  buildWith: string;
  challenges: string;
  learned: string;
};

export default function ProjectPage({
  title,
  images,
  shortDescription,
  technologies,
  github,
  link,
  about,
  buildWith,
  challenges,
  learned,
}: Props) {
  return (
    <div className="h-[1800px]">
      <div className="absolute w-[1920px] 2xl:w-screen h-auto -z-10 -translate-y-24 overflow-hidden">
        <img
          src={images[0]}
          alt=""
          className="absolute opacity-40 blur-md 2xl:w-full 2xl:h-[1080px] 2xl:blur-xl"
        />
        <img
          src={images[0]}
          alt=""
          className="absolute opacity-40 blur-md translate-y-full 2xl:w-full 2xl:h-[1080px] 2xl:blur-xl"
        />
      </div>
      <img
        src={RedParticle}
        alt=""
        className="absolute -z-10 translate-y-[600px] md:translate-y-0 h-[800px] md:h-[1600px] overflow-hidden"
      />
      <img
        src={GreenParticle}
        alt=""
        className="absolute -z-10 right-0 h-[1000px] md:h-auto -translate-y-36"
      />
      <img
        src={PurpleParticle}
        alt=""
        className="absolute -z-10 h-[600px] scale-[2] -translate-x-1/2 md:scale-100 md:h-[1500px] translate-y-[1400px] md:translate-y-[600px] md:translate-x-[400px] overflow-hidden"
      />
      <main className="pt-20 md:pt-44 w-screen md:w-[800px] mx-auto">
        <header className="flex flex-col w-screen p-4 md:w-full md:p-0">
          <div className="flex flex-col md:flex-row items-center mb-8 md:mb-12 gap-6 md:gap-0">
            <h1 className="text-primary font-bold md:mr-auto text-2xl md:text-3xl">
              {title}
            </h1>
            <div className="hidden md:block group w-8 h-8 cursor-pointer">
              <span className="absolute block w-8 h-8 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200"></span>
              <GitHub className="fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
            </div>
            <div className="hidden md:block group w-8 cursor-pointer ml-8">
              <span className="absolute block w-8 h-8 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200"></span>
              <Link className="fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col w-full md:w-auto md:flex-row gap-10 md:gap-20">
            <div className="flex flex-col h-auto w-full md:w-3/5 gap-10">
              <img
                src="https://i.imgur.com/kFUrjL9.png"
                alt=""
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="flex flex-col-reverse md:flex-col w-full md:w-2/5 justify-between gap-14 md:gap-0">
              <p className="text-primary font-light text-sm">
                {shortDescription}
              </p>
              <div className="flex flex-row justify-between md:justify-center gap-6 md:gap-12">
                {technologies.map((Tool) => (
                  <Tool
                    key={Tool}
                    className="h-6 mr-auto md:mr-0 md:h-10 drop-shadow-[0_0_4px_#ffffffae]"
                  />
                ))}
                <div className="block md:hidden group w-6 cursor-pointer">
                  <span className="absolute block w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200"></span>
                  <GitHub className="fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
                </div>
                <div className="block md:hidden group w-6 cursor-pointer">
                  <span className="absolute block w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200"></span>
                  <Link className="fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="w-screen md:w-full p-4 md:p-0 flex flex-col justify-center md:grid grid-flow-row grid-cols-2 gap-6 md:gap-12 my-12 md:my-24">
          <div>
            <span className="flex flex-row items-center font-bold text-xl text-primary mb-4 md:mb-12 p-4">
              <img src={HandWriting} alt="" className="h-12 mr-6 inline" />
              <h3>About the project</h3>
            </span>
            <p className="text-primary font-light text-sm">{about}</p>
          </div>

          <div>
            <span className="flex flex-row items-center font-bold text-xl text-primary mb-4 md:mb-12 p-4">
              <img
                src={BuildingConstruction}
                alt=""
                className="h-12 mr-6 inline"
              />
              <h3>Build with</h3>
            </span>
            <p className="text-primary font-light text-sm">{buildWith}</p>
          </div>

          <div>
            <span className="flex flex-row items-center font-bold text-xl text-primary mb-4 md:mb-12 p-4">
              <img src={Mountain} alt="" className="h-12 mr-6 inline" />
              <h3>The challenges</h3>
            </span>
            <p className="text-primary font-light text-sm">{challenges}</p>
          </div>

          <div>
            <span className="flex flex-row items-center font-bold text-xl text-primary  mb-12 p-4">
              <img src={Brain} alt="" className="h-12 mr-6 inline" />
              <h3>What I've learned</h3>
            </span>
            <p className="text-primary font-light text-sm">{learned}</p>
          </div>
        </div>
        <ProjectCarrousel images={images} />
      </main>
    </div>
  );
}
