import { useState } from 'react'

const COLORS = [
  '#c9f244',
  '#60a5fa',
  '#f472b6',
  '#fb923c',
  '#a78bfa',
  '#34d399',
  '#f87171',
  '#facc15',
]

const EMOJIS = ['💪', '📚', '🏃', '💧', '🧘', '🎯', '✍️', '🍎', '😴', '🎨']

export default function HabitForm({ onAdd }) {
  const [name, setName] = useState('')
  const [emoji, setEmoji] = useState('💪')
  const [color, setColor] = useState(COLORS[0])
  const [open, setOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    onAdd(name.trim(), emoji, color)
    setName('')
    setEmoji('💪')
    setColor(COLORS[0])
    setOpen(false)
  }

  if (!open) {
    return (
      <button className="add-btn" onClick={() => setOpen(true)}>
        <span style={{ fontSize: 18, lineHeight: 1 }}>+</span>
        Aggiungi habit
      </button>
    )
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <p className="form-card-title">Nuovo habit</p>

      <input
        autoFocus
        className="form-input"
        type="text"
        placeholder="Es. Leggere 20 minuti..."
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <span className="form-label">Icona</span>
      <div className="emoji-grid">
        {EMOJIS.map(em => (
          <button
            key={em}
            type="button"
            className={`emoji-btn ${emoji === em ? 'selected' : ''}`}
            onClick={() => setEmoji(em)}
          >
            {em}
          </button>
        ))}
      </div>

      <span className="form-label">Colore</span>
      <div className="color-row">
        {COLORS.map(c => (
          <button
            key={c}
            type="button"
            className={`color-dot ${color === c ? 'selected' : ''}`}
            style={{ background: c }}
            onClick={() => setColor(c)}
          />
        ))}
      </div>

      <div className="form-actions">
        <button type="button" className="btn-cancel" onClick={() => setOpen(false)}>
          Annulla
        </button>
        <button type="submit" className="btn-submit">
          Aggiungi
        </button>
      </div>
    </form>
  )
}
