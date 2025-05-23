import { useState } from 'react'

export default function Track({name}: {name: string}) {

    
  return (
    <>
      <div id="track">
        <p>{name}</p>
      </div>
    </>
  )
}