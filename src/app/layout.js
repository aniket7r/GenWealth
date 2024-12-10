import "./globals.css";

export const metadata = {
  title: "GenWealth",
  description: "Your GenZ Finance Sensei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
