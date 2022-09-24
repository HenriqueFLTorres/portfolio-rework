import { Link } from '@remix-run/react';

type ArticleFragmentProps = {
  title: string;
  description: string;
  date: string;
  image: string;
};

const ArticleFragment = ({
  title,
  description,
  date,
  image
}: ArticleFragmentProps) => (
  <Link
    to='/project/mir4cc'
    target={'_blank'}
    className={'w-full max-w-[300px]'}
  >
    <div
      className={
        'group relative h-max bg-neutral-700/70 rounded-tl-2xl rounded-br-2xl border-2 border-white/10 hover:border-[#E7BC19] hover:bg-neutral-900 z-20 transition-colors'
      }
    >
      <span
        className={
          'absolute z-10 rounded-tl-2xl rounded-br-2xl w-full h-full opacity-0 group-hover:opacity-10 bg-gradient-to-t from-[#E7BC19] to-[#E7BC1910] transition-opacity'
        }
      ></span>
      <div
        className={
          'flex clip-path items-center justify-center relative h-[130px] max-h-[130px] rounded-tl-2xl bg-neutral-900 text-2xl text-primary'
        }
      >
        <img
          src={image}
          alt=''
          className='relative article-image-mask z-10 object-contain h-full'
        />
      </div>
      <div className='flex flex-col justify-between pt-2 px-3 h-1/2 '>
        <header className='flex flex-row justify-between items-center w-full'>
          <h4 className='font-bold text-sm text-primary'>{title}</h4>
        </header>
        <p className='font-light text-xs text-secondary py-1 pb-3'>
          {description}
        </p>
        <p className='font-light text-xs text-secondary pb-2 mr-auto'>{date}</p>
      </div>
    </div>
  </Link>
);

export default ArticleFragment;
