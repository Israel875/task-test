export interface Tarefa {
  id: number
  titulo: string
  concluida: boolean
}

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([
    { id: 1, titulo: 'Estudar Next.js', concluida: false },
    { id: 2, titulo: 'Escrever testes com Jest', concluida: false },
    { id: 3, titulo: 'Fazer deploy no Vercel', concluida: true },
  ])
}
