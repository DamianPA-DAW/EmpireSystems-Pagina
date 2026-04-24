import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // project root
  build: {
    outDir: "template",
    rollupOptions: {
      input: "template/index.html",
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/scss/style.scss";
          }
          return "assets/css/style.css";
        },
      },
    },
  },
  server: {
    port: 3000,
    open: "/template/index.html",
  },
});