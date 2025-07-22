import './globals.css';

export const metadata = {
  title: "The Eudaimonic Garden",
  description: "A soft place for your soul to land.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-parchment text-ink font-body">
        {children}
      </body>
    </html>
  );
}
