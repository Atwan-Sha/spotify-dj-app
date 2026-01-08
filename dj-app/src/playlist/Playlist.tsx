import { useState, useEffect } from 'react'

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
const TEST_NR_OF_TRACKS = 24 //!important
const TEST_PLAYLIST_TRACKS_FILL = Array(TEST_NR_OF_TRACKS).fill(TEST_PLAYLIST_TRACKS[0])
// const testPlaylistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep


const ROW_HEIGHT = 55
const PAGE_SIZE = 100
const VISIBLE_ROWS = 12
const LIST_HEIGHT = ROW_HEIGHT * VISIBLE_ROWS
const OVERSCAN = 10

export default function Playlist({ playlistID, nrOfTracks }: { playlistID: string, nrOfTracks: number }) {
  nrOfTracks = TEST_NR_OF_TRACKS
  const [tracks, setTracks] = useState<(Track | null)[]>([])
  const [loadedPages, setLoadedPages] = useState<Set<number>>(new Set())
  const [scrollTop, setScrollTop] = useState(0)
  // const totalHeight = nrOfTracks * ROW_HEIGHT

  useEffect(() => {
    setTracks(new Array(nrOfTracks).fill(null))
  }, [nrOfTracks])

  const onScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
    console.log('scrollTop:', e.currentTarget.scrollTop)
    console.log('startIndex:', startIndex, 'endIndex:', endIndex)
  }

  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN)
  const endIndex = Math.min(nrOfTracks, startIndex + VISIBLE_ROWS + OVERSCAN * 2)

  useEffect(() => {
    const startPage = Math.floor(startIndex / PAGE_SIZE)
    const endPage = Math.floor(endIndex / PAGE_SIZE)

    // for (let page = startPage; page <= endPage; page++) {
    //   if (!loadedPages.has(page)) {
    //     fetchPage(page)
    //   }
    // }
  }, [startIndex, endIndex])

  async function fetchPage(page: number) {
    // setLoadedPages(p => new Set(p).add(page))

    // const offset = page * PAGE_SIZE
    // const res = await fetchTracks(offset) // Spotify API
    // const pageTracks = res.items

    // setTracks(prev => {
    //   const copy = [...prev]
    //   pageTracks.forEach((track, i) => {
    //     copy[offset + i] = track
    //   })
    //   return copy
    // })
  }

  const listOffset = () => {
    const offset = startIndex * ROW_HEIGHT
    const total = nrOfTracks * ROW_HEIGHT
    console.log('listOffset:', offset, 'total:', total)
    // return offset < total ? offset : total
    // return total - scrollTop
    return 0
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
      {/* <div className="hidden-list-full" style={{ height: `${nrOfTracks * ROW_HEIGHT}px` }} /> */}
      <div className="visible-list" style={{ top: `${listOffset()}px` }}>
        {TEST_PLAYLIST_TRACKS_FILL.map((data: any, i: number) => (
          <Track
            trackData={data}
            playlistID={playlistID}
            key={i}
            id={i}
          />
        ))}

        {/* {tracks.slice(startIndex, endIndex).map((track, i) => {
            const index = startIndex + i

            return track ? (
              <TrackRow key={index} track={track} />
            ) : (
              <TrackRowSkeleton key={index} />
            )
          })} */}

      </div>
    </div>
  )
  //*LAZY LOAD TEST


}