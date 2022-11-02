import { LanguageContext } from '@hooks/LanguageContext';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import Background from '@components/Shared/Background';
import { MDXModule } from 'mdx/types';

import Navbar from 'app/components/Shared/Navbar';
import SocialLinks from 'app/components/Contact/SocialLinks';

import * as mir4 from 'app/routes/project/mir4cc.mdx';
import * as portfolio from 'app/routes/project/portfolio.mdx';
import * as ezcommerce from 'app/routes/project/ezcommerce.mdx';
import * as simplifiedKnowledge from 'app/routes/project/simplified-knowledge.mdx';

import Introduction from 'app/layouts/Home/Introduction';
import AboutMe from 'app/layouts/Home/AboutMe';
import Technologies from 'app/layouts/Home/Technologies';
import ProjectsSection from 'app/layouts/Home/ProjectsSection';
import LatestArticles from 'app/layouts/Home/LatestArticles';
import ProfessionalExperience from 'app/layouts/Home/ProfessionalExperience';

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
