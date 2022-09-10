import { Loading } from '../03-examples/loading/Loading'
import { Quote } from '../03-examples/quote/Quote'
import { useCounter, useFetch } from '../hooks'

const baseUrl = 'https://www.breakingbadapi.com/api/'

export const Layout = () => {

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