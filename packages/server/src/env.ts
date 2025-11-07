import { loadEnvFile } from "node:process";
loadEnvFile();

const config = {
  PORT: Number(process.env.PORT) || 3001,
  NODE_ENV: process.env.ENV ?? "dev",
} as const;

export default config;

