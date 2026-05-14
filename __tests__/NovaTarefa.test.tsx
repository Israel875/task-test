import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import NovaTarefa from '@/components/NovaTarefa'

describe('NovaTarefa', () => {
  it('deve renderizar o input e o botão', () => {
    
    const mockAdicionar = jest.fn()

  
    render(<NovaTarefa onAdicionar={mockAdicionar} />)

    
    expect(screen.getByLabelText('Nova tarefa')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument()
  })

  it('deve chamar onAdicionar com o valor digitado ao submeter', () => {
    
    const mockAdicionar = jest.fn()
    render(<NovaTarefa onAdicionar={mockAdicionar} />)
    const input = screen.getByLabelText('Nova tarefa')

   
    fireEvent.change(input, { target: { value: 'Estudar Spring Boot' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar' }).closest('form')!)

  
    expect(mockAdicionar).toHaveBeenCalledWith('Estudar Spring Boot')
    expect(mockAdicionar).toHaveBeenCalledTimes(1)
  })

  it('não deve chamar onAdicionar se o input estiver vazio', () => {
    
    const mockAdicionar = jest.fn()
    render(<NovaTarefa onAdicionar={mockAdicionar} />)

    
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar' }).closest('form')!)

    
    expect(mockAdicionar).not.toHaveBeenCalled()
  })

  it('deve limpar o input após submissão', () => {
  
    const mockAdicionar = jest.fn()
    render(<NovaTarefa onAdicionar={mockAdicionar} />)
    const input = screen.getByLabelText('Nova tarefa')

    
    fireEvent.change(input, { target: { value: 'Tarefa teste' } })
    fireEvent.submit(screen.getByRole('button', { name: 'Adicionar' }).closest('form')!)

    
    expect(input).toHaveValue('')
  })
})
