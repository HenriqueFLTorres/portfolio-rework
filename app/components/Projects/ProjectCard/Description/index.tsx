import {
  CSS,
  ExpressIcon,
  JavaScriptIcon,
  JestIcon,
  MongoDBIcon,
  MongooseIcon,
  NextJSIcon,
  NodeIcon,
  ReactIcon,
  RemixIcon,
  SASSIcon,
  TailwindCSSIcon,
  TestingLibraryIcon,
  TypeScriptIcon
} from 'public/technologies';
import SmallLabel from '@components/Shared/SmallLabel';

import { DescriptionProps, TechnologyNameTypes } from '@components/Projects/ProjectCard/ProjectCard';

const ProjectDescription = ({
  title,
  date,
  shortDescription,
  stackUsed
}: DescriptionProps) => (
  <div className='flex flex-col justify-between items-center pt-2 px-2 h-1/2 '>
    <header className='flex flex-row justify-between items-center w-full'>
      <h4 className='font-bold text-sm text-primary'>{title}</h4>
      <p className='font-light text-xs text-secondary'>{date}</p>
    </header>
    <p className='font-light text-xs text-secondary py-1 pb-4'>
      {shortDescription.length > 65
        ? `${shortDescription.slice(0, 65)}...`
        : shortDescription}
    </p>
    <footer className='flex flex-row gap-6'>
      {stackUsed?.map((technology: TechnologyNameTypes) => {
        const Component = TechnologiesNames[technology];

        return (
          <>
            <span
              key={technology}
              className='group flex items-center justify-center relative w-5 h-5'
            >
              <Component className='absolute w-full h-full' />
              <span className='block absolute w-full h-full bg-primary/60 rounded-full blur-[15px]'></span>
              <SmallLabel
                title={technology}
                additionalStyling='translate-y-[1.75rem] group-hover:translate-y-[2.6rem]'
              />
            </span>
          </>
        );
      })}
    </footer>
  </div>
);

export default ProjectDescription;

const TechnologiesNames = {
  CSS,
  Express: ExpressIcon,
  JavaScript: JavaScriptIcon,
  Jest: JestIcon,
  MongoDB: MongoDBIcon,
  Mongoose: MongooseIcon,
  NextJS: NextJSIcon,
  Node: NodeIcon,
  React: ReactIcon,
  Remix: RemixIcon,
  SASS: SASSIcon,
  TailwindCSS: TailwindCSSIcon,
  TestingLibrary: TestingLibraryIcon,
  TypeScript: TypeScriptIcon
};
