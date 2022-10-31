const SmallLabel = ({
  title = 'Please, GIVE ME A TITLE',
  additionalStyling = ''
}: {
  title: string;
  additionalStyling?: string;
}) => (
  <span
    className={`absolute flex justify-center rounded opacity-0 group-hover:opacity-100 px-2 py-1 bg-secondary/40 translate-y-20 group-hover:translate-y-24 text-sm text-primary z-20 backdrop-blur-sm text-center transition-[transform,_opacity] duration-200 pointer-events-none ${beforeElementStyling} ${additionalStyling}`}
  >
    {title}
  </span>
);

export default SmallLabel;

const beforeElementStyling =
  'before:absolute before:block before:w-0 before:h-0 before:border-[0_5px_7.9px_5px] before:border-x-transparent before:border-t-transparent before:border-secondary/40 before:bottom-full';
