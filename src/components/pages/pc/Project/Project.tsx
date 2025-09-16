import { Typography, Box, Stack, Divider } from "@mui/material";
import { blue } from "../../common/Constants";
import { slideFadeIn } from "../../common/Keyframs";
import { useInView } from "react-intersection-observer";
import movie from "../../../../assets/卒業論文研究紹介動画.mp4";
import { SimpleDialog } from "./SimpleDialog";
import { useState } from "react";
import { interactiveBoxStyle } from "./style";
import { PortfolioItem, portfolioItems } from "./PortfolioItem";

export const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 一度だけ発火させる
    threshold: 0.1, // 10% が見えたら発火
  });
  const [open, setOpen] = useState(false);
  const [selectedApp, setSelectedApp] = useState<PortfolioItem | null>(null);

  const handleOpen = (item: PortfolioItem) => {
    setSelectedApp(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

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
          <Stack direction={"row"} spacing={10}>
            <Box sx={{ width: "50%", boxSizing: "border-box" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                卒業論文
              </Typography>
              <video src={movie} controls style={{ width: "100%" }} />
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ backgroundColor: "white" }}
            />

            <Box sx={{ width: "50%", boxSizing: "border-box" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                ポートフォリオ
              </Typography>

              <Stack spacing={2}>
                {portfolioItems.map((item, index) => (
                  <Box
                    key={index}
                    onClick={() => handleOpen(item)}
                    sx={interactiveBoxStyle}
                  >
                    {item.title}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>

      {selectedApp && (
        <SimpleDialog
          open={open}
          handleClose={handleClose}
          title={selectedApp.title}
          content={selectedApp.description}
          link={selectedApp.link}
        />
      )}
    </Box>
  );
};
