module.exports = {
  siteUrl: "https://absaur.vercel.app",
  generateRobotsTxt: true, // Enable generating robots.txt
  sitemapBaseFileName: "sitemap-absabur", // Change the base file name of the sitemap
  transform: async (config, path) => {
    // Exclude specific URLs
    if (path === "/manifest.webmanifest") {
      return null; // Returning null will exclude this URL from the sitemap
    }

    // Default transform
    return {
      loc: path, // Use the default location
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/manifest.webmanifest',], // Add directories you want to disallow
      },
    ],
    additionalSitemaps: [
      "https://absaur.vercel.app/sitemap-absabur.xml", // Update the URL to reflect the new sitemap name
    ],
  },
  // Additional options can be added here
};
