const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

async function test() {
  try {
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    });
    const result = await model.generateContent("Hello");
    const response = await result.response;
    console.log("Success (1.5-flash):", response.text());
  } catch (error) {
    console.error("Gemini 1.5-flash Error:", error.message);
  }
}

test();
