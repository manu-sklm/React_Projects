// // 📁 src/config/gemini.js

// const API_KEY = "AIzaSyA-SSlBo8CjdNhCVrgFJsKLun8V8t3H4rE"; // Replace with your actual Gemini API key

// const runChat = async () => {
//   const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY;

//   const requestBody = {
//     contents: [
//       {
//         parts: [{ text: "What is javascript" }]
//       }
//     ]
//   };

//   try {
//     const res = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(requestBody)
//     });

//     const data = await res.json();

//     const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

//     return generatedText || "No response from Gemini.";
//   } catch (err) {
//     console.error("Gemini API error:", err);
//     return "Something went wrong while contacting Gemini.";
//   }
// };

// export default runChat;



// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "AIzaSyDoCQIU7-dyX_fpUyXv1kUBhYqkFw5Qmes" });

// async function runChat(prompt) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-pro", // or "gemini-1.5-pro"
//       contents: [{ role: "user", parts: [{ text: prompt }] }],
//     });

//     const text = await response.text(); // ✅ FIXED
//     console.log(text);
//   } catch (err) {
//     console.error("Gemini API Error:", err);
    
//   }
// }



// export default runChat;















import { GoogleGenerativeAI } from "@google/generative-ai";
// Replace with your actual API keyimport { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
 async function runChat(prompt) {
  const modelId = "models/gemini-2.0-flash";
  const model = genAI.getGenerativeModel({ model: modelId });

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    const res=await result.response.text();
    console.log(res);
    return res;
  } catch (err) {
    console.error("Gemini API Error:", err);
    return `Error using ${modelId}: ${err.message}`;
  }
}






export default runChat;



