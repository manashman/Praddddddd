# Pradharshini 25 - Cultural Event Website

## Overview
A premium space-themed website for Pradharshini 25, a college cultural event. The website features dynamic animations, cosmic design elements, and a comprehensive information architecture for event showcasing.

## Project Architecture

### Frontend (client/)
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom space theme
- **Animations**: Framer Motion for smooth transitions and effects
- **UI Components**: Shadcn/ui component library
- **Routing**: Wouter for client-side routing

### Backend (server/)
- **Framework**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)
- **API**: RESTful endpoints for events and contact submissions

### Shared (shared/)
- **Schema**: Drizzle ORM schema definitions with Zod validation

## Key Features

### Landing Page Sections
1. **Hero Section** - Animated star background, countdown timer, cosmic typography
2. **About Section** - Event history, mission, stats (10+ years, 5000+ participants, 50+ events, 10L+ prize pool)
3. **Events Section** - 8 event categories with animated cards (Music, Dance, Art, Drama, Literary, Photography, Gaming, Technical)
4. **Timeline Section** - 3-day event schedule with alternating layout
5. **Why Attend Section** - Benefits grid with icons
6. **Contact Section** - Contact form with validation, contact info, social links
7. **Footer** - Quick links, newsletter signup, social media

### Design System
- **Colors**: Deep space purples, cosmic blues, starlight whites
- **Fonts**: Orbitron (display), Inter (body)
- **Effects**: Glass morphism, gradient glows, floating animations

## API Endpoints

### Events
- `GET /api/events` - Get all events (optional `?category=` filter)
- `GET /api/events/:id` - Get single event by ID

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all submissions (admin)

## Running the Project
```bash
npm run dev
```
The application runs on port 5000.

## Event Date
March 15-17, 2025

## Recent Changes
- November 27, 2025: Initial implementation of the space-themed website with all core sections and backend APIs
