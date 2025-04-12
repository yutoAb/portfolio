import { Typography, Box } from "@mui/material";
import { purple } from "../../common/Constants";
import { slideFadeIn } from "../../common/Keyframs";
import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 一度だけ発火させる
    threshold: 0.1, // 10% が見えたら発火
  });

  return (
    <Box
      sx={{
        backgroundColor: purple,
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
        <Typography
          variant="h3"
          sx={{ paddingTop: "100px", marginBottom: "30px" }}
        >
          Contact
        </Typography>
        <div>Email : abe@pcl.waseda.ac.jp</div>
        <div>Instagram : @yuto_abe_</div>
      </Box>
    </Box>
  );
};
