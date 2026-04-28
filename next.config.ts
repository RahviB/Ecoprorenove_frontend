import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent the page from being framed by other origins (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Prevent MIME-type sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Strict referrer policy.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // No legacy XSS auditor (modern browsers ignore this; CSP is the answer).
  { key: "X-XSS-Protection", value: "0" },
  // Lock down powerful APIs we don't use.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Cross-origin protections.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // HSTS — only meaningful when served over HTTPS in production.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    // Tier 2 #8 — opts Next.js into React's <ViewTransition> on route changes.
    viewTransition: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // All images are served from /public so no remote patterns needed yet.
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/financement-cee", destination: "/prime-cee", permanent: true },
    ];
  },
};

export default nextConfig;
