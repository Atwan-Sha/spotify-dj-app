import '../styles/Playlist.sass'
// import placeholder from '../assets/cd-cover-placeholder.jpg'
import Track from './Track.tsx'

import { fetchPlaylistItems } from './apiCalls.ts'
import useApiCalls from './useApiCalls.tsx'

//* TEST DATA
// const testTrackArr = [
//   { id: 'xxxx', cover: placeholder, name: 'Track 1', artists: 'Artist 1', album: 'Album 1', albumID: null, label: 'Label X', duration: '4:20' },
//   { id: 'xxxx', cover: placeholder, name: 'Track 2', artists: 'Artist 2', album: 'Album 2', albumID: '----', label: 'Label 2', duration: '4:22' },
//   { id: 'xxxx', cover: placeholder, name: 'Track 3', artists: 'Artist 3', album: 'Album 3', albumID: '----', label: 'Label 3', duration: '4:23' },
// ]
// const largeTestTrackArr = Array(50).fill(testTrackArr[0])
// const testPlaylistID = '1xdi2SUZ0LaH6Al71Gs7nH' // DJprep

export default function Playlist({ playlistID }: { playlistID: string }) {
  const { data, loading, error } = useApiCalls(fetchPlaylistItems, [playlistID])
  // console.log('fetch returns: ', data, loading, error)

  if (loading) {
    return (
      <>
        <div className="playlist">
          <p>Loading...</p>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <div className="playlist">
          <p>Error: {error.message}</p>
        </div>
      </>
    )
  }

  if (!data) return null

  return (
    <>
      <div className="playlist">
        {data.map((data: any, i: number) => (
          <Track
            trackData={data}
            playlistID={playlistID}
            key={i}
            id={i}
          />))}
      </div>
    </>
  )
}