// useSpotifyApi.ts
import { useState, useEffect } from 'react'
// import { fetchPlaylistItems } from './apiCalls.ts'

export default function useApiCalls<T>(
  token: string,
  endpointFunc: Function,
  params: any,
) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  // console.log('run custom hook')

  useEffect(() => {
    const controller = new AbortController()
    // console.log('run fetch')

    async function fetchData() {
      try {
        setLoading(true)
        const result = await endpointFunc(token, ...params, controller.signal)
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
