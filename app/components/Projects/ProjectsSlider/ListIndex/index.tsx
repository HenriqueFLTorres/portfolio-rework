import { projectPropTypes } from '@components/Projects/ProjectCard/ProjectCard';

const SliderListIndex = ({
  projects,
  order
}: {
  projects: projectPropTypes[];
  order: number;
}) => (
  <div className='flex flex-row gap-4 translate-y-48'>
    {projects.map((_, index) => (
      <span
        key={index}
        className={`block w-3 h-3 rounded-full bg-white ${
          index === order
            ? 'opactiy-80 drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]'
            : 'opacity-10'
        } transition-[opacity,_filter]`}
      ></span>
    ))}
  </div>
);

export default SliderListIndex;
