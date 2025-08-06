import Header from "@/Components/Header/Header";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import ThemeToggle from "@/Components/ToggleTheme";
import { Toaster } from "sonner";

export const metadata = {
  title: "Md Abdus Sabur | Web Scraping Expert – MERN & Django Developer",
  description:
    "Md Abdus Sabur - Full-Stack Web Developer | Expert in JavaScript (MERN Stack) & Python (Django). Specializing in front-end and back-end development with React.js, Next.js, Redux, Django, MongoDB, MySQL, PostgreSQL, SQLite, Selenium, REST APIs, and Django REST Framework. Currently pursuing a BSc in Mathematics and a diploma in Computer Science and Technology. Explore my portfolio for dynamic and robust web solutions.",
};

export default function RootLayout({
  children,
  home,
  about,
  skills,
  projects,
  education,
  contact,
  modal,
}) {
  const setInitialTheme = `
(function() {
  try {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else if (theme === 'dark') {
      document.documentElement.classList.remove('light');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  } catch {}
})();
  `;
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <meta
          name="google-site-verification"
          content="KiBk1Z83sel9tb5uLRVxC8AQoL-Y5eTn7QmJ8ZU5tIM"
        />
        <meta name="generator" content="Next.js" />
        <meta name="author" content="Md Abdus Sabur" />
        <meta
          property="og:title"
          content="Md Abdus Sabur – Web Scraping Expert – MERN & Django Developer"
        />
        <meta
          property="og:description"
          content="Md Abdus Sabur - Full-Stack Web Developer | Expert in JavaScript (MERN Stack) & Python (Django). Specializing in front-end and back-end development with React.js, Next.js, Redux, Django, MongoDB, MySQL, PostgreSQL, SQLite, Selenium, REST APIs, and Django REST Framework. Currently pursuing a BSc in Mathematics and a diploma in Computer Science and Technology. Explore my portfolio for dynamic and robust web solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Md Abdus Sabur" />
        <meta
          property="og:image"
          content="https://absavur.vercel.app/Md_Abdus_Sabur.jpg"
        />
        <meta
          name="twitter:image"
          content="https://absavur.vercel.app/Md_Abdus_Sabur.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>
        <div className="design-bg">
          <Header />
          {children}
          <div className="main container">
            <ThemeToggle />
            <Toaster richColors position="top-right" />
            {modal}
            {home}
            {about}
            {skills}
            {projects}
            {education}
            {contact}
          </div>

          <Footer />
          <div
            style={{
              height: "70px",
              backgroundColor: "transpatrent",
            }}
          ></div>
        </div>
      </body>
    </html>
  );
}
