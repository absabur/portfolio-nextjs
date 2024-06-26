import "./globals.css";

export const metadata = {
  title: "Md Abdus Sabur",
  description: "Md Abdus Sabur - Full-Stack Web Developer | Expert in JavaScript (MERN Stack) & Python (Django). Specializing in front-end and back-end development with React.js, Next.js, Redux, Django, MongoDB, MySQL, PostgreSQL, SQLite, Selenium, REST APIs, and Django REST Framework. Currently pursuing a BSc in Mathematics and a diploma in Computer Science and Technology. Explore my portfolio for dynamic and robust web solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
