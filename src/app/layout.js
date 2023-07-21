import '/src/styles/dropdown.scss';
import '/src/styles/globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
