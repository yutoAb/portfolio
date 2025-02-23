import { Typography, Box, Stack, Button } from "@mui/material";
import { blue } from "../../common/Constants";
import { Link } from "react-router-dom";

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
        <Typography variant="h3" sx={{ paddingTop: "100px" }}>
          Projects
        </Typography>
        <div>未記入です</div>
        <Button variant="contained" size="large" component={Link} to="movie" color={"info"}>
          動画生成ページ
        </Button>
      </Stack>
    </Box>
  );
};
