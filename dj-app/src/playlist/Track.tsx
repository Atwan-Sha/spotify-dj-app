import { useState, useEffect, useRef } from 'react'

export default function Track({
  data,
  playTrack,
  fetchLabel,
}: {
  data: any,
  playTrack: Function,
  fetchLabel: Function,
  id: number
}) {
  // console.log('TRACK STATE', data)
  // console.log('RENDER TRACK', id)
  // const [metadata, setMetadata] = useState(data)
  const [label, setLabel] = useState(data.label)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!data.albumID) return

    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        setLabel(await fetchLabel(data.albumID))
        if (elementRef.current) observer.unobserve(elementRef.current)
      }
      // console.log(entry.isIntersecting, id)
    }, { threshold: 1 })

    if (elementRef.current) observer.observe(elementRef.current)

    return () => {
      observer.disconnect()
    }
  }, [data.albumID])


  return (
    <>
      <div className="track" ref={elementRef}>
        <img
          className="cover-art"
          src={data.cover}
          alt=""
        />
        <button
          type="button"
          className="btn play"
          onClick={() => {
            console.log('play track id:', data.id)
            playTrack(data.id)
          }}
        >
          &#9654;
        </button>
        <div className="track-info">
          <span>{data.name}</span>
          <span>{data.album}</span>
          <span>{data.artists}</span>
          <span>{label}</span>
        </div>
        <span className="duration">
          {data.duration}
        </span>
      </div>
    </>
  )
}