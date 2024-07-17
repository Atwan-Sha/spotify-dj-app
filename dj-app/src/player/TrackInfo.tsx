import { useState, useEffect } from 'react'

export default function TrackInfo({ track }) {
  return (
    <div id="track-info">
      <img className="cover-art" src="" alt="" />
      <table>
        <tr>
          <td>Track ID</td>
          <td>Album</td>
          <td>BTN</td>
        </tr>
        <tr>
          <td>Artist(s)</td>
          <td>Release Date, Label</td>
          <td>BTN</td>
        </tr>
      </table>
    </div>
  )
}
