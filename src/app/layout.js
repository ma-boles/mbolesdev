import "@/app/styles/globals.css"

export const metadata = {
  title: "Mary Boles | Web Developer Portfolio",
  description: "Portfolio showcasing my web development projects, skills, and experience in building modern applications. Built in Next.js and Tailwind CSS.",
  keywords: ["Web Developer"," Portfolio", "Next.js", "Tailwind CSS", "JavaScript", "React"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
