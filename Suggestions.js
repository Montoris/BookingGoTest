import React from 'react'
import './booking.css'

const Suggestions = (props) => {
  const options = props.results.map(r => (
      <li key={r.index}> 
        <span>{r.name} ({r.placeType})<br/>{r.region}, {r.country} </span>
      </li>
    ))
  return <ul>{options}</ul>
}

export default Suggestions