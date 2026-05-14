import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import NovaTarefa from '@/components/NovaTarefa'

describe('NovaTarefa', () => {
  it('deve renderizar o input e o botão', () => {
    // Arrange
    const mockAdicionar = jest.fn()

    // Act
    render(<NovaTarefa onAdicionar={mockAdicionar} />)

    // Assert
    expect(screen.getByLabelText('Nova tarefa')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument()
  })

  it('deve chamar onAdicionar com o valor digitado ao submeter', () => {
    // Arrange
    const mockAdicionar = jest.fn()
    render(<NovaTarefa onAdicionar={mockAdicionar} />)
    const input = screen.getByLabelText('Nova tarefa')

    // Act
    fireEvent.change(input, { target: { value: 'Estudar Spring Boot' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar' }).closest('form')!)

    // Assert
    expect(mockAdicionar).toHaveBeenCalledWith('Estudar Spring Boot')
    expect(mockAdicionar).toHaveBeenCalledTimes(1)
  })

  it('não deve chamar onAdicionar se o input estiver vazio', () => {
    // Arrange
    const mockAdicionar = jest.fn()
    render(<NovaTarefa onAdicionar={mockAdicionar} />)

    // Act
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar' }).closest('form')!)

    // Assert
    expect(mockAdicionar).not.toHaveBeenCalled()
  })

  it('deve limpar o input após submissão', () => {
    // Arrange
    const mockAdicionar = jest.fn()
    render(<NovaTarefa onAdicionar={mockAdicionar} />)
    const input = screen.getByLabelText('Nova tarefa')

    // Act
    fireEvent.change(input, { target: { value: 'Tarefa teste' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar' }).closest('form')!)

    // Assert
    expect(input).toHaveValue('')
  })
})
