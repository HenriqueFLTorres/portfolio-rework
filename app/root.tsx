import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';
import styles from './styles/app.css';

export function links() {
  return [
    {
      rel: 'icon',
      type: 'svg',
      href: 'favicon.svg'
    },
    { rel: 'icon', href: '/favicon.svg' },
    { rel: 'stylesheet', href: styles }
  ];
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Henrique Torres',
  viewport: 'width=device-width,initial-scale=1'
});

export default function App() {
  return (
    <html lang='en' className='font-OpenSans scroll-smooth overflow-x-hidden'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
