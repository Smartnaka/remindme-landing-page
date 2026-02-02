
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hi! I'm your Remindme assistant. Any questions about the app or how to manage your FUTA schedule?" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...messages, { role: 'user', text: userMsg }].map(m => ({
          parts: [{ text: m.text }],
          role: m.role
        })),
        config: {
          systemInstruction: "You are a helpful, friendly university student assistant for the 'Remindme' app. Your tone is supportive and tech-savvy. You know that Remindme helps Nigerian students manage lecture schedules with smart notifications. Keep answers concise.",
        }
      });

      const aiText = response.text || "I'm having a bit of trouble connecting right now, but I'm here to help!";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm offline for a moment. Try again shortly!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-brand-light dark:bg-brand-dark rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform animate-float"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-dark-surface rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-light-border dark:border-dark-border flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="p-4 bg-brand-light dark:bg-brand-dark text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-bold">Remindme AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-70">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-brand-light text-white rounded-tr-none' 
                    : 'bg-light-surface dark:bg-dark-background text-light-textPrimary dark:text-dark-textPrimary border border-light-border dark:border-dark-border rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-light-surface dark:bg-dark-background p-3 rounded-2xl border border-light-border dark:border-dark-border flex gap-1">
                  <Loader2 className="w-4 h-4 animate-spin opacity-40" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-light-border dark:border-dark-border flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-light-surface dark:bg-dark-background px-4 py-2 rounded-xl text-sm border border-light-border dark:border-dark-border focus:outline-none focus:ring-2 focus:ring-brand-light"
            />
            <button 
              onClick={handleSend}
              className="p-2 bg-brand-light dark:bg-brand-dark rounded-xl text-white hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
