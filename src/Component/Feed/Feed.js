import React from 'react';

import 'tachyons';
import './feed.scss';

const Feed = ({ feed }) => {
  const {
    idx,
    aqi,
    city: { name, geo, url },
    attributions,
  } = feed;

  return (
    <div className="ba b--light-gray br1 ph3 feed" key={idx}>
      <div className="pv2 flex justify-between">
        <a
          className="black fw7 feed-name"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <span className="f6">
          ({geo[0].toFixed(4)}, {geo[1].toFixed(4)})
        </span>
      </div>
      <div className="h4 pv2 flex justify-center items-center f1">{aqi}</div>
      <div className="f7 pv2">
        {attributions.map(({ url, name }) => (
          <div className="flex justify-between pv1" key={name}>
            <a
              className="f6 blue feed-url"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
