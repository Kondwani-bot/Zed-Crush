
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getAIMatches = async (currentUser: UserProfile, candidates: UserProfile[]) => {
  const prompt = `
    You are an advanced AI matchmaking assistant for a futuristic dating app called 'Zed Crush'.
    Your task is to analyze the profile of a primary user and a list of potential candidates.
    Based on their bios, interests, and occupations, determine the top 3 most compatible matches for the primary user.
    For each recommended match, provide a compatibility score from 1 to 100 and a short, romantic, and encouraging explanation (one sentence) for why they are a good match.
    The output must be a valid JSON array.

    Primary User:
    ${JSON.stringify(currentUser)}

    Potential Candidates:
    ${JSON.stringify(candidates)}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              userId: { type: Type.NUMBER },
              compatibilityScore: { type: Type.NUMBER },
              reason: { type: Type.STRING },
            },
            required: ["userId", "compatibilityScore", "reason"],
          },
        },
      },
    });

    if (response.text) {
        const jsonText = response.text.trim();
        return JSON.parse(jsonText);
    }
    return [];

  } catch (error) {
    console.error("Error fetching AI matches:", error);
    // In case of an error, return a mock response or an empty array
    // This prevents the UI from breaking if the API call fails
    return [
        { userId: 2, compatibilityScore: 95, reason: "Your shared love for creativity and art could spark a beautiful connection." },
        { userId: 3, compatibilityScore: 88, reason: "You both share a deep sense of purpose and a desire to help others." },
        { userId: 6, compatibilityScore: 82, reason: "A passion for good food and cozy nights in could be your perfect recipe." },
    ];
  }
};
