export default function manifest() {
  return {
    name: "Md Abdus Sabur",
    short_name: "Abdus Sabur",
    description:
      "Portfolio Website of Md Abdus Sabur.",
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
  };
}
