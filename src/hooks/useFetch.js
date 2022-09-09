import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    isError: null,
  })


  const getFetch = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setState({
        ...state,
        data,
        isLoading: false
      })
    } catch (err) {
      setState({
        ...state,
        isLoading: false,
        isError: err
      })
    }
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return state
}