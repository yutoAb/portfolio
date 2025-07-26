import { Typography, Box, Stack } from "@mui/material";
import { blue } from "../../common/Constants";
import { slideFadeIn } from "../../common/Keyframs";
import { useInView } from "react-intersection-observer";
import movie from "../../../../assets/卒業論文研究紹介動画.mp4";
import { SimpleDialog } from "./SimpleDialog";
import { useState } from "react";
import { interactiveBoxStyle } from "./style";

export const Project = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 一度だけ発火させる
    threshold: 0.1, // 10% が見えたら発火
  });

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
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
          <Stack direction={"row"} spacing={5}>
            <Box sx={{ width: "50%", boxSizing: "border-box" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                卒業論文
              </Typography>
              <video src={movie} controls style={{ width: "100%" }} />
            </Box>
            <Box sx={{ width: "50%", boxSizing: "border-box" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                ポートフォリオ
              </Typography>
              <Stack spacing={2}>
                <Box onClick={handleOpen} sx={interactiveBoxStyle}>
                  To Do アプリ(App Engineでデプロイ)
                </Box>
                <Box onClick={handleOpen} sx={interactiveBoxStyle}>
                  父の会社のホームページ
                </Box>
                <Box onClick={handleOpen} sx={interactiveBoxStyle}>
                  To Do アプリ(Cloud Run + Cloud SQLでデプロイ)
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <SimpleDialog
        open={open}
        handleClose={handleClose}
        title={"To Do アプリ"}
        content={
          "ReactとTypeScriptで作成したタスク管理アプリです。App Engine の /tmp に保存しているので，一定時間後にToDo データはすべて消えてしまいます。"
        }
        link={"https://karu-web-taupe.vercel.app/"}
      />
    </Box>
  );
};
