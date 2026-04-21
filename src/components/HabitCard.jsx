import Grid30 from './Grid30'

export default function HabitCard({ habit, onToggle, onDelete, today, getStreak }) {
  const done = habit.completions.includes(today)
  const streak = getStreak(habit.completions)

  return (
    <div
      className={`habit-card ${done ? 'done' : ''}`}
      style={{ '--habit-color': habit.color }}
    >
      <div className="card-top">
        <div className="habit-emoji-wrap">{habit.emoji}</div>

        <div className="habit-info">
          <p className="habit-name">{habit.name}</p>
          <p className={`habit-streak ${streak > 0 ? 'on-fire' : ''}`}>
            {streak > 0 ? `🔥 ${streak} giorni` : 'Nessuna streak'}
          </p>
        </div>

        <div className="card-right">
          <button className="delete-btn" onClick={() => onDelete(habit.id)} title="Elimina">
            ✕
          </button>
          <button
            key={done ? 'done' : 'undone'}
            className={`check-btn ${done ? 'done' : ''}`}
            onClick={() => onToggle(habit.id)}
          >
            {done ? '✓' : ''}
          </button>
        </div>
      </div>

      <div className="card-sep" />
      <Grid30 completions={habit.completions} color={habit.color} />
    </div>
  )
}
