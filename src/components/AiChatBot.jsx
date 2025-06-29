import React, { useState,useEffect, useRef } from "react";
import axios from "axios";


var OPENROUTER_API_KEY = ""; // 

// Use a currently available free model from https://openrouter.ai/models
const MODEL = "deepseek/deepseek-r1-0528:free"; // Or another free model ID if you prefer


const siteContext = `
Welcome! I'm here to introduce you to Chaudhry Hanzala Ashraf — a passionate full-stack developer who crafts digital experiences that truly stand out.
Hanzala excels in React, Next.js, Node.js, and Python, and thrives on building smart, user-focused solutions.
From designing an interactive AI chatbot (like me!) to launching robust e-commerce platforms and custom blog engines, Hanzala’s portfolio is all about innovation and impact.
He’s always exploring the latest in AI and web tech, and believes in the power of teamwork, creativity, and lifelong learning.
If you’re looking for someone who blends technical mastery with a creative spark, you’re in the right place!
Chaudhry Hanzala Ashraf is a full-stack developer skilled in React, Next.js, Node.js, and Python.

He has built projects such as Portfolio AI Chatbot, E-Commerce Platform, and Blog Engine.
He is interested in AI, web development, and building helpful digital products for clients.
Software Engineer with over 2 years of experience delivering innovative technology solutions and scalable services in full-stack development. Demonstrated expertise in industry-defining projects using MERN and Vue.js, with a strong foundation in object-oriented design, algorithm design, and data structures. Adept at cross-disciplinary collaboration, problem solving, and optimising distributed systems for high performance. Committed to customer obsession, equal opportunities, and contributing to a diverse workforce in agile environments.
Experience:
Full Stack Web Developer | Innovation.Tech
06/2022 – 06/2023
- Developed responsive web applications using React, Node.js, and Express.
- Enhanced scalable services and boosted user engagement by 20% through UI/UX improvements.
- Integrated distributed systems and optimised backend with MongoDB and MySQL.
- Applied object-oriented design and data structures to solve technical challenges in an agile environment.
Associate Software Engineer | Programmers Force
07/2023 – 11/2023
- Built web pages with Vue.js and Vuetify, modernising product interfaces.
- Streamlined responsiveness and device compatibility.
- Enhanced distributed computing performance and privacy.
- Improved multi-tiered systems and storage solutions.
Business Assistant | DHAAuto Solutions
01/2024 – 05/2025
- Managed online booking systems and revamped website design.
- Proposed digital growth strategies focused on customer retention.
- Refactored front-end code using JavaScript and React.
- Supported equal opportunities through inclusive digital solutions.

Projects:
Pitstop Glasgow Website – pitstopglasgow.com
Developed and deployed a modern, user-friendly website for an automotive service center. Focused on responsive UI and seamless online booking.
Jury Selection System
Built a system for random jury selection from a qualified pool, with role-based actions (admin, lawyer, juror) and secure JWT authentication/authorization.
Eco Agriculture Mobile & Web Application
Designed and implemented a cross-platform application for farmers and agri-businesses, enabling digital marketplace and sustainability features.

Education:
MSc Advanced Computer Science | University of Strathclyde
2024 – 2025
Focus: Mobile App Development, Machine Learning, Distributed Systems, Project Management. Dissertation: Jury Selection System using the MERN Stack.
BS Software Engineering | University of Management and Technology
2019 – 2023
CGPA: 3.77, Rector's Award. Final project: Agri E-Commerce App on Android.
A-Levels | Beaconhouse School System
2016 – 2018
Physics, Mathematics, Computer Science.
O-Levels | Beaconhouse School System
2013 – 2016
Pre-Engineering subjects.

Skills:
Frontend Web Development,
Backend Web Development,
Full Stack Development,
C++,
JavaScript,
React,
Node.js,
Vue.js,
MongoDB,
REST APIs,
MySQL,
Express,
OOP,
Data Structures

Contact:
Email: chaudhryhanzalaashraf@gmail.com
Phone: +447427065183
LinkedIn: chaudhry-hanzala-goraya-94b6b3209

`;

