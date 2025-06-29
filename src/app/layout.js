import "./globals.css";

export const metadata = {
  title: "Md Abdus Sabur | Web Scraping Expert – MERN & Django Developer",
  description:
    "Md Abdus Sabur - Full-Stack Web Developer | Expert in JavaScript (MERN Stack) & Python (Django). Specializing in front-end and back-end development with React.js, Next.js, Redux, Django, MongoDB, MySQL, PostgreSQL, SQLite, Selenium, REST APIs, and Django REST Framework. Currently pursuing a BSc in Mathematics and a diploma in Computer Science and Technology. Explore my portfolio for dynamic and robust web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      <body>{children}</body>
    </html>
  );
}
