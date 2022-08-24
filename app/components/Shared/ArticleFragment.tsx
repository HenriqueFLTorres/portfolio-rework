import { Link } from "@remix-run/react";

const ArticleFragment = () => (
  <Link to="/project/mir4cc" target={"_blank"} className={`w-64`}>
    <div
      className={`w-64 h-max bg-neutral-700/70 rounded-tl-2xl rounded-br-2xl border-2 border-white/10 hover:bg-neutral-600/70 z-20`}
    >
      <div
        className={`flex items-center justify-center relative h-[130px] max-h-[130px] rounded-tl-2xl bg-neutral-900 text-2xl text-primary`}
      >
        <img
          src={"https://i.imgur.com/kFUrjL9.png"}
          alt=""
          className="relative z-10 object-contain h-full"
        />
      </div>
      <div className="flex flex-col justify-between items-center pt-2 px-3 h-1/2 ">
        <header className="flex flex-row justify-between items-center w-full">
          <h4 className="font-bold text-sm text-primary">
            Reference and Value: Why you should know the difference
          </h4>
        </header>
        <p className="font-light text-xs text-secondary py-1 pb-3">
          If for some reason you've tried comparing objects or arrays in
          JavaScript, you probably went...
        </p>
        <p className="font-light text-xs text-secondary pb-2 mr-auto">08 04 22</p>
      </div>
    </div>
  </Link>
);

export default ArticleFragment;
