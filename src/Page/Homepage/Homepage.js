import React, { useState } from 'react'
// component
import Form from '../../Component/Form/Form'
import ListButton from '../../Component/ListButton/ListButton'

import 'tachyons'
import './homePage.scss'

const Homepage = () => {
  const [searchData, setSearchData] = useState([])

  return (
    <div className="w-100 flex flex-column justify-center homepage">
      <Form setSearchData={setSearchData} />

      <div className="w-30 homepage-result">
        {searchData &&
          searchData.map((item) => <ListButton key={item.uid} item={item} />)}
      </div>
    </div>
  )
}

export default Homepage
