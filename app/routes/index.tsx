import Background from '@components/Shared/Background';
import { LanguageContext } from '@hooks/LanguageContext';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { MDXModule } from 'mdx/types';

import SocialLinks from '@components/Contact/SocialLinks';
import Navbar from '@components/Shared/Navbar';

import * as ezcommerce from '@routes/project/en/ezcommerce.mdx';
import * as mir4 from '@routes/project/en/mir4cc.mdx';
import * as mir4tools from '@routes/project/en/mir4tools.mdx';
import * as portfolio from '@routes/project/en/portfolio.mdx';
import * as simplifiedKnowledge from '@routes/project/en/simplified-knowledge.mdx';

import * as ezcommercePT from '@routes/project/pt/ezcommerce.mdx';
import * as mir4PT from '@routes/project/pt/mir4cc.mdx';
import * as mir4toolsPT from '@routes/project/pt/mir4tools.mdx';
import * as portfolioPT from '@routes/project/pt/portfolio.mdx';
import * as simplifiedKnowledgePT from '@routes/project/pt/simplified-knowledge.mdx';

import AboutMe from '@layouts/home/AboutMe';
import Introduction from '@layouts/home/Introduction';
import LatestArticles from '@layouts/home/LatestArticles';
import ProfessionalExperience from '@layouts/home/ProfessionalExperience';
import ProjectsSection from '@layouts/home/ProjectsSection';
import Technologies from '@layouts/home/Technologies';
import { Analytics } from '@vercel/analytics/react';

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
    <>
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
      <Analytics />
    </>
  );
}
