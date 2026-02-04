
export type Theme = 'pink' | 'blue';

export type NavigationItem = 'Discover' | 'Matches' | 'Messages' | 'Posts' | 'Profile';

export interface UserProfile {
  id: number;
  name: string;
  age: number;
  occupation: string;
  images: string[];
  bio: string;
  interests: string[];
  distance: number;
}

export interface Match {
  id: number;
  user: UserProfile;
  lastMessage: string;
  timestamp: string;
}

export interface Message {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
    id: number;
    participant: UserProfile;
    messages: Message[];
}

export interface Post {
  id: number;
  user: UserProfile;
  image: string;
  caption: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export interface AIBadge {
  reason: string;
  compatibilityScore: number;
}
