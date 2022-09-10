import { useCounter, useFetch } from '../hooks'
import { Loading } from './loading/Loading'
import { Quote } from './quote/Quote'

const baseUrl = 'https://www.breakingbadapi.com/api/'

export const MultiCustomHooks = () => {

  const { counter, increment } = useCounter(1)
  const { data, isLoading, isError } = useFetch(`${baseUrl}quotes/${counter}`)
  const { author, quote } = !!data && data[0]

  return (
    <>
      <div>MultiCustomHooks</div>

      <section>
        {
          isLoading
            ? <Loading />
            : <Quote quote={quote} author={author} />
        }

      </section>
      <button onClick={increment} disabled={isLoading}>Next quote</button>
    </>
  )
}