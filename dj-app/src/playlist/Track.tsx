import { useState } from 'react'
import placeholder from '../assets/cd-cover-placeholder.jpg'

export default function Track({ data }: { data: any }) {

  return (
    <>
      <div className="track">
        <img
          className="cover-art"
          src={placeholder}
          alt=""
        />
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