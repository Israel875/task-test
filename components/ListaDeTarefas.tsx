'use client'

import { Tarefa } from '@/lib/tarefas'
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas'
import NovaTarefa from './NovaTarefa'

interface Props {
  tarefasIniciais: Tarefa[]
}

export default function ListaDeTarefas({ tarefasIniciais }: Props) {
  const { tarefas, total, adicionarTarefa } = useContadorDeTarefas(tarefasIniciais)

  return (
    <main>
      <h1>Gerenciador de Tarefas</h1>
      <p>Total de tarefas: <strong>{total}</strong></p>
      <NovaTarefa onAdicionar={adicionarTarefa} />
      <ul>
        {tarefas.map((t) => (
          <li key={t.id} style={{ textDecoration: t.concluida ? 'line-through' : 'none' }}>
            {t.titulo}
          </li>
        ))}
      </ul>
    </main>
  )
}
