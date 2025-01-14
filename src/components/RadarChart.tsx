import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


interface SkillProps {
  data:any;
  options:any;
}

const RadarChart:React.FC<SkillProps>= ({ data, options,}) => {
  return (
    <div>
      <Radar 
      options={options}
      data={data}
      />
    </div>
  )
}

export default RadarChart;
