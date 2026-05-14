import { useState } from 'react'
import { Tarefa } from '@/lib/tarefas'

export function useContadorDeTarefas(tarefasIniciais: Tarefa[]) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais)

  const adicionarTarefa = (titulo: string) => {
    const nova: Tarefa = {
      id: Date.now(),
      titulo,
      concluida: false,
    }
    setTarefas((prev) => [...prev, nova])
  }

  return {
    tarefas,
    total: tarefas.length,
    adicionarTarefa,
  }
}
