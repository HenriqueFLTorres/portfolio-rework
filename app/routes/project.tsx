import { Links, Meta, Outlet } from '@remix-run/react';
import { LanguageContext } from '~/hooks/LanguageContext';

import Background from '~/components/Shared/Background';
import Navbar from '~/components/Shared/Navbar';

export function links() {
  return [
    {
      rel: 'icon',
      type: 'svg',
      href: 'favicon.svg'
    },
  ];
}

export default function Project() {
  return (
    <div className='h-[1800px]'>
      <head>
        <Meta />
        <Links />
      </head>
      <LanguageContext>
        <Background />
        <Navbar />
        <Outlet />
      </LanguageContext>
    </div>
  );
}
