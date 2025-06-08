import { useState } from 'react'
// import placeholder from '../assets/cd-cover-placeholder.jpg'

export default function Track({ data }: { data: any }) {

  return (
    <>
      <div className="track">
        <img
          className="cover-art"
          // src={isActive ? data.cover : placeholder}
          src={data.cover}
          alt=""
        />
        <button
          type="button"
          className="btn play"
          onClick={() => {
            console.log('play track from playlist')
          }}
        >
          &#9654;
        </button>
        <div className="track-info">
          <span>{data.name}</span>
          <span>{data.album}</span>
          <span>{data.artist}</span>
          <span>{data.label}</span>
        </div>
        <span className="duration">
          {data.duration}
        </span>
      </div>
    </>
  )
}