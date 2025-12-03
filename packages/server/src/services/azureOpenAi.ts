import { openAIClient } from '../lib/openAi.js';

/* 
 * This class is responsible to provide and maintain connection with OpenAI service 
*/

class AzureOpenAIService {
  private client: any;

  constructor(client: any) {
    this.client = client;
  }


  responses({ instructions, input, max_output_tokens }:
    { instructions: string; input: string; max_output_tokens: number; }) {
    return this.client.responses.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME!,
      instructions,
      input,
      max_output_tokens,
    }) as any;
  }
}

const azureOpenAIService = new AzureOpenAIService(openAIClient);

export { azureOpenAIService };







