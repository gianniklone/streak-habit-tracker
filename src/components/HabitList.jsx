import HabitCard from './HabitCard'

export default function HabitList({ habits, onToggle, onDelete, today, getStreak }) {
  if (!habits.length) {
    return (
      <div className="empty-state">
        <p className="empty-icon">🌱</p>
        <p className="empty-text">
          Nessun habit ancora.<br />Aggiungine uno per iniziare.
        </p>
      </div>
    )
  }

  return (
    <div className="habit-list">
      {habits.map(habit => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggle={onToggle}
          onDelete={onDelete}
          today={today}
          getStreak={getStreak}
        />
      ))}
    </div>
  )
}
