import { useState } from 'react'
import './index.css'
import { useHabits } from './hooks/useHabits'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import Tutorial from './components/Tutorial'

const TUTORIAL_KEY = 'streak-tutorial-done'

export default function App() {
  const { habits, addHabit, deleteHabit, toggleToday, today, getStreak } = useHabits()
  const [showTutorial, setShowTutorial] = useState(
    () => !localStorage.getItem(TUTORIAL_KEY)
  )

  function handleTutorialDone() {
    localStorage.setItem(TUTORIAL_KEY, '1')
    setShowTutorial(false)
  }
  const todayStr = today()

  const completed = habits.filter(h => h.completions.includes(todayStr)).length
  const total = habits.length
  const progress = total ? (completed / total) * 100 : 0
  const circumference = 2 * Math.PI * 26

  const todayLabel = new Date().toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })

  return (
    <div id="root">
      {showTutorial && <Tutorial onDone={handleTutorialDone} />}
      <div className="app-inner">
        <header>
          <p className="date-label">{todayLabel}</p>
          <div className="header-top">
            <h1 className="app-title">STREAK</h1>
            {total > 0 && (
              <div className="progress-ring-wrap">
                <svg viewBox="0 0 68 68" width="68" height="68">
                  <circle cx="34" cy="34" r="26" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
                  <circle
                    cx="34" cy="34" r="26"
                    fill="none"
                    stroke="#c9f244"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - progress / 100)}
                    style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                  />
                </svg>
                <span className="progress-count">{completed}/{total}</span>
              </div>
            )}
          </div>
          <p className="header-sub">
            {total === 0
              ? 'Inizia aggiungendo il tuo primo habit.'
              : completed === total
              ? '🎉 Tutti gli habit completati oggi!'
              : `${total - completed} rimast${total - completed === 1 ? 'o' : 'i'} per oggi`}
          </p>
        </header>

        <HabitForm onAdd={addHabit} />
        <HabitList
          habits={habits}
          onToggle={toggleToday}
          onDelete={deleteHabit}
          today={todayStr}
          getStreak={getStreak}
        />
      </div>
    </div>
  )
}
