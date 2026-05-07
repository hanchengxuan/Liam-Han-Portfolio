/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'Liam-Han-Portfolio';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGitHubPages ? `/${repoName}` : undefined,
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
