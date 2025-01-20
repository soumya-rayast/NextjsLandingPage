"use client";

import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

export default function BlogCard({ title, description, image, buttonLabel = "Read More" }) {
  return (
    <StyledCard sx={{ maxWidth: "100%", height: "100%" }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" fullWidth>
          {buttonLabel}
        </Button>
      </Box>
    </StyledCard>
  );
}