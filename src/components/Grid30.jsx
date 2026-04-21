export default function Grid30({ completions, color }) {
  const days = Array.from({ length: 30 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (29 - i))
    return d.toISOString().slice(0, 10)
  })

  return (
    <div className="grid-30">
      {days.map(day => (
        <div
          key={day}
          title={day}
          className={`grid-cell ${completions.includes(day) ? 'filled' : 'empty'}`}
          style={completions.includes(day) ? { '--habit-color': color } : {}}
        />
      ))}
    </div>
  )
}
