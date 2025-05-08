import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  trailingSlash: true, // 정적 호스팅 시 권장
};

export default nextConfig;
