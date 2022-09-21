import Background from '~/components/Shared/Background';

import Navbar from '~/components/Shared/Navbar';
import Introduction from '~/Layouts/Home/Introduction';
import AboutMe from '~/Layouts/Home/AboutMe';
import Technologies from '~/Layouts/Home/Technologies';
import ProjectsSection from '~/Layouts/Home/ProjectsSection';
import SocialLinks from '~/components/Contact/SocialLinks';

import * as mir4 from '~/routes/project/mir4cc.mdx';
import * as portfolio from '~/routes/project/portfolio.mdx';

import { LanguageContext } from '~/hooks/LanguageContext';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import LatestArticles from '~/Layouts/Home/LatestArticles';
import ProfessionalExperience from '~/Layouts/Home/ProfessionalExperience';

const getProjectFromModule = (mod: any) => {
  return { ...mod.attributes };
};

export const loader: LoaderFunction = async () => {
  return [
    getProjectFromModule(mir4),
    getProjectFromModule(portfolio),
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
