import React from 'react';

import 'tachyons';
import './aqindex.scss';

const AQIndex = () => {
  return (
    <div className="aqindex bg-light-gray pa2 f6 flex flex-column flex-wrap justify-end">
      <h4 className="aqindex-title mt0">Air Quality Index</h4>

      <div className="aqindex-index__wrapper flex flex-column">
        <div className="aqindex-index__item flex items-center">
          <div className="aqindex-index aqindex-good bg-green white">
            0 - 50
          </div>
          Good
        </div>
        <div className="aqindex-index__item flex items-center">
          <div className="aqindex-index aqindex-moderate black bg-yellow">
            50 - 100
          </div>
          Moderate
        </div>
        <div className="aqindex-index__item flex items-center">
          <div className="aqindex-index aqindex-unhealthy__sensitive white">
            100 - 150
          </div>
          Unhealthy for sensitive groups
        </div>
        <div className="aqindex-index__item flex items-center">
          <div className="aqindex-index aqindex-unhealthy white">150 - 200</div>
          Unhealthy
        </div>
        <div className="aqindex-index__item flex items-center">
          <div className="aqindex-index aqindex-unhealthy__very white">
            200 - 300
          </div>
          Very Unhealthy
        </div>
        <div className="aqindex-index__item flex items-center">
          <div className="aqindex-index aqindex-hazardous white">> 300</div>
          Hazardous
        </div>
      </div>
    </div>
  );
};

export default AQIndex;
