import { fireEvent, render, screen } from '@testing-library/react'
import { MultiCustomHooks } from '../../src/03-examples/MultiCustomHooks'
import { useCounter } from '../../src/hooks/useCounter'
import { useFetch } from '../../src/hooks/useFetch'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('pruebas en <MultiCustomHooks />', () => {

  const mockIncrement = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('debe de mostrar un quote', () => {


    useFetch.mockReturnValue({
      data: [{ author: 'felipe', quote: 'Hola mundo' }],
      isLoading: false,
      isError: null,
    })

    render(<MultiCustomHooks />)
    screen.debug()

    expect(screen.getByText('Hola mundo')).toBeTruthy()
    expect(screen.getByText('- felipe')).toBeTruthy()

    const nextBtn = screen.getByRole('button', { name: 'Next quote' })
    expect(nextBtn.disabled).toBeFalsy()

  })

  test('debe de llamar la funcion de incrementar', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'felipe', quote: 'Hola mundo' }],
      isLoading: false,
      isError: null,
    })


    render(<MultiCustomHooks />)
    const nextBtn = screen.getByRole('button', { name: 'Next quote' })
    fireEvent.click(nextBtn)

    expect(mockIncrement).toHaveBeenCalled()
  })
})