import React from "react";
import { Link } from "@remix-run/react";

import LinkIcon from "public/Icons/Link";
import GitHub from "public/linksIcons/GitHub";
import ReactIcon from "public/technologies/ReactIcon";

type Props = {
  title?: any;
  date?: String;
  shortDescription?: String;
  stackUsed?: Array<String>;
  github?: string;
  LinkIcon?: string;
  order: any;
  index: any;
  orderLimit: any;
};

const ProjectCard = ({
  title,
  date,
  github,
  link,
  order,
  index,
  orderLimit,
}: Props) => {
  // get style accoarding to the position of the carrousel
  const getPositionStyle = (cardPosition: Number) => {
    if (cardPosition === order) {
      return "center";
    } else if (
      cardPosition === order + 1 ||
      (cardPosition === 0 && order === orderLimit)
    ) {
      return "left";
    } else if (
      cardPosition === order - 1 ||
      (order === 0 && cardPosition === orderLimit)
    ) {
      return "right";
    } else {
      return "-translate-y-16 z-0 opacity-0";
    }
  };

  return (
    <div
      className={`absolute w-64 h-56 bg-neutral-700/70 rounded ${getPositionStyle(
        index - 1
      )} transition-all duration-300 z-20`}
    >
      <Link to="/project/mir4cc" target={"_blank"}>
        <div className="w-full h-full p-2 cursor-pointer">
          <div className={`h-1/2 rounded bg-neutral-900 text-2xl text-primary`}>
            pos: {index}
          </div>
          <div className="flex flex-col justify-between items-center pt-2 px-2 h-1/2 ">
            <header className="flex flex-row justify-between items-center w-full">
              <h4 className="font-bold text-sm text-primary">{title}</h4>
              <p className="font-light text-xs text-secondary">{date}</p>
            </header>
            <p className="font-light text-xs text-secondary">
              Taking advantage of features such as local storage and state
              management...
            </p>
            <footer>
              <span className="block absolute w-5 h-5 bg-primary/60 rounded-full blur-[15px]"></span>
              <ReactIcon className="w-5 h-5" />
            </footer>
          </div>
        </div>
      </Link>
      <span className="absolute flex flex-col justify-between w-10 h-20 rounded-r-md p-2 bg-[#e4e4e41a] shadow-[inset_0_0_8px_#00000078] top-4 -right-4 translate-x-6">
        <div className="group cursor-pointer">
          <span className="block absolute w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200"></span>
          <GitHub className="fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
        </div>
        <div className="group cursor-pointer">
          <span className="block top-12 absolute w-6 h-8 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-200"></span>
          <LinkIcon className="fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform" />
        </div>
      </span>
      <span className="absolute w-44 h-44 bg-black/60 translate-x-7 rounded-full scale-y-[0.2] blur-[70px]"></span>
    </div>
  );
};

export default ProjectCard;
