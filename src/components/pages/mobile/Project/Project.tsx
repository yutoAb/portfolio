import { Typography, Box, Stack } from "@mui/material";
import { blue } from "../../common/Constants";
import movie from "../../../../assets/卒業論文研究紹介動画.mp4";

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
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            卒業論文
          </Typography>
          <video src={movie} controls style={{ width: "100%" }} />
        </Stack>
      </Box>
    </Box>
  );
};
