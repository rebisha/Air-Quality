import React, { useState } from 'react'
import axios from 'axios'

import 'tachyons'
import './form.scss'

const Form = ({ setSearchData }) => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const fetchUrl = await axios.get(
        `http://api.waqi.info/search/?keyword=${search}&token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`
      )

      const fetchData = await fetchUrl.data
      const data = fetchData.data
      setSearchData(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="flex form w-30 justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        placeholder="Search for a city"
        className="br1 br--top br--left ba b--light-gray ph3 pv2 w-100 form-input"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="b--none flex items-center pa3 form-button"
      >
        <span role="img" aria-label="search">
          🕵️
        </span>
      </button>
    </form>
  )
}

export default Form
