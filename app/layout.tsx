import './ui/global.css';
import { montserrat } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        {/*<footer>Hecho con amor por la gente de Vercel</footer>*/}
      </body>
      {/*No esta cargando directamente la fuente desde google fonts
      Está descargando, optimizar y servirla desde nuestro servidor*/}
    </html>
  );
}
