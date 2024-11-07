/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // This specifies static HTML export, which is useful if deploying as a static site
    distDir: 'out',    // Change the output directory to 'out' (or '.next' if using a dynamic site)
  };

  export default nextConfig;
  