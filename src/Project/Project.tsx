import { Typography, Box,Stack } from "@mui/material";
import { blue } from "../Constants";

export const Project = () => {
  return (
    <Box
      sx={{
        backgroundColor: blue,
        padding: "20px",
        color: "white",
        minHeight: "100vh", 
      }}
    >
      <Stack spacing={5}>
      <Typography variant="h3" sx={{ paddingTop: "100px" }}>Projects</Typography>
        <div>未記入です</div>
        </Stack>
    </Box>
  );
};
