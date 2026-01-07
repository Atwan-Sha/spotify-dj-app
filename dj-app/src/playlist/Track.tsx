import { useState, useEffect, useRef, useContext } from 'react'
import { UserContext } from '../App.tsx'
import { playTrackFromPlaylist, fetchLabelOnScroll } from './apiCalls'

export default function Track({ trackData, playlistID }: { trackData: any, playlistID: string, id: number }) {
  const [linkTest, setLinkTest] = useState<null | string>(null)
  const [label, setLabel] = useState('Label')
  const elementRef = useRef<HTMLDivElement>(null)
  const token = useContext(UserContext)

  //* IntersectionObserver to lazy load label
  useEffect(() => {
    if (!trackData.albumID) return
    const controller = new AbortController()

    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        setLabel(await fetchLabelOnScroll(token, controller.signal, trackData.albumID))
        if (elementRef.current) observer.unobserve(elementRef.current)
      }
    }, { threshold: 1 })

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      controller.abort()
      observer.disconnect()
    }
  }, [trackData.albumID])

  const goToMetadataItem = () => {
    linkTest === null ? setLinkTest('link test') : setLinkTest(null)
  }

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
            // console.log('play track id:', trackData.id)
            playTrackFromPlaylist(token, playlistID, trackData.id)
          }}
        >
          &#9654;
        </button>
        <div className="track-info">
          <span>{trackData.name}</span>
          <span>{trackData.album}</span>
          <span>{trackData.artists}</span>
          {/* <span onClick={goToMetadataItem}>{linkTest === null ? trackData.artists : linkTest}</span> */}
          <span>{label}</span>
        </div>
        <span className="duration">
          {trackData.duration}
        </span>
      </div>
    </>
  )
}