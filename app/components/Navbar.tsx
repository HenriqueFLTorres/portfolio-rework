import { useEnglishLanguage } from "~/hooks/LanguageContext";
import Logo from "public/Icons/Logo";

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

const Navbar = ({ animate = false }: { animate?: boolean}) => {
  const [isEnglish, setIsEnglish] = useEnglishLanguage()!;

  console.log(useEnglishLanguage());
  

  // return an array accoarding to language
  const getNavItems = () => {
    if (!isEnglish) {
      return navItemsPT;
    } else {
      return navItemsEN;
    }
  };

  return (
    <nav className={`absolute z-50 xl:flex w-full flex justify-between items-center px-10 py-4 text-secondary font-semibold${animate ? "opacity-0 animate-[reveal_1.5s_ease-out_2s_forwards]" : ""}`}>
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
              !isEnglish && "text-primary"
            } transition-colors duration-300`}
            onClick={() => setIsEnglish(false)}
          >
            PT
          </span>
          <span
            className={`mx-4 cursor-pointer ${
              isEnglish && "text-primary"
            } transition-colors duration-300`}
            onClick={() => setIsEnglish(true)}
          >
            EN
          </span>
        </div>
        <span
          className={`flex w-10 h-1 rounded-full bg-primary ${
            isEnglish ? "translate-x-[1.65rem]" : "translate-x-[-1.65rem]"
          } transition-transform duration-300`}
        ></span>
      </div>
    </nav>
  );
};

export default Navbar;
