/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useRef, useEffect, JSX } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatWindow(): JSX.Element {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Welcome to LegalAssist. How may I help you with legal information today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (): Promise<void> => {
    if (waiting || !input.trim()) return;

    const userMessage = input.trim();
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
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

  const clearChat = (): void => {
    if (waiting) return;
    setMessages([
      {
        role: "bot",
        content:
          "Welcome to LegalAssist. How may I help you with legal information today?",
      },
    ]);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-amber-200 overflow-hidden">
      <div className="bg-amber-800 text-white px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2C5.59 2 2 5.59 2 10s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-5h2v2H9v-2zm0-6h2v4H9V5z" />
          </svg>
          <span className="font-medium">Legal Information Assistant</span>
        </div>
        <button
          onClick={clearChat}
          className="text-amber-200 hover:text-white transition-colors text-sm flex items-center"
          disabled={waiting}
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear conversation
        </button>
      </div>

      {/* Message content renderer */}
      <div className="h-96 overflow-y-auto p-4 bg-amber-50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-4 ${
              msg.role === "user" ? "flex justify-end" : "flex justify-start"
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
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="ml-2 text-xs font-medium text-amber-800">
                    LegalAssist
                  </span>
                </div>
              )}

              <div className="whitespace-pre-wrap markdown-content">
                {msg.role === "bot" ? (
                  <div className="prose prose-amber max-w-none">
                    <div className="prose-p:my-1 prose-li:my-0.5 prose-ul:my-1 prose-ol:my-1">
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => (
                            <p className="my-1" {...props} />
                          ),
                          ul: ({ node, ...props }) => (
                            <ul className="list-disc ml-5 my-1" {...props} />
                          ),
                          ol: ({ node, ...props }) => (
                            <ol className="list-decimal ml-5 my-1" {...props} />
                          ),
                          li: ({ node, ...props }) => (
                            <li className="my-0.5" {...props} />
                          ),
                          // Keep others unchanged...
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ) : (
                  msg.content
                )}
              </div>

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
          >
            {waiting ? (
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            )}
          </button>
        </div>
        <div className="mt-2 text-xs text-stone-500 flex items-center">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            Ask specific questions about Indian laws and regulations for the
            most accurate information
          </span>
        </div>
      </div>
    </div>
  );
}
