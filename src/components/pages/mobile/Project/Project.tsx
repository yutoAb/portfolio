import { Typography, Box, Stack } from "@mui/material";
import { blue } from "../../common/Constants";
import movie from "../../../../assets/卒業論文研究紹介動画.mp4";
import { portfolioItems, PortfolioItem } from "../../pc/Project/PortfolioItem";
import { useState } from "react";
import { interactiveBoxStyle } from "../../pc/Project/style";
import { SimpleDialog } from "../../pc/Project/SimpleDialog";

export const Project = () => {
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
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%", marginY: "30px" }}>
        <Stack spacing={5}>
          <Typography variant="h3" sx={{ paddingTop: "10px" }}>
            Projects
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            卒業論文
          </Typography>
          <video src={movie} controls style={{ width: "100%" }} />
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
