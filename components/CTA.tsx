
import React, { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setEmail('');
      }, 1500);
    }
  };

  return (
    <section id="cta" className="py-24 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-light dark:bg-brand-dark rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(52,199,89,0.3)]">
          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Stay on top of your lectures.</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 font-medium leading-relaxed">
              Join 500+ students waiting for the smartest way to manage their university schedule.
            </p>
            
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 flex flex-col items-center animate-slide-in">
                <CheckCircle2 className="w-12 h-12 mb-4 text-white" />
                <p className="text-2xl font-bold">You're on the list! 🎉</p>
                <p className="opacity-90 mt-2">Check your email for a little surprise.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your university email"
                  required
                  disabled={loading}
                  className="flex-1 px-8 py-5 rounded-2xl text-light-textPrimary focus:outline-none focus:ring-4 focus:ring-white/30 text-lg transition-all"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="bg-light-textPrimary text-white font-bold px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shrink-0 text-lg flex items-center justify-center min-w-[180px]"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : "Join the Waitlist"}
                </button>
              </form>
            )}
            <p className="mt-8 text-sm text-white/70 font-medium">No spam. Only updates on the official app launch.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
