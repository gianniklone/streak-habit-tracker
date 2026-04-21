# STREAK — Habit Tracker

A clean, dark-themed habit tracking app built with React. Track daily habits, build streaks, and visualize your progress over 30 days.

🔗 **[Live Demo]()**

---

## Features

- Add habits with custom emoji and color
- Mark habits as done each day with a satisfying check animation
- Streak counter — see how many consecutive days you've kept up
- 30-day visual grid per habit (GitHub contribution style)
- Daily progress ring showing how many habits you've completed today
- Onboarding tutorial on first visit
- Fully persisted in `localStorage` — no backend needed

## Tech Stack

- **React 19** — UI and state management
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — utility-first styling
- **localStorage** — client-side persistence

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/streak-habit-tracker
cd streak-habit-tracker
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── HabitCard.jsx    # Single habit card with check, streak, grid
│   ├── HabitForm.jsx    # Add new habit form
│   ├── HabitList.jsx    # List of all habits
│   ├── Grid30.jsx       # 30-day visual grid
│   └── Tutorial.jsx     # Onboarding overlay
├── hooks/
│   └── useHabits.js     # localStorage logic and streak calculation
└── App.jsx
```

## What I Learned

- Custom React hooks for state + side effects
- localStorage as a persistence layer without a backend
- CSS custom properties with dynamic values via inline styles
- Designing for delight: micro-animations and satisfying interactions

---

Made by [Giovanni Lapalombella](https://www.linkedin.com/in/)
