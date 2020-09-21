import React, { useEffect } from 'react';
import axios from 'axios';
// component
import Button from '../Button/Button';

import 'tachyons';

const ListButton = ({ item, setFeed }) => {
  const {
    uid,
    aqi,
    station: { name },
  } = item;

  useEffect(() => {
    if (!aqi) {
      return false;
    } else {
      const btn = document.getElementById(uid);

      if (aqi <= 50) {
        btn.style.backgroundColor = '#009966';
      } else if (aqi > 50 && aqi <= 100) {
        btn.style.backgroundColor = '#ffde33bf';
        btn.style.color = '#000';
      } else if (aqi > 100 && aqi <= 150) {
        btn.style.backgroundColor = '#ff9933bf';
      } else if (aqi > 150 && aqi <= 200) {
        btn.style.backgroundColor = '#cc0033bf';
      } else if (aqi > 200 && aqi <= 300) {
        btn.style.backgroundColor = '#660099bf';
      } else if (aqi > 300) {
        btn.style.backgroundColor = '#7e0023';
      } else {
        btn.style.color = '#000';
      }
    }
  }, [aqi, uid]);

  const handleClick = async (e) => {
    e.preventDefault();

    const homepageFeed = document.getElementById('homapageFeed');
    homepageFeed.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    try {
      const fetchUrl = await axios.get(
        `http://api.waqi.info/feed/${name}/?token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8`
      );

      const fetchData = await fetchUrl.data;
      const data = fetchData.data;

      setFeed(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <Button name={name} uid={uid} handleClick={handleClick} />;
};

export default ListButton;
