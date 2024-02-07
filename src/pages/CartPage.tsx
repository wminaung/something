"use client";
import { Box, Button } from "@mui/material";
import React from "react";

const CartPage = () => {
  const args = JSON.stringify({
    orderBy: { id: "asc" },
    select: { email: false },
  });
  const handleClick = async () => {
    const res = await fetch(`http://localhost:3000/api/user?args=${args}`);
    console.log(await res.json());
  };

  return (
    <Box>
      <Button onClick={handleClick} variant="contained">
        click
      </Button>
    </Box>
  );
};

export default CartPage;
