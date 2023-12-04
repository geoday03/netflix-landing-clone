import { Inter } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const fonts = {
  body: `"Figtree", sans-serif`,
  heading: `"Figtree", serif`,
  inter: inter.style.fontFamily,
};
