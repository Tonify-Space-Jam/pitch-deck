import mdx from "@next/mdx";

const isGithubPages = process.env.IS_PAGES === "true";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isGithubPages ? "/pitch-deck" : "",
  assetPrefix: isGithubPages ? "/pitch-deck/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  output: 'export',
};

export default withMDX(nextConfig);
