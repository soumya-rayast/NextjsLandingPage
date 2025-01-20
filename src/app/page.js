"use client";

import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BlogCard from "./components/BlogCard";
import Footer from "./components/Footer";


export default function HomePage() {
  // Sample Blog Posts Data
  const blogPosts = [
    {
      title: "Understanding React",
      description: "A deep dive into the world of React.js and its ecosystem.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "JavaScript Essentials",
      description: "Key concepts every JavaScript developer should know.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Web Development Trends",
      description: "Latest trends and technologies shaping web development.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Building with MUI",
      description: "Learn how to build responsive UIs using Material-UI.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <Box>
      <Navbar />
      <HeroSection />

      {/* Main Content */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Latest Blogs
        </Typography>
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogCard title={post.title} description={post.description} image={post.image} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}
