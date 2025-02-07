/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir : "out",
  // trailingSlash: true,
  skipTrailingSlashRedirect: true,
  devIndicators: {
    appIsrStatus: false
  }
};

export default nextConfig;
