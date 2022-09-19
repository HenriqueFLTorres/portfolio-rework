import CSS from 'public/technologies/CSS';
import ExpressIcon from 'public/technologies/ExpressIcon';
import JavaScriptIcon from 'public/technologies/JavaScriptIcon';
import JestIcon from 'public/technologies/JestIcon';
import MongoDBIcon from 'public/technologies/MongoDBIcon';
import MongooseIcon from 'public/technologies/MongooseIcon';
import NextJSIcon from 'public/technologies/NextJSIcon';
import NodeIcon from 'public/technologies/NodeIcon';
import PrismaIcon from 'public/technologies/PrismaIcon';
import ReactIcon from 'public/technologies/ReactIcon';
import RemixIcon from './RemixIcon';
import SASSIcon from 'public/technologies/SASSIcon';
import TailwindCSSIcon from 'public/technologies/TailwindCSSIcon';
import TestingLibraryIcon from 'public/technologies/TestingLibraryIcon';
import TypeScriptIcon from 'public/technologies/TypeScriptIcon';

const technologiesList = [
  { name: 'SCSS/SASS', Icon: SASSIcon },
  { name: 'TailwindCSS', Icon: TailwindCSSIcon },
  { name: 'JavaScript', Icon: JavaScriptIcon },
  { name: 'TypeScript', Icon: TypeScriptIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Next.js', Icon: NextJSIcon },
  { name: 'Remix', Icon: RemixIcon },
  { name: 'Node.js', Icon: NodeIcon },
  { name: 'Prisma', Icon: PrismaIcon },
  { name: 'Express.js', Icon: ExpressIcon },
  { name: 'MongoDB', Icon: MongoDBIcon },
  { name: 'Mongoose', Icon: MongooseIcon },
  { name: 'React Testing Library', Icon: TestingLibraryIcon },
  { name: 'Jest', Icon: JestIcon }
] as const;

export {
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
  TypeScriptIcon,
  technologiesList
};
