export default function manifest() {
  return {
    name: "Portfolio of Md Abdus Sabur",
    short_name: "Md Abdus Sabur",
    description:
      "Md Abdus Sabur - Full-Stack Web Developer.",
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
        src: "1410x1410.png",
        sizes: "1410x1410",
        type: "image/png",
      },
      {
        src: "1410x1880.png",
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
