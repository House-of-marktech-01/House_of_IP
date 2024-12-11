import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user message to the chat
    setMessages([...messages, { sender: "user", text: userInput }]);
    setUserInput("");

    try {
      // Send user message to OpenAI API directly
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "gpt-3.5-turbo", // or gpt-4
          messages: [{ role: "user", content: userInput }],
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        }
      );

      const botResponse = response.data.choices[0].message.content;

      // Add bot response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="chatbot container mx-auto p-4">
      <div className="chatbox bg-gray-100 rounded-lg shadow-lg p-4 h-[400px] overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-black"
            } p-2 mb-3 rounded-lg max-w-[80%] ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-box flex items-center gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 border border-gray-300 p-2 rounded-md"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
