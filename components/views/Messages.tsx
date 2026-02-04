
import React, { useState } from 'react';
import { conversations } from '../../services/mockData';
import ChatWindow from '../ChatWindow';
import { Conversation } from '../../types';
import { ChatIcon } from '../icons/ChatIcon';

const Messages: React.FC = () => {
    const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(conversations[0]);
    const [isMobileChatVisible, setIsMobileChatVisible] = useState(false);

    const handleSelectConversation = (convo: Conversation) => {
        setSelectedConversation(convo);
        if (window.innerWidth < 768) {
            setIsMobileChatVisible(true);
        }
    };

    return (
        <div className="flex h-full w-full bg-white md:bg-transparent rounded-xl md:rounded-none overflow-hidden">
            {/* Conversation List */}
            <div className={`w-full md:w-1/3 md:flex flex-col border-r border-theme-secondary/50 ${isMobileChatVisible ? 'hidden' : 'flex'}`}>
                <div className="p-4 border-b border-theme-secondary/50">
                    <h2 className="text-xl font-bold text-theme-text-primary">Conversations</h2>
                </div>
                <div className="flex-grow overflow-y-auto">
                    {conversations.map(convo => (
                        <div 
                            key={convo.id} 
                            className={`flex items-center p-3 cursor-pointer hover:bg-theme-secondary/30 transition-colors border-l-4 ${selectedConversation?.id === convo.id ? 'border-theme-primary bg-theme-secondary/20' : 'border-transparent'}`}
                            onClick={() => handleSelectConversation(convo)}
                        >
                            <img src={convo.participant.images[0]} alt={convo.participant.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                            <div className="flex-grow overflow-hidden">
                                <h3 className="font-semibold text-theme-text-primary">{convo.participant.name}</h3>
                                <p className="text-sm text-theme-text-secondary truncate">{convo.messages[convo.messages.length - 1].text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className={`w-full md:w-2/3 ${!isMobileChatVisible && 'hidden'} md:flex flex-col`}>
                {selectedConversation ? (
                    <ChatWindow 
                        key={selectedConversation.id}
                        conversation={selectedConversation} 
                        onBack={() => setIsMobileChatVisible(false)} 
                    />
                ) : (
                    <div className="hidden md:flex flex-col items-center justify-center h-full w-full text-center text-theme-text-secondary p-4">
                        <ChatIcon className="w-16 h-16 mb-4" />
                        <h3 className="text-lg font-semibold">Select a conversation</h3>
                        <p>Choose from your matches to continue the chat.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Messages;
