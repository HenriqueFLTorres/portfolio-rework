export type ProjectCardProps = {
  order: number;
  index: number;
  orderLimit: number;
  project: projectPropTypes;
};

export type projectPropTypes = {
  title: string;
  date: string;
  shortDescription: string;
  githubLink: string;
  liveLink: string;
  technologies: string;
  images: string;
  link: string;
  stackUsed: TechnologyNameTypes[];
};

export type SideLinksProps = {
  githubLink: string;
  liveLink: string;
};

export type DescriptionProps = {
  title: string;
  date: string;
  shortDescription: string;
  stackUsed: TechnologyNameTypes[];
};

export type TechnologyNameTypes =
  | 'CSS'
  | 'Express'
  | 'JavaScript'
  | 'Jest'
  | 'MongoDB'
  | 'Mongoose'
  | 'NextJS'
  | 'Node'
  | 'React'
  | 'Remix'
  | 'SASS'
  | 'TailwindCSS'
  | 'TestingLibrary'
  | 'TypeScript';
