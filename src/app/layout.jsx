import '../index.css';
import AppWrapper from './AppWrapper';

export const metadata = {
  title: 'LDH Portfolio',
  description: 'Portfolio of LDH',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <AppWrapper>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
