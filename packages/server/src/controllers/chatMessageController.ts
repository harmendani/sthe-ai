import { openAIClient } from '../services/index.js';

const sendMessage = async (request: any, reply: any) => {
  const response = await openAIClient.responses.create({
    model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME!,
    instructions: "Traduza o texto fornecido de portugues para inglês informal",
    input: "Olá, como vai você mano?",
  });
  reply.send(response)
}

export default { sendMessage };

