import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../App.tsx'

import '../styles/Playlist.sass'

import placeholder from '../assets/cd-cover-placeholder.jpg'
import Track from './Track.tsx'

import { fetchPlaylistItems } from './apiCalls.ts'
import useApiCalls from './useApiCalls.tsx'


//* TEST DATA
const TEST_PLAYLIST_TRACKS = [
  { id: 'xxxx', cover: placeholder, name: 'Track 1', artists: 'Artist 1', album: 'Album 1', albumID: null, label: 'Label X', duration: '4:20' },
  { id: 'xxxx', cover: placeholder, name: 'Track 2', artists: 'Artist 2', album: 'Album 2', albumID: '----', label: 'Label 2', duration: '4:22' },
  { id: 'xxxx', cover: placeholder, name: 'Track 3', artists: 'Artist 3', album: 'Album 3', albumID: '----', label: 'Label 3', duration: '4:23' },
]
// const testPlaylistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep
const TEST_NR_OF_TRACKS = 500 //!important
// const TEST_PLAYLIST_TRACKS_FILL = Array(TEST_NR_OF_TRACKS).fill(TEST_PLAYLIST_TRACKS[0])
const TEST_PLAYLIST_TRACKS_FILL = Array.from({ length: TEST_NR_OF_TRACKS }, (_, i) => ({
  id: 'xxxx',
  cover: placeholder,
  name: `Track ${i}`,
  artists: `Artist ${i}`,
  album: `Album ${i}`,
  albumID: null,
  label: 'Label X',
  duration: '4:20',
}))

const ROW_HEIGHT = 55
const VISIBLE_ROWS = 12
const OVERSCAN = 6
const PAGE_SIZE = 50

export default function Playlist({ playlistID, nrOfTracks }: { playlistID: string, nrOfTracks: number }) {
  playlistID = '6tf2tushKR92emtanXaPfy' // #1 tracks playlist
  nrOfTracks = TEST_NR_OF_TRACKS

  const [scrollTop, setScrollTop] = useState(0)
  const [tracks, setTracks] = useState<any[]>([])
  const [loadedPages, setLoadedPages] = useState<Set<number>>(new Set())
  const token = useContext(UserContext)

  useEffect(() => {
    setTracks(new Array(nrOfTracks).fill(null))
  }, [nrOfTracks])

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }

  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN)
  const endIndex = Math.min(nrOfTracks, startIndex + VISIBLE_ROWS + OVERSCAN * 2)

  useEffect(() => {
    const startPage = Math.floor(startIndex / PAGE_SIZE)
    const endPage = Math.floor(endIndex / PAGE_SIZE)

    for (let page = startPage; page <= endPage; page++) {
      if (!loadedPages.has(page)) {
        fetchPage(page)
      }
    }
  }, [startIndex, endIndex])

  const fetchPage = async (page: number) => {
    setLoadedPages(p => new Set(p).add(page))
    const offset = page * PAGE_SIZE

    //* test data
    // const pageTracks = TEST_PLAYLIST_TRACKS_FILL.slice(offset, offset + PAGE_SIZE) // Test data
    // await new Promise(r => setTimeout(r, 1000))
    //* actual api call
    const controller = new AbortController()
    const pageTracks = await fetchPlaylistItems(token, controller.signal, playlistID, offset, PAGE_SIZE)
    controller.abort()
    // console.log('FETCH: ', offset, page, pageTracks)

    setTracks(prev => {
      const copy = [...prev]
      pageTracks.forEach((track: any, i: number) => {
        copy[offset + i] = track
      })
      return copy
    })
  }

  // const { data, loading, error } = useApiCalls(fetchPlaylistItems, [playlistID])
  // console.log('fetch returns: ', data, loading, error)

  // if (loading) {
  //   return (
  //     <>
  //       <div className="playlist">
  //         <p>Loading...</p>
  //       </div>
  //     </>
  //   )
  // }

  // if (error) {
  //   // console.log('Error: ', error.message)
  //   return (
  //     <>
  //       <div className="playlist">
  //         <p>Error: {error.message}</p>
  //       </div>
  //     </>
  //   )
  // }

  // if (!data) return null

  // return (
  //   <>
  //     <div className="playlist">
  //       {data.map((data: any, i: number) => (
  //         <Track
  //           trackData={data}
  //           playlistID={playlistID}
  //           key={i}
  //           id={i}
  //         />))}
  //     </div>
  //   </>
  // )

  //*LAZY LOAD TEST
  return (
    <div onScroll={onScroll} className="playlist">
      <div className="hidden-list-full" style={{ height: `${nrOfTracks * ROW_HEIGHT}px` }} />
      <div className="visible-list" style={{ top: `${startIndex * ROW_HEIGHT}px` }}>
        {tracks.slice(startIndex, endIndex).map((track, i) => {
          const index = startIndex + i
          return track ? (
            <Track
              trackData={track}
              playlistID={playlistID}
              key={index}
              id={i}
            />
          ) : (
            <TrackLoading key={index} />
          )
        })}
      </div>
    </div>
  )
}

function TrackLoading() {
  return (
    <div className="track">
      <img
        className="cover-art"
        src={placeholder}
        alt=""
      />
      <div className="track-info">
        <span>-</span>
        <span>-</span>
        <span>-</span>
        <span>-</span>
      </div>
      <span className="duration">
        -
      </span>
    </div>
  )
}