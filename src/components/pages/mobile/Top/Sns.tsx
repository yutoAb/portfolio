import { Stack, Box } from "@mui/material";

import instagram from "../../../../assets/Instagram_Glyph_White.png";
import x from "../../../../assets/logo-white.png";
import github from "../../../../assets/github-mark-white.png";
import linkin from "../../../../assets/InBug-White.png";
export const Sns = () => {
  return (
    <Stack spacing={2} direction={"row"} alignItems={"center"}>
      <Box
        component="a"
        href="https://www.instagram.com/yuto_abe_"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ width: "15%" }}
      >
        <Box
          component="img"
          src={instagram}
          alt="instagram"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        component="a"
        href="https://twitter.com/ReactYuto"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ width: "13%" }}
      >
        <Box
          component="img"
          src={x}
          alt="x"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        component="a"
        href="https://github.com/yutoAb"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ width: "15%" }}
      >
        <Box
          component="img"
          src={github}
          alt="github"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        component="a"
        href="https://linkedin.com/in/yutoAb"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ width: "15%" }}
      >
        <Box
          component="img"
          src={linkin}
          alt="linkin"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </Box>
    </Stack>
  );
};
