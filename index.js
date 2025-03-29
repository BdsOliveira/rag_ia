import ollama from "ollama";

const response = await ollama.generate({
  // model: "llama3.1:8b",
  // model: "qwen2.5-coder:14b",
  // model: "gemma3:27b",
  model: "meudev",
  prompt: "Quem é você?",
  stream: true,
});

for await (const part of response) {
  process.stdout.write(part.response);
}
