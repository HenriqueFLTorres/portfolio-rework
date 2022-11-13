import { useState } from 'react';
import { useEnglishLanguage } from '@hooks/LanguageContext';

import SmallLabel from '@components/Shared/SmallLabel';
import {
  LinkedIn,
  GitHub,
  Email,
  Blog,
  Discord,
  StackOverflow,
  LeetCode
} from 'public/SocialLinks';

const SocialLinks = () => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <div
      id='contact'
      className='flex flex-col w-max mx-auto gap-6 mt-48 mb-20 xl:mb-36'
    >
      {socialLinksIcons.map((link) => (
        <SocialFragment
          key={link.name}
          link={link}
          showLabel={showLabel}
          setShowLabel={setShowLabel}
        />
      ))}
    </div>
  );
};

const SocialFragment = ({
  link,
  showLabel,
  setShowLabel
}: {
  link: socialLinkTypes;
  showLabel: boolean;
  setShowLabel: React.Dispatch<boolean>;
}) => {
  const { name, copy, linkTo, Component } = link;

  const { isEnglish } = useEnglishLanguage();

  const handleCopy = () => {
    if (!copy) return;

    navigator.clipboard.writeText(name);
    setShowLabel(true);
    setTimeout(() => {
      setShowLabel(false);
    }, 2000);
  };

  return (
    <a
      key={name}
      className={`group w-48 xl:w-64 flex flex-row items-center justify-center rounded ${
        showLabel && copy ? 'bg-primary/10' : ''
      } hover:bg-primary/10 px-5 py-4 cursor-pointer transition-[background-color] duration-400`}
      target='_blank'
      rel='noreferrer'
      href={linkTo}
      onClick={handleCopy}
    >
      <Component className='fill-primary/50 group-hover:fill-primary h-8 w-8 xl:h-12 xl:w-12 mr-2 xl:mr-6 group-hover:drop-shadow-[0_0_1px_rgba(255,255,255,0.8)] xl:group-hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.8)] transition-[fill,_filter] duration-400' />
      <p className='text-primary/50 mr-auto group-hover:text-primary xl:text-xl font-semibold group-hover:drop-shadow-[0_0_1px_rgba(255,255,255,0.8)] xl:group-hover:drop-shadow-[0_0_2px_rgba(255,255,255,0.8)] transition-[color,_filter] duration-400'>
        {name}
      </p>
      {copy && (
        <SmallLabel
          title={isEnglish ? 'Copied' : 'Copiado'}
          additionalStyling={`translate-y-[3.8rem] group-hover:translate-y-[4.2rem] ${
            showLabel
              ? 'opacity-100 group-hover:opacity-100'
              : 'opacity-0 group-hover:opacity-0'
          }`}
        />
      )}
    </a>
  );
};

const socialLinksIcons = [
  {
    Component: LinkedIn,
    name: 'LinkedIn',
    linkTo: 'https://www.linkedin.com/in/henriquefltorres/'
  },
  {
    Component: GitHub,
    name: 'GitHub',
    linkTo: 'https://github.com/HenriqueFLTorres'
  },
  {
    Component: Email,
    name: 'Gmail',
    linkTo: 'mailto:henriquefltorres@gmail.com'
  },
  {
    Component: Blog,
    name: 'Personal Blog',
    linkTo: 'https://simplifiedknowledge.vercel.app/'
  },
  {
    Component: Discord,
    name: 'Treffy#4964',
    copy: true
  },
  {
    Component: StackOverflow,
    name: 'Stack Overflow',
    linkTo: 'https://stackoverflow.com/users/17776680/treffy'
  },
  {
    Component: LeetCode,
    name: 'LeetCode',
    linkTo: 'https://leetcode.com/HenriqueFLTorres/'
  }
];

interface socialLinkTypes {
  Component: (
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
  ) => JSX.Element;
  name: string;
  linkTo?: string;
  copy?: boolean;
}

export default SocialLinks;
