import { Stack, Box } from "@mui/material";

import instagram from "../../../../assets/Instagram_Glyph_Gradient.png";
import x from "../../../../assets/logo-white.png";
import github from "../../../../assets/github-mark-white.png";

export const Sns = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Box
        component="img"
        src={instagram}
        alt="instagram"
        sx={{
          width: "18%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Box
        component="img"
        src={x}
        alt="x"
        sx={{
          width: "18%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <Box
        component="img"
        src={github}
        alt="github"
        sx={{
          width: "18%",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </Stack>
  );
};
