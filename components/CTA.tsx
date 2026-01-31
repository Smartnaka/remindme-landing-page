
import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2, PartyPopper } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Check if they already joined in a previous session
  useEffect(() => {
    const hasJoined = localStorage.getItem('remindme_waitlist_joined');
    if (hasJoined) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      /** 
       * PRODUCTION TIP: 
       * You would typically use fetch() here:
       * 
       * await fetch('https://your-api.com/waitlist', {
       *   method: 'POST',
       *   body: JSON.stringify({ email }),
       *   headers: { 'Content-Type': 'application/json' }
       * });
       */
      
      // Simulating a real network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      localStorage.setItem('remindme_waitlist_joined', 'true');
      setSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error("Waitlist error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/20 flex flex-col items-center animate-float">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <CheckCircle2 className="w-10 h-10 text-brand-light dark:text-brand-dark" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">You're on the list!</h2>
                <p className="text-xl opacity-90 mb-8 font-medium">
                  We'll notify you as soon as Remindme is ready for FUTA students.
                </p>
                <div className="flex items-center gap-2 px-6 py-3 bg-white/20 rounded-full text-sm font-bold backdrop-blur-md">
                  <PartyPopper className="w-4 h-4" />
                  Invite your course mates to join
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Stay on top of your lectures.</h2>
                <p className="text-lg md:text-xl text-white/90 mb-10 font-medium leading-relaxed">
                  Join 500+ students waiting for the smartest way to manage their university schedule.
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 group">
                  <div className="flex-1 relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your university email"
                      required
                      disabled={loading}
                      className="w-full px-8 py-5 rounded-2xl text-light-textPrimary focus:outline-none focus:ring-4 focus:ring-white/30 text-lg transition-all placeholder:text-light-textSecondary/50"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="bg-light-textPrimary text-white font-bold px-10 py-5 rounded-2xl hover:bg-black active:scale-95 transition-all shrink-0 text-lg flex items-center justify-center min-w-[200px] shadow-lg"
                  >
                    {loading ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      "Join the Waitlist"
                    )}
                  </button>
                </form>
                <p className="mt-8 text-sm text-white/70 font-medium">
                  Privacy first. We only use your email for app updates.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
