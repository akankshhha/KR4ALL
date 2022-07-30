import { Line } from '@ant-design/plots';
import React from 'react';
import InfoCard from "./InfoCard"
import {myGraphData} from "../Data"

const ConsultationHistory = () => {

  const config = {
    data: myGraphData,
    xField: 'date',
    yField: 'value',
    seriesField: 'category',
    color: ['#1979C9', '#D62A0D', '#FAA219']
  };
  
  return (
    <InfoCard message = {<Line {...config} className="p-3"/>}
      cardHeading = "consultation history"  
      mainClassName= "graphCard m-4 p-2"    />

  )
}
export default ConsultationHistory