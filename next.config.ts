import type { NextConfig } from "next";

// CSP — allows Google Tag Manager / Analytics, Meta Pixel, Google Ads
// (loaded only after consent). JSON-LD requires inline <script>; next/font +
// Next runtime emit inline <style>. 'unsafe-inline' is the pragmatic
// compromise without a nonce middleware.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.googletagmanager.com https://www.googletagmanager.com https://connect.facebook.net https://www.googleadservices.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.google.com https://www.google.fr https://www.facebook.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net",
  "font-src 'self' data:",
  "connect-src 'self' https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://stats.g.doubleclick.net https://www.facebook.com https://connect.facebook.net",
  "frame-src https://www.googletagmanager.com https://td.doubleclick.net",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-XSS-Protection", value: "0" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
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
