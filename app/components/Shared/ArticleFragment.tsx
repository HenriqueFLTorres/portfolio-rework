type ArticleFragmentProps = {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
};

const ArticleFragment = ({
  title,
  description,
  date,
  image,
  link
}: ArticleFragmentProps) => (
  <a
    href={link}
    target={'_blank'}
    rel={'noopener noreferrer'}
    className={'w-full max-w-[300px]'}
  >
    <div
      className={
        'group relative h-[280px] bg-neutral-700/70 rounded-tl-2xl rounded-br-2xl border-2 border-white/10 hover:border-[#E7BC19] hover:bg-neutral-900 z-20 transition-colors'
      }
    >
      <span
        className={
          'absolute z-10 rounded-tl-2xl rounded-br-2xl w-full h-full opacity-0 group-hover:opacity-10 bg-gradient-to-t from-[#E7BC19] to-[#E7BC1910] transition-opacity'
        }
      ></span>
      <div
        className={
          'relative flex items-center justify-center h-1/2 rounded-full clip-path bg-neutral-900 text-2xl text-primary'
        }
      >
        <img
          src={image}
          alt=''
          className='relative z-10 article-image-mask object-cover w-full h-full'
        />
      </div>
      <div className='flex flex-col justify-between py-2 px-3 h-1/2 gap-1'>
        <header className='flex flex-row justify-between items-center w-full'>
          <h4 className='font-bold text-sm text-primary'>{title}</h4>
        </header>
        <p className='h-auto font-light text-xs text-secondary article-text-overflow text-ellipsis overflow-hidden mb-auto'>
          {description}
        </p>
        <p className='font-light text-xs text-secondary mr-auto'>{date}</p>
      </div>
    </div>
  </a>
);

export default ArticleFragment;
