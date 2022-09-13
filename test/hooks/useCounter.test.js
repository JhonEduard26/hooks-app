import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('pruebas useCounter', () => {
  test('debe de retornar los valores por defecto', () => {

    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(10)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('debe de tener el valor del counter 100', () => {

    const { result } = renderHook(() => useCounter(100))
    const { counter } = result.current

    expect(counter).toBe(100)
  })

  test('debe de incrementar el contador', () => {

    const { result } = renderHook(() => useCounter())
    const { counter, increment } = result.current

    act(() => {
      increment()
      increment()
      increment()
    })

    expect(result.current.counter).toBe(13)

  })

  test('debe de decrementar el contador', () => {

    const { result } = renderHook(() => useCounter())
    const { counter, decrement } = result.current

    act(() => {
      decrement()
      decrement()
      decrement()
    })

    expect(result.current.counter).toBe(7)
  })

  test('debe de resetear el contador', () => {

    const { result } = renderHook(() => useCounter(500))
    const { counter, reset, decrement } = result.current

    act(() => {
      decrement()
      decrement()
      decrement()
      reset()
    })

    expect(result.current.counter).toBe(500)
  })
})