const fewShotExamples = `
Q: What sets Hanzala apart as a developer?
A: Hanzala brings ideas to life with a mix of technical skill and creative flair, always keeping the user’s experience at the heart of every project.

Q: Which technologies is Hanzala passionate about?
A: Hanzala loves working with React, Next.js, Node.js, and Python, and is always eager to experiment with AI to push the boundaries of what’s possible on the web.

Q: Tell me about a project Hanzala is proud of.
A: One highlight is this very AI chatbot, designed to make exploring his portfolio interactive and fun. He’s also built feature-rich e-commerce platforms and sleek personal blogs.

Q: How can I connect with Hanzala or discuss a project?
A: Simply head over to the contact section or connect on LinkedIn! Hanzala is always open to collaboration and new opportunities.

Q: What programming languages does Hanzala use?
A: Hanzala primarily uses JavaScript, Python, and TypeScript.

Q: What is Hanzala's most recent project?
A: Hanzala's most recent project is an AI-powered chatbot for his portfolio website.

Q: Does Hanzala work with AI technologies?
A: Yes, Hanzala has experience integrating AI models into web apps.
`;

export default function AiChatBot() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([
    { from: "bot", text: "Hi! I'm Hanzala's AI assistant. Ask me anything about him." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesRef = useRef(null);
useEffect(()=>{
  async function fetchSecret() {
  const res = await axios.get("https://privatekey-xfvz.onrender.com/api/get-secret");
  console.log(res.secret);
  return res.secret; 
}
OPENROUTER_API_KEY=fetchSecret().toString();
})

  async function sendToOpenRouter(chatHistory) {
    const messages = [
      {
        role: "system",
        content:
          "You are a helpful portfolio assistant for Chaudhry Hanzala Ashraf. ONLY answer questions based on this info:\n"
          + siteContext +
          "\nHere are some example questions and answers:\n" + fewShotExamples +
          "\nIf you don't know the answer, politely say so."
      },
      ...chatHistory.map(msg => ({
        role: msg.from === "user" ? "user" : "assistant",
        content: msg.text
      }))
    ];

    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        // Optionally: "HTTP-Referer": "https://your-portfolio-domain.com"
      },
      body: JSON.stringify({
        model: MODEL,
        messages,
        max_tokens: 500
      })
    });
    const data = await res.json();
    if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
      return data.choices[0].message.content.trim();
    } else if (data.error && data.error.message) {
      throw new Error(data.error.message);
    } else {
      throw new Error("Unknown error from OpenRouter");
    }
  }

  async function handleSend() {
    if (!input.trim()) return;
    const userMsg = input;
    setHistory(h => [...h, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const botMsg = await sendToOpenRouter([...history, { from: "user", text: userMsg }]);
      setHistory(h => [...h, { from: "bot", text: botMsg }]);
    } catch (e) {
      setHistory(h => [
        ...h,
        { from: "bot", text: "Sorry, I'm having trouble answering right now.\n" + (e.message || "") }
      ]);
    }
    setLoading(false);
    setTimeout(() => {
      if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }, 100);
  }

  function handleKey(e) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <>
      <div
        className="ai-bot-icon"
        title="Chat with Hanzala's AI assistant"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="38" height="38" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="21" fill="#1c6ed5" stroke="#38f9ff" strokeWidth="2"/>
          <ellipse cx="22" cy="16" rx="11" ry="8" fill="#fff"/>
          <circle cx="18" cy="16" r="2.2" fill="#1c6ed5"/>
          <circle cx="26" cy="16" r="2.2" fill="#1c6ed5"/>
          <rect x="16" y="23" width="12" height="3.8" rx="1.7" fill="#eaf6fb"/>
        </svg>
      </div>
      {open && (
        <div className="ai-chatbot-window">
          <div className="ai-chatbot-header">
            <span>Ask about Hanzala</span>
            <button className="ai-chatbot-close" onClick={() => setOpen(false)}>×</button>
          </div>
          <div className="ai-chatbot-body" ref={messagesRef}>
            {history.map((msg, idx) => (
              <div key={idx} className={`ai-chatbot-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="ai-chatbot-msg bot">Thinking...</div>
            )}
          </div>
          <div className="ai-chatbot-input-row">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              disabled={loading}
              placeholder="Type your question..."
              autoFocus
            />
            <button onClick={handleSend} disabled={loading || !input.trim()}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
