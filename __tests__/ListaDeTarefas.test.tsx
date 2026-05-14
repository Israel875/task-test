import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import ListaDeTarefas from '@/components/ListaDeTarefas'
import { Tarefa } from '@/lib/tarefas'

const tarefasMock: Tarefa[] = [
  { id: 1, titulo: 'Estudar Next.js', concluida: false },
  { id: 2, titulo: 'Fazer deploy', concluida: true },
]

describe('ListaDeTarefas', () => {
  it('deve renderizar o título e o total de tarefas', () => {
    
    render(<ListaDeTarefas tarefasIniciais={tarefasMock} />)

   
    expect(screen.getByText('Gerenciador de Tarefas')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('deve renderizar todas as tarefas da lista', () => {
   
    render(<ListaDeTarefas tarefasIniciais={tarefasMock} />)

   
    expect(screen.getByText('Estudar Next.js')).toBeInTheDocument()
    expect(screen.getByText('Fazer deploy')).toBeInTheDocument()
  })

  it('deve adicionar uma nova tarefa ao submeter o formulário', () => {
   
    render(<ListaDeTarefas tarefasIniciais={tarefasMock} />)
    const input = screen.getByLabelText('Nova tarefa')

   
    fireEvent.change(input, { target: { value: 'Aprender Spring Boot' } })
    fireEvent.submit(input.closest('form')!)

    
    expect(screen.getByText('Aprender Spring Boot')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})
