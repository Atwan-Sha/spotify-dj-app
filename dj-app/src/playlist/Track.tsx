import { useState } from 'react'

export default function Track({ data }: { data: any }) {


  return (
    <>
      <div id="track">
        <p>{data}</p>
      </div>
    </>
  )
}