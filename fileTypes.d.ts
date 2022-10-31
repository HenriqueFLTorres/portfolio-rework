declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.mdx' {
  import { MDXProps } from 'mdx/types';
  export default function MDXContent(props: MDXProps): JSX.Element;
}

declare module '*.css' {
  const value: any;
  export default value;
}

declare module '*.json' {
  const value: any;
  export default value;
}
