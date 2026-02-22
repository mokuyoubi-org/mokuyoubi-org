import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";

const config = {
  extensions: [".svelte", ".md"],
  preprocess: [mdsvex({ extensions: [".md"] })],
  kit: {
    adapter: adapter(),
  },
};

export default config;
