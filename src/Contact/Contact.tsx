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
      <Typography variant="h3" sx={{ paddingTop: "100px" }}>Contact</Typography>
      <div>私は阿部です私は阿部です</div>
      <div>私は阿部です私は阿部です</div>
      <div>私は阿部です私は阿部です</div>
      <div>私は阿部です私は阿部です</div>
      <div>私は阿部です私は阿部です</div>
      <div>私は阿部です私は阿部です</div>
      <div>私は阿部です私は阿部です</div>
      <div>私は阿部です私は阿部です</div>
    </Box>
  );
};
