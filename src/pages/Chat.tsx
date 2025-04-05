import ChatWindow from "@/components/ChatWindow";

export default function Chat() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-6">
          <div className="bg-amber-800 text-white p-2 rounded-lg">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236L20 8v8l-8 4-8-4V8l8-3.764z" />
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          </div>
          <h1 className="ml-3 text-2xl font-serif font-bold text-amber-900">LegalAssist Consultation</h1>
        </div>
        
        <ChatWindow />
        
        <div className="mt-8 text-center text-xs text-stone-500">
          <p>LegalAssist provides general legal information based on Indian law. This is not a substitute for professional legal advice.</p>
        </div>
      </div>
    </div>
  );
}