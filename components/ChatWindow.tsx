
import React, { useState, useEffect, useRef } from 'react';
import { Conversation, Message } from '../../types';
import { CURRENT_USER_ID } from '../../services/mockData';

interface ChatWindowProps {
  conversation: Conversation;
  onBack: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ conversation, onBack }) => {
    const [messages, setMessages] = useState<Message[]>(conversation.messages);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        setMessages(conversation.messages);
    }, [conversation]);

    const handleSend = () => {
        if (newMessage.trim() === '') return;
        const msg: Message = {
            id: Date.now(),
            senderId: CURRENT_USER_ID,
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isRead: false
        };
        setMessages(prevMessages => [...prevMessages, msg]);
        setNewMessage('');
    };

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Chat Header */}
            <div className="flex items-center p-3 border-b border-theme-secondary/50">
                <button onClick={onBack} className="mr-3 text-theme-primary md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <img src={conversation.participant.images[0]} alt={conversation.participant.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                <h3 className="font-semibold text-theme-text-primary">{conversation.participant.name}</h3>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50/50">
                {messages.map(msg => (
                    <div key={msg.id} className={`flex items-end gap-2 ${msg.senderId === CURRENT_USER_ID ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] lg:max-w-[70%] px-4 py-2 rounded-2xl shadow-sm ${msg.senderId === CURRENT_USER_ID ? 'bg-theme-primary text-white rounded-br-none' : 'bg-gray-200 text-theme-text-primary rounded-bl-none'}`}>
                            <p className="text-sm">{msg.text}</p>
                            <span className={`text-xs mt-1 block text-right opacity-70`}>{msg.timestamp}</span>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-theme-secondary/50 bg-white">
                <div className="flex items-center">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                        className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-theme-primary transition-shadow"
                    />
                    <button onClick={handleSend} className="ml-3 bg-theme-primary text-white w-10 h-10 rounded-full font-semibold flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009.894 15V4.106A1 1 0 0010.894 2.553z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
