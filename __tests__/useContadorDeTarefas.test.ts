import '@testing-library/jest-dom'
import { renderHook, act } from '@testing-library/react'
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas'
import { Tarefa } from '@/lib/tarefas'

const tarefasMock: Tarefa[] = [
  { id: 1, titulo: 'Tarefa 1', concluida: false },
  { id: 2, titulo: 'Tarefa 2', concluida: true },
]

describe('useContadorDeTarefas', () => {
  it('deve retornar o total correto de tarefas iniciais', () => {
    // Arrange + Act
    const { result } = renderHook(() => useContadorDeTarefas(tarefasMock))

    // Assert
    expect(result.current.total).toBe(2)
  })

  it('deve retornar a lista de tarefas iniciais', () => {
    // Arrange + Act
    const { result } = renderHook(() => useContadorDeTarefas(tarefasMock))

    // Assert
    expect(result.current.tarefas).toHaveLength(2)
    expect(result.current.tarefas[0].titulo).toBe('Tarefa 1')
  })

  it('deve incrementar o total ao adicionar uma tarefa', () => {
    // Arrange
    const { result } = renderHook(() => useContadorDeTarefas(tarefasMock))

    // Act
    act(() => {
      result.current.adicionarTarefa('Nova tarefa')
    })

    // Assert
    expect(result.current.total).toBe(3)
  })

  it('deve adicionar a tarefa com os dados corretos', () => {
    // Arrange
    const { result } = renderHook(() => useContadorDeTarefas(tarefasMock))

    // Act
    act(() => {
      result.current.adicionarTarefa('Estudar Docker')
    })

    // Assert
    const ultima = result.current.tarefas[result.current.tarefas.length - 1]
    expect(ultima.titulo).toBe('Estudar Docker')
    expect(ultima.concluida).toBe(false)
  })
})
