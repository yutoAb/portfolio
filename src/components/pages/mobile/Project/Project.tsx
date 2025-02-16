import { Typography, Box, Stack } from "@mui/material";
import { blue } from "../../common/Constants";

export const Project = () => {
  return (
    <Box
      sx={{
        backgroundColor: blue,
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%", marginY: "30px" }}>
        <Stack spacing={5}>
          <Typography variant="h3" sx={{ paddingTop: "10px" }}>
            Projects
          </Typography>
          <div>未記入です</div>
        </Stack>
      </Box>
    </Box>
  );
};
