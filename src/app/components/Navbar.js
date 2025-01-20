"use client";

import { AppBar, Box, Toolbar, Typography, IconButton, InputBase } from "@mui/material";
import { styled } from "@mui/system";
import { Search } from "@mui/icons-material";

const SearchInput = styled(InputBase)(({ theme }) => ({
  padding: "0 10px",
  border: "1px solid lightgray", 
  borderRadius: "4px",
  color: "lightgray",
  flex: 1,
}));

export default function Navbar() {
  return (
    <AppBar position="sticky" color="primary" sx={{ boxShadow: "none", padding: "0 16px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Brand Name */}
        <Typography variant="h6">My Blog</Typography>

        {/* Search Box */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1, maxWidth: "400px", mx: 2 }}>
          <SearchInput placeholder="Search..." />
          <IconButton color="inherit">
            <Search />
          </IconButton>
        </Box>

        {/* User Icon */}
        <Box
          sx={{
            width: 40,
            height: 40,
            backgroundColor: "black",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1rem",
          }}
        >
          J
        </Box>
      </Toolbar>
    </AppBar>
  );
}
