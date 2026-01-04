const path = require("path");

module.exports = {
  style: {
    postcssOptions: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
};
