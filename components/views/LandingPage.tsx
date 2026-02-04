
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { SparklesIcon } from '../icons/SparklesIcon';
import { HeartIcon } from '../icons/HeartIcon';
import { ChatIcon } from '../icons/ChatIcon';
import { UserIcon } from '../icons/UserIcon';
import { APP_NAME } from '../../constants';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const { theme } = useTheme();

  const features = [
    {
      icon: <SparklesIcon className="w-8 h-8 text-theme-primary" />,
      title: 'AI Matchmaker',
      description: 'Our advanced AI analyzes profiles to find matches based on deep compatibility, not just swipes.',
    },
    {
      icon: <UserIcon className="w-8 h-8 text-theme-primary" />,
      title: 'Detailed Profiles',
      description: 'Go beyond the surface with rich profiles that showcase personality, interests, and lifestyle.',
    },
    {
      icon: <ChatIcon className="w-8 h-8 text-theme-primary" />,
      title: 'Engaging Conversations',
      description: 'Connect meaningfully with our seamless messaging platform, designed for real conversations.',
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-theme-primary" />,
      title: 'Find Your Story',
      description: 'Share moments from your life and discover others through our Instagram-like stories feature.',
    },
  ];

  return (
    <div className={`min-h-screen w-full font-sans text-theme-text-primary bg-theme-bg overflow-x-hidden transition-colors duration-500 ${theme === 'pink' ? 'bg-pink-50/50' : 'bg-blue-50/50'}`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className={`absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-30 mix-blend-multiply filter blur-2xl animate-blob ${theme === 'pink' ? 'bg-pink-300' : 'bg-blue-300'}`}></div>
        <div className={`absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-30 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000 ${theme === 'pink' ? 'bg-purple-300' : 'bg-indigo-300'}`}></div>
        <div className={`absolute -bottom-20 -left-10 w-72 h-72 rounded-full opacity-30 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000 ${theme === 'pink' ? 'bg-yellow-300' : 'bg-cyan-300'}`}></div>
      </div>
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>

      <main className="relative z-10 p-4 sm:p-6 md:p-8">
        <header className="flex justify-between items-center mb-20 md:mb-28">
            <div className="flex items-center space-x-2">
                <SparklesIcon className="w-8 h-8 text-theme-primary" />
                <h1 className="text-3xl font-bold text-theme-primary">{APP_NAME}</h1>
            </div>
            <button onClick={onEnter} className="font-semibold text-theme-primary px-4 py-2 rounded-lg hover:bg-theme-secondary/50 transition-colors">
                Log In
            </button>
        </header>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-theme-text-primary leading-tight fade-in-up">Beyond the Swipe. Find your Crush.</h2>
          <p className="mt-6 text-lg md:text-xl text-theme-text-secondary max-w-xl mx-auto fade-in-up" style={{ animationDelay: '200ms' }}>
            Welcome to a new era of dating. We use the power of AI to foster genuine connections based on what truly matters.
          </p>
          <button onClick={onEnter} className="mt-10 bg-theme-primary text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 fade-in-up" style={{ animationDelay: '400ms' }}>
            Get Started
          </button>
        </section>

        <section className="mt-28 md:mt-40 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div key={feature.title} className="bg-white/40 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/30 fade-in-up" style={{ animationDelay: `${500 + index * 150}ms` }}>
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-theme-text-primary mb-2">{feature.title}</h3>
                        <p className="text-theme-text-secondary">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <footer className="text-center mt-28 md:mt-40 text-theme-text-secondary/80">
            <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
            <div className="mt-2 space-x-4">
                <a href="#" className="hover:text-theme-primary transition-colors">Terms & Conditions</a>
                <span>&bull;</span>
                <a href="#" className="hover:text-theme-primary transition-colors">Privacy Policy</a>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
