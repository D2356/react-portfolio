import React from "react";
import Appbar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";



const Footer: React.FC = () => {
  return (
    <>
      <Appbar component="footer" position="static" sx={{ backgroundColor: '#000000'}}>
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center'}}>
            <Typography variant="caption">
              @2024-08-22  
            </Typography>
            </Box>
        </Container>
      </Appbar>
    </>
  );
};

export default Footer;


