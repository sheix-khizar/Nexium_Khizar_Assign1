import './globals.css';
import ThemeProviderWrapper from './ThemeProviderWrapper';

export const metadata = {
  title: 'Quote Generator',
  description: 'Best website for Quote Generator',
  icons: {
    icon: '/logo.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
