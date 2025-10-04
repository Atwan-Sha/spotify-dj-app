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

  useEffect(() => {
    let isMounted = true

    async function fetchData() {
      try {
        setLoading(true)
        const result = await endpointFunc(token, ...params)
        if (isMounted) setData(result)
      } catch (err: any) {
        if (isMounted) setError(err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()
    return () => {
      isMounted = false
    }
  }, [...params])

  return { data, loading, error }
}
