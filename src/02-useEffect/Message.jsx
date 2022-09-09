import { useEffect, useState } from 'react'

export const Message = () => {
  const [coors, setCoors] = useState({ x: 0, y: 0 })

  useEffect(() => {

    const onMouseMove = ({ x, y }) => setCoors({ x, y })

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      // window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>{JSON.stringify(coors)}</p>
    </>
  )
}