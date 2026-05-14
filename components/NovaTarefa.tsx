'use client'

import { useState } from 'react'

interface Props {
  onAdicionar: (titulo: string) => void
}

export default function NovaTarefa({ onAdicionar }: Props) {
  const [valor, setValor] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valor.trim()) return
    onAdicionar(valor.trim())
    setValor('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa..."
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        aria-label="Nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
