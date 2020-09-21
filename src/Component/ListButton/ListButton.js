import React, { useEffect } from 'react'
// component
import Button from '../Button/Button'

import 'tachyons'
import './listButton.scss'

const ListButton = ({ item }) => {
  const {
    uid,
    aqi,
    station: { name, url },
  } = item

  useEffect(() => {
    if (!aqi) {
      return false
    } else {
      const btn = document.getElementById(uid)

      if (aqi <= 50) {
        btn.style.backgroundColor = '#009966'
      } else if (aqi > 50 && aqi <= 100) {
        btn.style.backgroundColor = '#ffde33bf'
        btn.style.color = '#000'
      } else if (aqi > 100 && aqi <= 150) {
        btn.style.backgroundColor = '#ff9933bf'
      } else if (aqi > 150 && aqi <= 200) {
        btn.style.backgroundColor = '#cc0033bf'
      } else if (aqi > 200 && aqi <= 300) {
        btn.style.backgroundColor = '#660099bf'
      } else if (aqi > 300) {
        btn.style.backgroundColor = '#7e0023'
      } else {
        btn.style.color = '#000'
      }
    }
  }, [aqi, uid])

  return <Button name={name} url={`https://aqicn.org/city/${url}`} uid={uid} />
}

export default ListButton
