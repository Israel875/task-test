import { buscarTarefas } from '@/lib/tarefas'
import ListaDeTarefas from '@/components/ListaDeTarefas'

export default async function Home() {
  const tarefas = await buscarTarefas()
  return <ListaDeTarefas tarefasIniciais={tarefas} />
}
