import { GoogleGenAI } from "@google/genai";
import {} from "dotenv/config.js";

const ai = new GoogleGenAI({ apiKey: process.env.Gemini_Api_Key });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: "Hi, I am Maaz" }],
      },
    ],
  });
  console.log(response.text);
}

await main();
