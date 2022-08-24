import { LinkedIn, GitHub, Email, Blog, Discord, StackOverflow, LeetCode } from "public/SocialLinks"

const socialLinksIcons = [
  {
    component: LinkedIn,
    name: "LinkedIn",
    linkTo: "https://www.linkedin.com/in/henriquefltorres/",
  },
  {
    component: GitHub,
    name: "GitHub",
    linkTo: "https://github.com/HenriqueFLTorres",
  },
  {
    component: Email,
    name: "Gmail",
    linkTo: "mailto:henriquefltorres@gmail.com",
  },
  {
    component: Blog,
    name: "Personal Blog",
    linkTo: "https://simplifiedknowledge.vercel.app/",
  },
  {
    component: Discord,
    name: "Treffy#4964",
    copy: true,
  },
  {
    component: StackOverflow,
    name: "Stack Overflow",
    linkTo: "https://stackoverflow.com/users/17776680/treffy",
  },
  {
    component: LeetCode,
    name: "LeetCode",
    linkTo: "https://leetcode.com/HenriqueFLTorres/",
  },
];

const SocialLinks = () => {
  
  return (
    <div id="contact" className="flex flex-col w-max mx-auto gap-6 mt-48 mb-36 xl:mb-52">
      {socialLinksIcons.map((link) => (
        <a
          key={link.name}
          className="group w-48 xl:w-64 flex flex-row items-center rounded hover:bg-primary/10 px-5 py-4 cursor-pointer transition-colors duration-400"
          href={link.linkTo}
          onClick={() => !link.linkTo && navigator.clipboard.writeText(link.name)}
        >
          <link.component className="fill-primary/50 group-hover:fill-primary h-8 w-8 xl:h-12 xl:w-12 mr-2 xl:mr-6 group-hover:drop-shadow-[0_0_1px_rgba(255,255,255,0.8)] xl:group-hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.8)] transition-all duration-400" />
          <p className="text-primary/50 group-hover:text-primary xl:text-xl font-semibold group-hover:drop-shadow-[0_0_1px_rgba(255,255,255,0.8)] xl:group-hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] transition-all duration-400">{link.name}</p>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
