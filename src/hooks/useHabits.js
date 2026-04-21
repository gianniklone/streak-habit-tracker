import { useState, useEffect } from 'react'

const STORAGE_KEY = 'habit-tracker-habits'

function today() {
  return new Date().toISOString().slice(0, 10)
}

function getStreak(completions) {
  if (!completions.length) return 0
  let streak = 0
  const d = new Date()
  while (true) {
    const dateStr = d.toISOString().slice(0, 10)
    if (completions.includes(dateStr)) {
      streak++
      d.setDate(d.getDate() - 1)
    } else {
      break
    }
  }
  return streak
}

export function useHabits() {
  const [habits, setHabits] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits))
  }, [habits])

  function addHabit(name, emoji, color) {
    setHabits(prev => [
      ...prev,
      { id: crypto.randomUUID(), name, emoji, color, completions: [] },
    ])
  }

  function deleteHabit(id) {
    setHabits(prev => prev.filter(h => h.id !== id))
  }

  function toggleToday(id) {
    const t = today()
    setHabits(prev =>
      prev.map(h =>
        h.id !== id
          ? h
          : {
              ...h,
              completions: h.completions.includes(t)
                ? h.completions.filter(d => d !== t)
                : [...h.completions, t],
            }
      )
    )
  }

  return { habits, addHabit, deleteHabit, toggleToday, today, getStreak }
}
