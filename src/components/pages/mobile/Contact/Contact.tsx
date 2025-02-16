import { Typography, Box } from "@mui/material";
import { purple } from "../../common/Constants";

export const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: purple,
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%", marginY: "30px" }}>
        <Typography variant="h3">Contact</Typography>
        <div>Email : abe@pcl.waseda.ac.jp</div>
        <div>Instagram : @yuto_abe_</div>
      </Box>
    </Box>
  );
};
