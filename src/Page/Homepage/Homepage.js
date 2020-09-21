import React, { useState } from 'react'
// component
import Form from '../../Component/Form/Form'
import ListButton from '../../Component/ListButton/ListButton'
import Feed from '../../Component/Feed/Feed'

import 'tachyons'
import './homePage.scss'

const Homepage = () => {
  const [searchData, setSearchData] = useState([])
  const [feed, setFeed] = useState()

  return (
    <div className="w-100 flex">
      <div className="w-30 flex flex-column homepage">
        <Form setSearchData={setSearchData} />

        <div className="homepage-result mt2">
          {searchData &&
            searchData.map((item) => (
              <ListButton key={item.uid} item={item} setFeed={setFeed} />
            ))}
        </div>
      </div>

      <div className="w-70 ml5 pv4" id="homapageFeed">
        {feed === 'Unknown station' ? (
          <p>There is currently no data for this station</p>
        ) : (
          feed && <Feed feed={feed} />
        )}
      </div>
    </div>
  )
}

export default Homepage
