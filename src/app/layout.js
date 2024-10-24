import "./globals.css";

export const metadata = {
  title: "Fly",
  description: "Prática pessoal, FLY agência de paraquedismo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
