import { SideLinksProps } from '@components/Projects/ProjectCard/ProjectCard';

import LinkIcon from 'public/Icons/Link';
import GitHub from 'public/SocialLinks/GitHub';

const ProjectSideLinks = ({ githubLink, liveLink }: SideLinksProps) => (
  <span className='absolute flex flex-col justify-between w-10 h-20 rounded-r-md p-2 bg-[#e4e4e41a] shadow-[inset_0_0_8px_#00000078] top-4 -right-4 translate-x-6'>
    <a href={githubLink} target='_blank' rel='noreferrer'>
      <div className='group cursor-pointer'>
        <span className='block absolute w-6 h-6 bg-primary/60 group-hover:bg-primary rounded-full blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] will-change-transform duration-200'></span>
        <GitHub className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform will-change-transform' />
      </div>
    </a>
    <a href={liveLink} target='_blank' rel='noreferrer'>
      <div className='group cursor-pointer'>
        <span className='block top-12 absolute w-6 h-8 bg-primary/60 group-hover:bg-primary rounded-full rotate-45 blur-lg group-hover:-translate-y-1 group-hover:scale-110 transition-[background-color,_transform] will-change-transform duration-200'></span>
        <LinkIcon className='fill-primary group-hover:-translate-y-1 group-hover:scale-110 transition-transform will-change-transform' />
      </div>
    </a>
  </span>
);

export default ProjectSideLinks;
