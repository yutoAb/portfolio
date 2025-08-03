import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      flexGrow={0}
      textAlign="center"
      py={2}
      bgcolor="#f5f5f5"
    >
      <Typography>&copy; 2024-2025 yutoAb. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
