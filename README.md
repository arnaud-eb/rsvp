# RSVP Management Application

A modern, full-stack event management application built with Next.js 13, featuring guest RSVP system, accommodation preferences, activity selections, and an administrative dashboard.

🌐 **Live Demo:** [https://rsvp-yufk.vercel.app/](https://rsvp-yufk.vercel.app/)

## 🚀 Features

- **Multi-step RSVP Form**: Interactive stepper component for seamless user experience
- **Guest Management**: Handle multiple guests per booking with dietary restrictions
- **Preference Selection**: Allow guests to select accommodation and activity preferences
- **Admin Dashboard**: Real-time view of all bookings and messages
- **Responsive Design**: Mobile-first approach with smooth animations
- **Contact System**: Integrated messaging system for guest inquiries

## 🛠 Tech Stack

- **Frontend**: Next.js 13 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: Zod with React Hook Form
- **Deployment**: Vercel
- **Animation**: GSAP, Lenis smooth scrolling

## 🏗 Architecture

### Next.js 13 App Router
- **Parallel Routes**: Modal overlays with `@modal` directory
- **Route Groups**: Organized dashboard routes with `(dashboard)`
- **Intercepting Routes**: Seamless modal navigation
- **Server Actions**: Type-safe form submissions

## 📁 Project Structure

```
app/
├── @modal/              # Parallel routes for modals
├── (dashboard)/         # Main RSVP pages
├── admin/              # Admin dashboard
└── api/                # API routes

components/
├── RSVP/               # Multi-step form components
├── Info/               # Event information
└── Modal.tsx           # Modal wrapper

lib/
├── db.ts               # Prisma client
└── schema.ts           # Zod validation schemas
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database

### Installation

```bash
# Clone the repository
git clone git@github.com:arnaud-eb/rsvp.git
cd rsvp

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server with video sync
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Key Achievements

- **Performance**: Optimized with Next.js 13 App Router and Server Components
- **User Experience**: Smooth animations and intuitive multi-step forms
- **Type Safety**: Full TypeScript coverage with Zod validation
- **Responsive Design**: Works seamlessly across all devices
- **Modern Stack**: Latest Next.js features with Server Actions

## 🎯 Development Highlights

- Implemented modern Next.js 13 patterns (App Router, Server Actions)
- Built reusable, accessible components with TypeScript
- Created smooth user interactions with GSAP and Lenis
- Integrated video content with next-video plugin
- Deployed scalable solution on Vercel with automatic deployments
