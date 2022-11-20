import React from "react";
import { useLocation } from 'react-router-dom';
import Histogram from 'react-chart-histogram';
import './Data.css'
const Data = () => {
  const location = useLocation();
  const labels = location.state.histogramDataRows
  const data = location.state.histogramDataCols
  const options = { fillColor: '#FFFFFF', strokeColor: '#0000FF' };
  return (
    <div className="dataDiv">
      <Histogram
          xLabels={labels}
          yValues={data}
          width='800'
          height='300'
          options={options}
      />
    </div>
    )
  }
export default Data;
