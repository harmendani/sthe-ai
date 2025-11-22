import { DefaultAzureCredential, getBearerTokenProvider } from "@azure/identity";
import { OpenAI } from "openai";


const endpoint = process.env.AZURE_OPENAI_ENDPOINT;

const tokenProvider = getBearerTokenProvider(
  new DefaultAzureCredential(),
  'https://cognitiveservices.azure.com/.default');

const openAIClient = new OpenAI({
  baseURL: endpoint,
  apiKey: tokenProvider
});

export { openAIClient };







