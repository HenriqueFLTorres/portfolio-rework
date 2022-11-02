import Email from 'public/SocialLinks/Email';

const EmailSender = () => {
  return (
    <form className='flex flex-col items-center mb-40 gap-4 w-5/6 mx-auto'>
      <div className='flex flex-row items-center w-full'>
        <Email className='absolute h-6 w-6 mx-3' />
        <input
          required
          type='email'
          className='w-full h-12 pl-12 pr-4 border-t-[1px] border-primary/20 bg-neutral-800/80 rounded-lg text-secondary placeholder:text-secondary/50 focus:caret-white focus:outline-white focus:outline-1 focus:outline'
          placeholder='youremail@gmail.com'
        ></input>
      </div>
      <input
        required
        type='subject'
        className='w-full h-12 px-3 rounded-lg border-t-[1px] border-primary/20 bg-neutral-800/80 text-secondary placeholder:text-secondary/50 focus:caret-white focus:outline-white focus:outline-1 focus:outline'
        placeholder='Contact Reason'
      ></input>
      <textarea
        required
        className='w-full h-44 border-t-[1px] border-primary/20 p-2 rounded-lg bg-neutral-800/80 text-secondary placeholder:text-secondary/50 resize-none focus:caret-white focus:outline-white focus:outline-1 focus:outline'
      />
      <button
        type={'submit'}
        className='w-full h-12 rounded-lg text-secondary bg-neutral-800/80 hover:bg-primary hover:text-terciary'
      >
        Submit
      </button>
    </form>
  );
};

export default EmailSender;
