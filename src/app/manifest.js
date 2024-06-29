export default function manifest() {
  return {
    name: "Portfolio of Md Abdus Sabur",
    short_name: "Md Abdus Sabur",
    description:
      "Md Abdus Sabur - Full-Stack Web Developer | Expert in JavaScript (MERN Stack) & Python (Django). Specializing in front-end and back-end development with React.js, Next.js, Redux, Django, MongoDB, MySQL, PostgreSQL, SQLite, Selenium, REST APIs, and Django REST Framework. Explore my portfolio for dynamic and robust web solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "meSquare.png",
        sizes: "1410x1410",
        type: "image/png",
      },
      {
        src: "me.png",
        sizes: "1410x1880",
        type: "image/png",
      },
    ],
    id: "md-abdus-sabur",
    launch_handler: {
      client_mode: "navigate-new",
    },
    orientation: "portrait",
    screenshots: [
      {
        src: "ss1.png",
        sizes: "1258x888",
        type: "image/png",
        label: "Main Screen",
      },
      {
        src: "ss2.png",
        sizes: "1261x889",
        type: "image/png",
        form_factor: "wide"
      }
    ],
  };
}
