import Background from "~/components/Background";

import Navbar from "~/components/Navbar";
import Introduction from "~/components/Home/Introduction";
import AboutMe from "~/components/Home/AboutMe";
import Technologies from "~/components/Home/Technologies";
import ProjectsSection from "~/components/Home/ProjectsSection";
import SocialLinks from "~/components/contact/SocialLinks";

import * as mir4 from "~/routes/project/mir4cc.mdx";

import { LanguageContext } from "~/hooks/LanguageContext";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const getProjectFromModule = (mod: any) => {
  return { ...mod.attributes };
};

export const loader: LoaderFunction = async () => {
  return [
    getProjectFromModule(mir4),
    getProjectFromModule(mir4),
    getProjectFromModule(mir4),
    getProjectFromModule(mir4),
    getProjectFromModule(mir4),
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

      <Technologies />

      <ProjectsSection projects={data} />

      <SocialLinks />
    </LanguageContext>
  );
}
