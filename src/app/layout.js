import "@/app/styles/globals.css"
import Head from "next/head";

export const metadata = {
  title: "Mary Boles | Developer Portfolio",
  description: "Portfolio showcasing my web development projects, skills, and experience in building modern applications. Built in Next.js and Tailwind CSS.",
  keywords: ["Web Developer"," Portfolio", "Next.js", "Tailwind CSS", "JavaScript", "React"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
