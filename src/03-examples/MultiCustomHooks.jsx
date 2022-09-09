import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

const baseUrl = 'https://www.breakingbadapi.com/api/'

export const MultiCustomHooks = () => {
  const [id, setId] = useState(1)

  const { data, isLoading, isError } = useFetch(`${baseUrl}quotes/${id}`)

  const { author, quote } = !!data && data[0]

  return (
    <>
      <div>MultiCustomHooks</div>

      {
        isLoading
          ? <div>Loading...</div>
          : (
            <blockquote>
              <p>{quote}</p>
              <footer>{author}</footer>
            </blockquote>
          )
      }

      <button onClick={() => setId(i => i + 1)}>Next quote</button>
    </>
  )
}