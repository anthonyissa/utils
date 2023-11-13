const { models } = require("./types.js");
const { openai } = require("./index.js");

/**
 * Send a prompt to the OpenAI API and return the result.
 * @param {string} model - The model to use for the API.
 * @param {string} prompt - The prompt to send to the API.
 * @param {number} max_tokens - The maximum number of tokens to generate.
 * @param {number} temperature - The sampling temperature.
 * @param {Object} args - The arguments to pass to the API.
 */
const completion = async ({ model, prompt, ...args }) => {
  const completion = await openai.chat.completions.create({
    messages: args.messages || [{ role: "user", content: prompt }],
    model: model,
    ...args,
  });
  return completion.choices[0].message.content;
};

module.exports = { completion };
