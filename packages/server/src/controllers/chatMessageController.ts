import { azureOpenAIService } from '../services/index.js';

const sendMessage = async (request: any, reply: any) => {
  const response = await azureOpenAIService.responses({
    instructions: "Traduza o texto fornecido de portugues para inglês informal",
    input: request.body.message,
    max_output_tokens: 100,
  }) as any;
  const result = response.output_text || "No response";
  return reply.code(200).send({ response: result });
}

export { sendMessage };

