import { LanguageContext } from '@hooks/LanguageContext';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Background from '@components/Shared/Background';
import { MDXModule } from 'mdx/types';

import Navbar from '@components/Shared/Navbar';
import SocialLinks from '@components/Contact/SocialLinks';

import * as mir4 from '@routes/project/en/mir4cc.mdx';
import * as portfolio from '@routes/project/en/portfolio.mdx';
import * as ezcommerce from '@routes/project/en/ezcommerce.mdx';
import * as simplifiedKnowledge from '@routes/project/en/simplified-knowledge.mdx';
import * as mir4tools from '@routes/project/en/mir4tools.mdx';

import * as mir4PT from '@routes/project/pt/mir4cc.mdx';
import * as portfolioPT from '@routes/project/pt/portfolio.mdx';
import * as ezcommercePT from '@routes/project/pt/ezcommerce.mdx';
import * as simplifiedKnowledgePT from '@routes/project/pt/simplified-knowledge.mdx';
import * as mir4toolsPT from '@routes/project/pt/mir4tools.mdx';

import Introduction from '@layouts/home/Introduction';
import AboutMe from '@layouts/home/AboutMe';
import Technologies from '@layouts/home/Technologies';
import ProjectsSection from '@layouts/home/ProjectsSection';
import LatestArticles from '@layouts/home/LatestArticles';
import ProfessionalExperience from '@layouts/home/ProfessionalExperience';

const getProjectFromModule = (mod: MDXModule) => {
  return { ...(mod as any).attributes };
};

const englishProjects = [
  getProjectFromModule(mir4tools),
  getProjectFromModule(mir4),
  getProjectFromModule(ezcommerce),
  getProjectFromModule(simplifiedKnowledge),
  getProjectFromModule(portfolio)
];

const portugueseProjects = [
  getProjectFromModule(mir4toolsPT),
  getProjectFromModule(mir4PT),
  getProjectFromModule(ezcommercePT),
  getProjectFromModule(simplifiedKnowledgePT),
  getProjectFromModule(portfolioPT)
];

export const loader: LoaderFunction = async () => {
  return {
    PT: portugueseProjects,
    EN: englishProjects
  };
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
