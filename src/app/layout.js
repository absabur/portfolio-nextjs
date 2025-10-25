import Header from "@/Components/Header/Header";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";
import ThemeToggle from "@/Components/ToggleTheme";
import { Toaster } from "sonner";
import ProtectedButton from "@/Components/ProtectedButton";
import Link from "next/link";
import { FaLock } from "react-icons/fa6";
import { AuthProvider } from "@/Components/AuthContextProvider";

export const metadata = {
  title: "Md Abdus Sabur — Full Stack MERN Stack Developer in Bangladesh",
  description:
    "I’m Abdus Sabur, a professional Full Stack Developer and MERN Stack Developer from Bangladesh, based in Dhaka from Bogura (Bogra). I specialize in building high-performance web applications using MongoDB, Express.js, React.js, and Node.js. As a React Developer and Next.js Developer, I focus on delivering fast, scalable, and SEO-friendly solutions with clean UI and smooth user experience. If you are looking for a dedicated Full Stack Developer in Bogura or anywhere in Bangladesh, I’m here to help bring your digital ideas to life.",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
  home,
  about,
  skills,
  projects,
  education,
  contact,
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
          content="Md Abdus Sabur — Full Stack MERN Stack Developer in Bangladesh"
        />
        <meta
          property="og:description"
          content="Md Abdus Sabur - Full-Stack Web Application Developer | Expert in JavaScript (MERN Stack) & Next.js. Specializing in front-end and back-end development with React.js, Next.js, Redux, MongoDB, MySQL, PostgreSQL, SQLite, and REST APIs. Currently pursuing a BSc in Mathematics and a diploma in Computer Science and Technology. Explore my portfolio for dynamic and robust web solutions."
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
        <AuthProvider>
          <div className="design-bg">
            <ProtectedButton>
              <Link
                style={{
                  position: "absolute",
                  top: "5px",
                  left: "5px",
                  fontSize: "20px",
                  color: "var(--color5)",
                }}
                href={`/admin`}
              >
                <FaLock />
              </Link>
            </ProtectedButton>
            <Header />
            {children}
            <div className="main container">
              <ThemeToggle />
              <Toaster richColors position="top-right" />
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
        </AuthProvider>
      </body>
    </html>
  );
}
