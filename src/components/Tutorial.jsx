import { useState } from 'react'

const STEPS = [
  {
    emoji: '🔥',
    title: 'Benvenuto in STREAK',
    desc: 'La tua app per costruire abitudini quotidiane. Traccia i progressi, mantieni le streak e trasforma le azioni in routine.',
  },
  {
    emoji: '➕',
    title: 'Aggiungi un habit',
    desc: 'Clicca su "+ Aggiungi habit" per crearne uno nuovo. Scegli un\'icona e un colore che lo rappresenti.',
  },
  {
    emoji: '✅',
    title: 'Completalo ogni giorno',
    desc: 'Tocca il cerchio a destra della card per segnare l\'habit come fatto. Fallo ogni giorno per costruire la streak.',
  },
  {
    emoji: '📊',
    title: 'Monitora i progressi',
    desc: 'La griglia mostra gli ultimi 30 giorni. Il ring in alto tiene il conto degli habit completati oggi.',
  },
]

export default function Tutorial({ onDone }) {
  const [step, setStep] = useState(0)

  const isLast = step === STEPS.length - 1
  const current = STEPS[step]

  function next() {
    if (isLast) onDone()
    else setStep(s => s + 1)
  }

  return (
    <div className="tutorial-backdrop" onClick={e => e.target === e.currentTarget && onDone()}>
      <div className="tutorial-card">
        <button className="tutorial-skip" onClick={onDone}>Salta</button>

        <div className="tutorial-emoji">{current.emoji}</div>
        <h2 className="tutorial-title">{current.title}</h2>
        <p className="tutorial-desc">{current.desc}</p>

        <div className="tutorial-dots">
          {STEPS.map((_, i) => (
            <button
              key={i}
              className={`tutorial-dot ${i === step ? 'active' : ''}`}
              onClick={() => setStep(i)}
            />
          ))}
        </div>

        <button className="tutorial-next" onClick={next}>
          {isLast ? 'Inizia →' : 'Avanti'}
        </button>
      </div>
    </div>
  )
}
