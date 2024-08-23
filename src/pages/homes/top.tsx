import React from "react";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography  from "@mui/material/Typography";
import Button from "@mui/material/Button";

import MV from "../../assets/images/mv.jpg"
import { relative } from "path";
import SkillList from "../../components/SkillList";


const Top: React.FC = () => {
  return(
    <>
      <Box sx={{ height: "65vh", backgroundImage:"url("+ MV + ")", backgroundSize:"cover", backgroundPosition:"center", position:"relative"}}>
        <Container maxWidth='md' sx={{position:"absolute", top:"30%", left:"50%", transform:"translateX(-50%) translateY(-50%)",}}>
          <Grid container rowSpacing={2} columnSpacing={2} sx={{ textAlign:"center",color: "#FFFFFF", textShadow:" 1px 1px 10px #000000"}} >
            <Grid item xs={12} md={12}>
              <Typography component="h2" variant="h2">
                MVタイトル
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Typography component="p" variant="h5">
                おおおおおお
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Button variant="contained" size="large" sx={{ position:"absolute", bottom:"10%" ,left:"50%", transform:" translateX(-50%)"}}>
          LearnMore
        </Button>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2} textAlign={"center"}>
            <SkillList />
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Typography component="h2" variant="h2">
                Production
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: "red"}}>

              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: "red"}}>

              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: "red"}}>

              </Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Button variant="contained" size="large">
                LeatnMore
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Typography component="h2" variant="h2">
                Profile
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ height: 200, backgroundColor: "red"}}>

              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ height: 200, backgroundColor: "red"}}>
              </Box>
            </Grid>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Button variant="contained" size="large">
                LeatnMore
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container maxWidth='md'>
          <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} md={12} sx={{ textAlign: 'center'}}>
              <Typography component="h2" variant="h2">
                contact
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ height: 400, backgroundColor: "red"}}></Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Top;