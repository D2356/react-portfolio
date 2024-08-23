import React from 'react'
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MV from "../../assets/images/mv.jpg"
import { relative } from "path";

import RadarChart from "./RadarChart"

const SkillList: React.FC = () => {

  const setSkillLists = [
    {
    labels: ["HTML / CSS", "SASS / SCSS", "JavaScript", "TypeScrit", "React", "Next.js"],
    datasets: [
      {
        label:'Front-End',
        data:[3, 3, 2, 2, 2, 2],
        fill:true,
        backgroudColor:'rgba(75, 192, 192, 0.2)',
        borderColor:'rgb(75, 192, 192, 1.0)',
      },
    ],
  },
  {
    labels: ["HTML / CSS", "SASS / SCSS", "JavaScript", "TypeScrit", "React", "Next.js"],
    datasets: [
      {
        label:'Front-End',
        data:[3, 3, 2, 2, 2, 2],
        fill:true,
        backgroudColor:'rgba(75, 192, 192, 0.2)',
        borderColor:'rgb(75, 192, 192, 1.0)',
      },
    ],
  },
  {
    labels:  ["HTML / CSS", "SASS / SCSS", "JavaScript", "TypeScrit", "React", "Next.js"],
    datasets: [
      {
        label:'Front-End',
        data:[3, 3, 2, 2, 2, 2],
        fill:true,
        backgroudColor:'rgba(75, 192, 192, 0.2)',
        borderColor:'rgb(75, 192, 192, 1.0)',
      },
    ],
  },
];

const setSkillChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r:{
      max: 3,
      min: 0,
      ticks: {
        stepSize: 1
      }
    }
  }
}
  return (
   <>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Typography component="h2" variant="h2">
                Skill
              </Typography>
            </Grid>
  
            {setSkillLists.map((data) => {
              return (
                <Grid item xs={12} md={4}>
                  <Box sx={{ width:"100%" , height:{xs:"400px", md:"200px",}}}>
                    <RadarChart 
                     options={setSkillChartOptions}
                     data={data}
                    />      
                  </Box>
                </Grid>
              );
            })}
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Button variant="contained" size="large">
                LeatnMore
              </Button>
            </Grid>
            </>
  )
}

export default SkillList
