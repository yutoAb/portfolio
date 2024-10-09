import { Typography, Box } from "@mui/material";
import { purple } from "../Constants";

export const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor:purple,
        padding: "20px",
        color: "white",
        minHeight: "100vh", 
      }}
    >
      <Typography variant="h3" sx={{ paddingTop: "100px", marginBottom: "30px" }}>Contact</Typography>
      <div>Email : abe@pcl.waseda.ac.jp</div>
      <div>Instagram : @yuto_abe_</div>
    </Box>
  );
};
