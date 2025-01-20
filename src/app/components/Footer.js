"use client";

import { Box, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"; 

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <Typography variant="body2" sx={{ marginBottom: "10px" }}>
        © 2025 My Blog. All Rights Reserved.
      </Typography>

      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <IconButton component={Link} href="#" color="inherit" aria-label="facebook">
          <Facebook />
        </IconButton>
        <IconButton component={Link} href="#" color="inherit" aria-label="twitter">
          <Twitter />
        </IconButton>
        <IconButton component={Link} href="#" color="inherit" aria-label="instagram">
          <Instagram />
        </IconButton>
        <IconButton component={Link} href="#" color="inherit" aria-label="linkedin">
          <LinkedIn />
        </IconButton>
      </Box>

      {/* Additional Links */}
      <Box sx={{ marginTop: "10px" }}>
        <Link href="#" sx={{ mx: 1, textDecoration: "none", color: "text.secondary" }}>
          About
        </Link>
        |
        <Link href="#" sx={{ mx: 1, textDecoration: "none", color: "text.secondary" }}>
          Privacy Policy
        </Link>
        |
        <Link href="#" sx={{ mx: 1, textDecoration: "none", color: "text.secondary" }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
}
