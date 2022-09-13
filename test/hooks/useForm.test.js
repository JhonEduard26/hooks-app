import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('pruebas hook useForm', () => {

  const initialForm = {
    name: 'jhon',
    email: 'jhon@mail.com'
  }

  test('debe de cambiar el inputValue', () => {

    const newValue = 'Jhon'

    const { result } = renderHook(() => useForm(initialForm))

    const [formValues, handleInputChange] = result.current

    act(() => {
      handleInputChange({ target: { name: 'name', value: newValue } })
    })

    expect(result.current[0].name).toBe(newValue)
  })

  test('debe de resetear el formulario', () => {

    const newValue = 'Fernando'

    const { result } = renderHook(() => useForm(initialForm))

    const [formValues, handleInputChange, handleResetForm] = result.current

    act(() => {
      handleInputChange({ target: { name: 'name', value: newValue } })
      handleResetForm()
    })

    expect(result.current[0].name).toBe(initialForm.name)
  })
})