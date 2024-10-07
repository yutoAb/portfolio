import { Typography, Box, Stack } from "@mui/material";
import { purple } from "../Constants";
import penguin from "../assets/penguin.png";

export const Top = () => {
  return (
    <Box
      sx={{
        backgroundColor: purple,
        padding: "20px",
        color: "white",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          src={penguin}
          alt="penguin"
          sx={{
            width: "200px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Box>
          <Typography variant="h2" sx={{ paddingTop: "100px" }}>
            Yuto Abe / 阿部 雄斗
          </Typography>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
          <div>私は阿部です私は阿部です</div>
        </Box>
      </Stack>
    </Box>
  );
};
