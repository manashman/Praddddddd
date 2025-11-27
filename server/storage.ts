import { 
  type User, 
  type InsertUser, 
  type Event, 
  type InsertEvent,
  type ContactSubmission,
  type InsertContact
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllEvents(): Promise<Event[]>;
  getEventById(id: string): Promise<Event | undefined>;
  getEventsByCategory(category: string): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(submission: InsertContact): Promise<ContactSubmission>;
}

const initialEvents: Event[] = [
  {
    id: "1",
    name: "Symphony of Stars",
    category: "Music",
    description: "Battle of bands, solo performances, and orchestral showcases that will resonate through the cosmos.",
    icon: "music",
    date: "March 15-17, 2025",
    venue: "Main Auditorium",
    prizePool: "50,000",
  },
  {
    id: "2",
    name: "Celestial Dance",
    category: "Dance",
    description: "Classical, contemporary, and fusion dance competitions that defy gravity and inspire awe.",
    icon: "mic",
    date: "March 15-17, 2025",
    venue: "Open Air Theatre",
    prizePool: "75,000",
  },
  {
    id: "3",
    name: "Nebula Art",
    category: "Art",
    description: "Painting, sketching, and digital art competitions that bring celestial visions to life.",
    icon: "palette",
    date: "March 15-16, 2025",
    venue: "Art Gallery",
    prizePool: "30,000",
  },
  {
    id: "4",
    name: "Theatre Odyssey",
    category: "Drama",
    description: "Theatrical performances and street plays that take you on interstellar adventures.",
    icon: "drama",
    date: "March 16-17, 2025",
    venue: "Main Stage",
    prizePool: "60,000",
  },
  {
    id: "5",
    name: "Cosmic Words",
    category: "Literary",
    description: "Poetry, creative writing, and debate competitions for the wordsmiths of the universe.",
    icon: "pen",
    date: "March 15-16, 2025",
    venue: "Seminar Hall",
    prizePool: "25,000",
  },
  {
    id: "6",
    name: "Stellar Lens",
    category: "Photography",
    description: "Capture the beauty of the cosmos through your lens in our photography contest.",
    icon: "camera",
    date: "March 15-17, 2025",
    venue: "Campus Wide",
    prizePool: "20,000",
  },
  {
    id: "7",
    name: "Pixel Galaxy",
    category: "Gaming",
    description: "E-sports tournaments and gaming competitions that test your reflexes across digital universes.",
    icon: "gamepad",
    date: "March 15-17, 2025",
    venue: "Gaming Arena",
    prizePool: "100,000",
  },
  {
    id: "8",
    name: "Code Cosmos",
    category: "Technical",
    description: "Hackathons, coding challenges, and tech competitions for the engineers of tomorrow.",
    icon: "code",
    date: "March 15-16, 2025",
    venue: "Computer Lab",
    prizePool: "150,000",
  },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Map<string, Event>;
  private contactSubmissions: Map<string, ContactSubmission>;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.contactSubmissions = new Map();
    
    initialEvents.forEach(event => {
      this.events.set(event.id, event);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEventById(id: string): Promise<Event | undefined> {
    return this.events.get(id);
  }

  async getEventsByCategory(category: string): Promise<Event[]> {
    return Array.from(this.events.values()).filter(
      (event) => event.category.toLowerCase() === category.toLowerCase()
    );
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { ...insertEvent, id };
    this.events.set(id, event);
    return event;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createContactSubmission(insertSubmission: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
}

export const storage = new MemStorage();
