import { GoogleGenAI } from "@google/genai";
import {} from "dotenv/config.js";
import readlineSync from "readline-sync";

const ai = new GoogleGenAI({ apiKey: process.env.Gemini_Api_Key });

const History = [];

async function Chatting(userProblem) {
  History.push({
    role: "user",
    parts: [{ text: userProblem }],
  });
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    // contents: [
    //   {
    //     role: "user",
    //     parts: [{ text: "Whats the weather in Bhopal?" }],
    //   },
    // ],
    contents: History,
  });

  History.push({
    role: "model",
    parts: [{ text: response.text }],
  });

  console.log(response.text);
}

async function main() {
  const userProblem = readlineSync.question("Ask me anything--> ");
  await Chatting(userProblem);
  main();
}
await main();
