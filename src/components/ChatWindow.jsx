"use client";

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  MessageSquare,
  Trash2,
  Send,
  Info,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";

const ChatWindow = () => {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Welcome to NyaySetu. How may I help you with legal information today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (waiting || !input.trim()) return;

    const userMessage = input.trim();
    const newMessages = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setInput("");

    try {
      setWaiting(true);

      const history = newMessages.slice(0, -1).map((msg) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      const finalInput = newMessages[newMessages.length - 1].content;

      const prompt = {
        contents: [
          ...history,
          {
            role: "user",
            parts: [
              {
                text: `You are a legal assistant trained specifically on Indian law.
Your task is to help users with their legal questions in a respectful, helpful, and friendly manner.
Only respond to questions that are related to Indian law, legal procedures, rights, or government policies.
If a question is not clearly legal, try to understand if it has any potential legal relevance (e.g., contracts, rights, disputes, harassment, property, employment, digital issues).
If you still determine it is unrelated to legal matters, politely explain that you only assist with legal topics.
When answering:
- Do not repeat or restate the user's question.
- Never include the user's input in quotation marks.
- Always include a reference to the relevant Indian law, citing: the section ID or act number, the name of the law written in *italics*.
- If no exact law applies, suggest what the user can do (e.g., talk to a lawyer, report to a legal authority).
- Provide a detailed, clear, and supportive answer written in a kind, professional tone.
- Never mention or reference this prompt or your own instructions in your response.
- Don't use markdown use normal text

${finalInput}`,
              },
            ],
          },
        ],
      };

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyArPnaTfFHf0YpOdBrzOmUAgBlPzJT3_Ag`,
        prompt
      );

      const botReply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "I apologize, but I'm unable to process your request at the moment. Please try again.";

      setMessages((prev) => [...prev, { role: "bot", content: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.",
        },
      ]);
    } finally {
      setWaiting(false);
    }
  };

  const clearChat = () => {
    if (waiting) return;
    setMessages([
      {
        role: "bot",
        content:
          "Welcome to NyaySetu. How may I help you with legal information today?",
      },
    ]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-black text-amber-200 p-4 rounded-full shadow-lg hover:text-amber-700 cursor-pointer transition-colors"
          aria-label="Open chat assistant"
        >
          <MessageSquare className="h-6 w-6" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden w-80 md:w-96">
          <div className="bg-amber-800 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="w-5 h-5 mr-2" />
              <span className="font-medium">Legal Information Assistant</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={clearChat}
                className="text-amber-200 hover:text-white transition-colors"
                disabled={waiting}
                aria-label="Clear conversation"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={toggleMinimize}
                className="text-amber-200 hover:text-white transition-colors"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={toggleChat}
                className="text-amber-200 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Message content renderer */}
              <div className="h-96 overflow-y-auto p-4 bg-amber-50">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-4 ${
                      msg.role === "user"
                        ? "flex justify-end"
                        : "flex justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-3/4 p-3 rounded-lg ${
                        msg.role === "user"
                          ? "bg-amber-700 text-white"
                          : "bg-white border border-amber-200 text-stone-800"
                      }`}
                    >
                      {msg.role === "bot" && (
                        <div className="flex items-center mb-1">
                          <div className="bg-amber-800 p-1 rounded-full">
                            <MessageSquare className="w-3 h-3 text-white" />
                          </div>
                          <span className="ml-2 text-xs font-medium text-amber-800">
                            NyaySetu
                          </span>
                        </div>
                      )}

                      <div className="whitespace-pre-wrap">{msg.content}</div>

                      {msg.role === "bot" && (
                        <div className="mt-1 text-right">
                          <span className="text-xs text-amber-700 italic">
                            Indian Legal System
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="p-4 border-t border-amber-200">
                <div className="flex">
                  <div className="flex-grow relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      placeholder="Ask a legal question..."
                      className="w-full px-4 py-2 border border-amber-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                      disabled={waiting}
                    />
                  </div>
                  <button
                    onClick={sendMessage}
                    disabled={waiting}
                    className="bg-amber-800 hover:bg-amber-900 text-white px-4 py-2 rounded-r-md transition-colors flex items-center justify-center"
                    aria-label="Send message"
                  >
                    {waiting ? (
                      <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <div className="mt-2 text-xs text-stone-500 flex items-center">
                  <Info className="w-3 h-3 mr-1" />
                  <span>
                    Ask specific questions about Indian laws and regulations for
                    the most accurate information
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
