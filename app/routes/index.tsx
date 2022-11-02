import { LanguageContext } from '@hooks/LanguageContext';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Background from '@components/Shared/Background';
import { MDXModule } from 'mdx/types';

import Navbar from '@components/Shared/Navbar';
import SocialLinks from '@components/Contact/SocialLinks';

import * as mir4 from '@routes/project/mir4cc.mdx';
import * as portfolio from '@routes/project/portfolio.mdx';
import * as ezcommerce from '@routes/project/ezcommerce.mdx';
import * as simplifiedKnowledge from '@routes/project/simplified-knowledge.mdx';

import Introduction from '@layouts/Home/Introduction';
import AboutMe from '@layouts/Home/AboutMe';
import Technologies from '@layouts/Home/Technologies';
import ProjectsSection from '@layouts/Home/ProjectsSection';
import LatestArticles from '@layouts/Home/LatestArticles';
import ProfessionalExperience from '@layouts/Home/ProfessionalExperience';

const getProjectFromModule = (mod: MDXModule) => {
  return { ...(mod as any).attributes };
};

export const loader: LoaderFunction = async () => {
  return [
    getProjectFromModule(mir4),
    getProjectFromModule(ezcommerce),
    getProjectFromModule(simplifiedKnowledge),
    getProjectFromModule(mir4),
    getProjectFromModule(portfolio)
  ];
};

export default function Index() {
  const data = useLoaderData();

  return (
    <LanguageContext>
      <Background />
      <Navbar animate={true} />

      <Introduction />

      <AboutMe />

      <ProfessionalExperience />

      <Technologies />

      <ProjectsSection projects={data} />

      <LatestArticles />

      <SocialLinks />
    </LanguageContext>
  );
}
