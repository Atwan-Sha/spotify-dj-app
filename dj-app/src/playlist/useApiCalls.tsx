import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../App.tsx'

export default function useApiCalls(
  endpointFunc: Function,
  params: any,
) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const token = useContext(UserContext)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchData() {
      try {
        setLoading(true)
        const result = await endpointFunc(token, controller.signal, ...params)
        setData(result)
      } catch (err: any) {
        // if (err.name !== 'AbortError') setError(err)
        setError(err)
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    fetchData()
    return () => {
      controller.abort()
    }
  }, [...params])

  return { data, loading, error }
}
