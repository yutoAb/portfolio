import { Typography, Box, Stack } from "@mui/material";
import { blue } from "../../common/Constants";
import { slideFadeIn } from "../../common/Keyframs";
import { useInView } from "react-intersection-observer";

export const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 一度だけ発火させる
    threshold: 0.1, // 10% が見えたら発火
  });

  return (
    <Box
      sx={{
        backgroundColor: blue,
        padding: "20px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Box
        ref={ref}
        sx={{
          width: "80%",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(50px)",
          animation: inView ? `${slideFadeIn} 1s ease-out` : "none",
          transition: "all 0.5s ease-out",
        }}
      >
        <Stack spacing={5}>
          <Typography variant="h3" sx={{ paddingTop: "100px" }}>
            Projects
          </Typography>
          <div>未記入です</div>
        </Stack>
      </Box>
    </Box>
  );
};
