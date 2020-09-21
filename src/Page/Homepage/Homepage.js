import React, { useState } from 'react';
// component
import Form from '../../Component/Form/Form';
import ListButton from '../../Component/ListButton/ListButton';
import Feed from '../../Component/Feed/Feed';

import 'tachyons';
import './homePage.scss';

const Homepage = () => {
  const [searchData, setSearchData] = useState([]);
  const [feed, setFeed] = useState();

  return (
    <div className="w-100 flex homepage">
      <div className="flex flex-column homepage-result">
        <Form setSearchData={setSearchData} setFeed={setFeed} />

        <div className="homepage-listButton mt2">
          {searchData &&
            searchData.map((item) => (
              <ListButton key={item.uid} item={item} setFeed={setFeed} />
            ))}
        </div>
      </div>

      <div
        className="flex items-baseline pv4 w-70 homepage-feed"
        id="homapageFeed"
      >
        {feed === 'Unknown station' ? (
          <p>There is currently no data for this station</p>
        ) : (
          feed && <Feed feed={feed} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
