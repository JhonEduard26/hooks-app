import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('pruebas <LoginPage />', () => {

  test('debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider >
    )

    expect(screen.getByLabelText('pre'))
  })

  test('debe de llamar al setUser una vez', () => {

    const setUser = jest.fn()

    render(
      <UserContext.Provider value={{ user: null, setUser }}>
        <LoginPage />
      </UserContext.Provider >
    )

    const btnElement = screen.getByRole('button')
    fireEvent.click(btnElement)

    expect(setUser).toHaveBeenCalledWith({ "age": 23, "id": 123, "name": "Jhon" })
  })
})