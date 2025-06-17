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
        sizes: "2374x2374 any",
        type: "image/x-icon",
      },
      {
        src: "Md_Abdus_Sabur.png",
        sizes: "1410x1410",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ],
    id: "md-abdus-sabur",
    launch_handler: {
      client_mode: "navigate-new",
    },
    orientation: "portrait",
    screenshots: [
      {
        src: "ss1.png",
        sizes: "1917x906",
        type: "image/png",
        label: "Main Screen",
      },
      {
        src: "ss2.png",
        sizes: "1916x910",
        type: "image/png",
        form_factor: "wide"
      }
    ],
  };
}
