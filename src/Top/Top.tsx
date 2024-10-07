import { Typography, Box, Stack } from "@mui/material";
import { purple } from "../Constants";
import penguin from "../assets/penguin.png";

export const Top = () => {
  return (
    <Box
      sx={{
        backgroundColor: purple,
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Stack direction="row" spacing={10}>
        <Box
          component="img"
          src={penguin}
          alt="penguin"
          sx={{
            width: "400px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Stack spacing={2}>
          <Typography variant="h2" sx={{ paddingTop: "100px" }}>
            Yuto Abe / 阿部 雄斗
          </Typography>
          <Box>
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
      </Stack>
    </Box>
  );
};
