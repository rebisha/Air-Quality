import React from 'react'

import 'tachyons'
import './aqindex.scss'

const AQIndex = () => {
  return (
    <div className="aqindex f6 flex flex-wrap items-center white justify-end">
      <span className="aqindex-index aqindex-aqi bg-light-gray black">
        Air Quality Index
      </span>
      <span className="aqindex-index aqindex-good bg-green">Good</span>
      <span className="aqindex-index aqindex-moderate black bg-yellow">
        Moderate
      </span>
      <span className="aqindex-index aqindex-unhealthy__sensitive">
        Unhealthy for sensitive groups
      </span>
      <span className="aqindex-index aqindex-unhealthy">Unhealthy</span>
      <span className="aqindex-index aqindex-unhealthy__very">
        Very Unhealthy
      </span>
      <span className="aqindex-index aqindex-hazardous">Hazardous</span>
    </div>
  )
}

export default AQIndex
