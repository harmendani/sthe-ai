import { loadEnvFile } from "node:process";
loadEnvFile();

const config = {
  PORT: Number(process.env.PORT) || 3001,
  ENV: process.env.ENV ?? "dev",
  AZURE_OPENAI_API_KEY: process.env.AZURE_OPENAI_API_KEY ?? "",
  AZURE_OPENAI_ENDPOINT: process.env.AZURE_OPENAI_ENDPOINT ?? "",
  AZURE_OPENAI_DEPLOYMENT_NAME: process.env.AZURE_OPENAI_DEPLOYMENT_NAME ?? "",
} as const;

export default config;

