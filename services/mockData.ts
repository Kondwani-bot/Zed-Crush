
import { UserProfile, Match, Conversation, Post } from '../types';

export const CURRENT_USER_ID = 1;

export const users: UserProfile[] = [
  {
    id: 1,
    name: 'Alex',
    age: 28,
    occupation: 'Software Engineer',
    images: ['https://picsum.photos/seed/alex/800/1200'],
    bio: 'Lover of hiking, coding, and exploring new coffee shops. Looking for someone to share adventures with. My life goal is to build an app that makes a positive impact.',
    interests: ['Hiking', 'Coding', 'Coffee', 'Travel', 'Photography'],
    distance: 2,
  },
  {
    id: 2,
    name: 'Brianna',
    age: 26,
    occupation: 'Graphic Designer',
    images: ['https://picsum.photos/seed/brianna/800/1200', 'https://picsum.photos/seed/brianna2/800/1200'],
    bio: 'Creative soul who finds beauty in simplicity. I spend my weekends painting and visiting art museums. Passionate about sustainability and minimalist design.',
    interests: ['Painting', 'Art', 'Yoga', 'Sustainability', 'Minimalism'],
    distance: 5,
  },
  {
    id: 3,
    name: 'Charlie',
    age: 30,
    occupation: 'Doctor',
    images: ['https://picsum.photos/seed/charlie/800/1200'],
    bio: 'Dedicated to helping others, both in and out of the hospital. I unwind by playing guitar and going for long runs. Looking for a genuine connection with someone kind and ambitious.',
    interests: ['Music', 'Running', 'Health', 'Volunteering', 'Cooking'],
    distance: 8,
  },
  {
    id: 4,
    name: 'Diana',
    age: 27,
    occupation: 'Marketing Manager',
    images: ['https://picsum.photos/seed/diana/800/1200', 'https://picsum.photos/seed/diana2/800/1200', 'https://picsum.photos/seed/diana3/800/1200'],
    bio: 'I thrive on strategy and storytelling. When I\'m not crafting marketing campaigns, I\'m probably at a concert or trying a new restaurant. My dog is my world!',
    interests: ['Live Music', 'Foodie', 'Dogs', 'Marketing', 'Socializing'],
    distance: 3,
  },
  {
    id: 5,
    name: 'Ethan',
    age: 29,
    occupation: 'Architect',
    images: ['https://picsum.photos/seed/ethan/800/1200'],
    bio: 'Building dreams, one blueprint at a time. I have a keen eye for detail and a love for historical architecture. In my free time, I enjoy cycling and reading sci-fi novels.',
    interests: ['Architecture', 'Cycling', 'Sci-Fi', 'History', 'Podcasts'],
    distance: 12,
  },
  {
    id: 6,
    name: 'Fiona',
    age: 25,
    occupation: 'Chef',
    images: ['https://picsum.photos/seed/fiona/800/1200', 'https://picsum.photos/seed/fiona2/800/1200'],
    bio: 'Passionate about creating delicious food that brings people together. My love language is a home-cooked meal. Let\'s explore the local food scene together!',
    interests: ['Cooking', 'Baking', 'Food Markets', 'Wine Tasting', 'Gardening'],
    distance: 6,
  },
];

export const matches: Match[] = [
  { id: 1, user: users[1], lastMessage: 'Hey! I loved your paintings.', timestamp: '10:30 AM' },
  { id: 2, user: users[3], lastMessage: 'You had me at "dog is my world" 😂', timestamp: 'Yesterday' },
];

export const conversations: Conversation[] = [
    {
        id: 1,
        participant: users[1],
        messages: [
            { id: 1, senderId: 1, text: 'Your portfolio is amazing! I love your design style.', timestamp: '10:28 AM', isRead: true },
            { id: 2, senderId: 2, text: 'Hey! Thanks so much! I loved your paintings.', timestamp: '10:30 AM', isRead: false },
        ]
    },
    {
        id: 2,
        participant: users[3],
        messages: [
            { id: 1, senderId: 1, text: 'Hi Diana! Your profile is so fun.', timestamp: 'Yesterday', isRead: true },
            { id: 2, senderId: 4, text: 'You had me at "dog is my world" 😂', timestamp: 'Yesterday', isRead: true },
            { id: 3, senderId: 1, text: 'Haha, well my golden retriever is the best co-pilot.', timestamp: 'Yesterday', isRead: false },
        ]
    }
];


export const posts: Post[] = [
    { id: 1, user: users[0], image: 'https://picsum.photos/seed/alexpost/600/600', caption: 'Another beautiful day in the mountains!', timestamp: '2h ago', likes: 124, comments: 12 },
    { id: 2, user: users[1], image: 'https://picsum.photos/seed/briannapost/600/600', caption: 'Finished a new piece today. Feeling inspired.', timestamp: '8h ago', likes: 256, comments: 34 },
    { id: 3, user: users[3], image: 'https://picsum.photos/seed/dianapost/600/600', caption: 'Puppy park adventures! 🐾', timestamp: '1d ago', likes: 432, comments: 55 },
];
