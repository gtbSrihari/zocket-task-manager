import './globals.css';

export const metadata = {
  title: 'Zocket Task Manager',
  description: 'AI-Powered Task Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}