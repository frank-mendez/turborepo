import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app Login Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
