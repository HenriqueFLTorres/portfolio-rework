const SASS = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 200 200'
    style={{
      enableBackground: 'new 0 0 200 200'
    }}
    xmlSpace='preserve'
    {...props}
  >
    <path
      d='M168.6 110.6c-6.6 0-12.4 1.6-17.2 4-1.8-3.5-3.6-6.6-3.9-8.9-.3-2.7-.7-4.3-.3-7.5.4-3.2 2.3-7.7 2.3-8.1 0-.3-.4-2-4.2-2s-7.1.7-7.5 1.7-1.1 3.3-1.6 5.7c-.7 3.5-7.6 15.8-11.6 22.3-1.3-2.5-2.4-4.8-2.6-6.5-.3-2.7-.7-4.3-.3-7.5.4-3.2 2.3-7.7 2.3-8.1 0-.3-.4-2-4.2-2-3.8 0-7.1.7-7.5 1.7-.4 1-.8 3.4-1.6 5.7-.8 2.3-10.1 22.9-12.5 28.3-1.2 2.7-2.3 4.9-3.1 6.4-.8 1.5 0 .1-.1.3-.7 1.3-1 2-1 2-.5.9-1.1 1.8-1.3 1.8-.2 0-.6-2.5.1-5.9 1.4-7.2 4.7-18.3 4.7-18.7 0-.2.6-2.2-2.2-3.2-2.7-1-3.7.7-3.9.7-.2 0-.4.6-.4.6s3-12.6-5.8-12.6c-5.5 0-13.1 6-16.8 11.4-2.4 1.3-7.4 4-12.8 7-2 1.1-4.2 2.3-6.2 3.4l-.4-.4c-10.6-11.3-30.2-19.3-29.4-34.6.3-5.5 2.2-20.1 37.7-37.8 29.1-14.5 52.3-10.5 56.4-1.7 5.8 12.6-12.4 36.1-42.6 39.5-11.5 1.3-17.6-3.2-19.1-4.8-1.6-1.7-1.8-1.8-2.4-1.5-1 .5-.4 2.1 0 3 .9 2.3 4.6 6.5 10.9 8.6 5.5 1.8 19 2.8 35.4-3.5 18.3-7.1 32.6-26.8 28.4-43.2C119.7 29.5 92 24 65.7 33.3 50.1 38.9 33.2 47.6 21 58.9 6.5 72.5 4.2 84.3 5.2 89.2c3.4 17.5 27.5 28.9 37.1 37.3-.5.3-.9.5-1.3.7-4.8 2.4-23.2 12-27.8 22.2-5.2 11.5.8 19.7 4.8 20.8 12.4 3.5 25.1-2.7 32-13 6.8-10.2 6-23.5 2.9-29.5l-.1-.2 3.8-2.2c2.4-1.4 4.9-2.8 7-3.9-1.2 3.2-2 7.1-2.5 12.6-.5 6.5 2.2 15 5.7 18.3 1.6 1.4 3.4 1.5 4.6 1.5 4.1 0 5.9-3.4 8-7.4 2.5-4.9 4.8-10.7 4.8-10.7s-2.8 15.5 4.8 15.5c2.8 0 5.6-3.6 6.8-5.5 0 0 .1-.1.2-.4.2-.2.3-.5.4-.7v-.1c1.1-1.9 3.6-6.3 7.3-13.7 4.8-9.4 9.4-21.2 9.4-21.2s.4 2.9 1.8 7.6c.8 2.8 2.6 5.9 4 8.9-1.1 1.6-1.8 2.4-1.8 2.4-.9 1.2-1.9 2.4-2.9 3.7-3.8 4.5-8.3 9.7-8.9 11.2-.7 1.7-.6 3 .8 4.1 1 .7 2.8.9 4.7.7 3.4-.2 5.8-1.1 7-1.6 1.9-.7 4-1.7 6-3.2 3.7-2.7 6-6.6 5.8-11.8-.1-2.9-1-5.7-2.2-8.4.3-.5.7-1 1-1.5 5.9-8.6 10.4-18 10.4-18s.4 2.9 1.8 7.6c.7 2.4 2.1 5 3.4 7.6-5.5 4.5-8.9 9.7-10.1 13.1-2.2 6.3-.5 9.2 2.7 9.8 1.4.3 3.5-.4 5.1-1 1.9-.6 4.3-1.7 6.4-3.3 3.7-2.7 7.3-6.6 7.1-11.7-.1-2.4-.7-4.7-1.6-6.9 4.7-1.9 10.7-3 18.4-2.1 16.5 1.9 19.8 12.2 19.2 16.6-.6 4.3-4.1 6.7-5.2 7.4-1.2.7-1.5 1-1.4 1.5.1.8.7.7 1.7.6 1.4-.2 8.7-3.5 9-11.5.1-9.8-9.6-20.9-26.7-20.8zM41.2 153.5c-5.5 6-13.1 8.2-16.4 6.3-3.5-2-2.2-10.8 4.6-17.2 4.1-3.9 9.4-7.4 12.9-9.6.8-.5 2-1.2 3.4-2l.4-.2c.3-.1.6-.3.9-.5 2.3 9-.1 16.9-5.8 23.2zm39.9-27.1c-1.9 4.6-5.9 16.6-8.3 15.9-2.1-.6-3.3-9.6-.4-18.5 1.5-4.5 4.6-9.8 6.5-11.9 3-3.3 6.3-4.5 7.1-3.1.9 1.8-3.7 14.7-4.9 17.6zm32.9 15.7c-.8.4-1.6.7-1.9.5-.3-.1.3-.7.3-.7s4.1-4.4 5.8-6.5c.9-1.2 2-2.6 3.2-4.1v.4c0 5.4-5.1 9-7.4 10.4zm25.4-5.8c-.6-.4-.5-1.8 1.5-6.1.8-1.7 2.6-4.6 5.6-7.3.4 1.1.6 2.2.6 3.2-.1 6.7-4.8 9.2-7.7 10.2z'
      style={{
        fill: '#e1e1e1'
      }}
    />
  </svg>
);

export default SASS;
