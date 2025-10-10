import { useState, useEffect, useRef } from 'react'
import { playTrackFromPlaylist, fetchLabelOnScroll } from './apiCalls'

export default function Track({
  token,
  trackData,
  playlistID
}: {
  token: string,
  trackData: any,
  playlistID: string,
  id: number
}) {
  // const [label, setLabel] = useState(trackData.label)
  const [label, setLabel] = useState('Loading...')
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackData.albumID) return
    const controller = new AbortController()

    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        setLabel(await fetchLabelOnScroll(token, trackData.albumID, controller.signal))
        if (elementRef.current) observer.unobserve(elementRef.current)
      }
    }, { threshold: 1 })

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      controller.abort()
      observer.disconnect()
    }
  }, [trackData.albumID])


  return (
    <>
      <div className="track" ref={elementRef}>
        <img
          className="cover-art"
          src={trackData.cover}
          alt=""
        />
        <button
          type="button"
          className="btn play"
          onClick={() => {
            console.log('play track id:', trackData.id)
            playTrackFromPlaylist(token, playlistID, trackData.id)
          }}
        >
          &#9654;
        </button>
        <div className="track-info">
          <span>{trackData.name}</span>
          <span>{trackData.album}</span>
          <span>{trackData.artists}</span>
          <span>{label}</span>
        </div>
        <span className="duration">
          {trackData.duration}
        </span>
      </div>
    </>
  )
}