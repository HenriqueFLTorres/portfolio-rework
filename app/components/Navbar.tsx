import React from "react";
import {
  useEnglishLanguage,
  useEnglishLanguageUpdate,
} from "~/hooks/LanguageContext";
import Logo from "public/Icons/Logo";

type Props = {};

const navItemsEN = [
  {
    name: "My Blog",
    href: "https://simplifiedknowledge.vercel.app/",
    link: true,
  },
  {
    name: "About Me",
    href: "#about-me",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const navItemsPT = [
  {
    name: "Meu Blog",
    href: "https://simplifiedknowledge.vercel.app/",
    link: true,
  },
  {
    name: "Sobre Mim",
    href: "#about-me",
  },
  {
    name: "Projetos",
    href: "#projects",
  },
  {
    name: "Contato",
    href: "#contact",
  },
];

const Navbar = (props: Props) => {
  const isLanguageEnglish = useEnglishLanguage();
  const setLanguageEnglish = useEnglishLanguageUpdate();

  // return an array accoarding to language
  const getNavItems = () => {
    if (!isLanguageEnglish) {
      return navItemsPT;
    } else {
      return navItemsEN;
    }
  };

  return (
    <nav className="xl:flex z-50 w-full flex justify-between items-center px-10 py-4 text-secondary font-semibold">
      <a href="/">
        <Logo className="h-12 w-12" />
      </a>
      <div className="hidden md:flex flex-row justify-between w-3/6">
        {getNavItems().map((item) => (
          <a
            key={item.name}
            className="hover:translate-y-1 hover:text-primary transition-all duration-300"
            href={item.href}
            target={`${item.link ? "_blank" : ""}`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-1 translate-y-1">
        <div className="flex font-bold select-none">
          <span
            className={`mx-4 cursor-pointer ${
              !isLanguageEnglish && "text-primary"
            } transition-colors duration-300`}
            onClick={() => setLanguageEnglish(false)}
          >
            PT
          </span>
          <span
            className={`mx-4 cursor-pointer ${
              isLanguageEnglish && "text-primary"
            } transition-colors duration-300`}
            onClick={() => setLanguageEnglish(true)}
          >
            EN
          </span>
        </div>
        <span
          className={`flex w-10 h-1 rounded-full bg-primary ${
            isLanguageEnglish
              ? "translate-x-[1.65rem]"
              : "translate-x-[-1.65rem]"
          } transition-transform duration-300`}
        ></span>
      </div>
    </nav>
  );
};

export default Navbar;
