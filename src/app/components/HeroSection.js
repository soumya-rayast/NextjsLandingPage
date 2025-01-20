"use client";

import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material"; 
const HeroButton = styled(Button)(({ theme }) => ({
  marginTop: "20px",
  padding: "12px 24px",
  fontSize: "1rem",
  transition: "background-color 0.3s"
}));

export default function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        backgroundImage: "url('path-to-your-background-image.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 20px",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Welcome to My Blog
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Stay updated with the latest articles and trends in web development.
        </Typography>
        
        {/* Icons Section */}
        <Grid container spacing={2} justifyContent="center" sx={{ marginBottom: "30px" }}>
          <Grid item>
            <AccessAlarm fontSize="large" color="primary" />
            <Typography variant="caption">Latest News</Typography>
          </Grid>
          <Grid item>
            <ThreeDRotation fontSize="large" color="primary" />
            <Typography variant="caption">Trendy Topics</Typography>
          </Grid>
        </Grid>

        {/* Buttons Section */}
        <HeroButton variant="contained" color="primary" size="large">
          Get Started
        </HeroButton>
        <Button variant="outlined" size="large" sx={{ marginLeft: "10px", marginTop: "20px" }}>
          Explore Articles
        </Button>
      </Container>
    </Box>
  );
}
