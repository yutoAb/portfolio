import { Typography, Box, Stack, Divider } from "@mui/material";
import { red } from "@mui/material/colors";
import { pink } from "../Constants";

export const Education = () => {
  return (
    <Box
      sx={{
        backgroundColor: pink,
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Typography
          variant="h3"
          sx={{ paddingTop: "100px", marginBottom: "60px" }}
        >
          Education
        </Typography>
        <Stack direction="row" spacing={10}>
          <Box>
            <Box sx={{ marginBottom: "20px" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                学歴
              </Typography>
              <div>早稲田大学</div>
              <div>2021年4月～現在　|　基幹理工学部 情報通信学科</div>
              <div>2024年4月～現在　|　小林・小川研究室</div>
            </Box>
            <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                スキル
              </Typography>
              <div>WEBアプリケーション制作</div>
              <div>　フロント : React × TypeScript</div>
              <div>　バック : Scala</div>
              <div>機械学習</div>
              <div>　Python</div>
              <div>　ツール : ESPnet</div>
              <div>資格</div>
              <div>　簿記3級</div>
              <div>　TOEIC: 770点</div>
            </Box>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "white" }}
          />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              職歴
            </Typography>
            <div>2022年10月～2023年1月　|　キャロットソフトウェア株式会社</div>
            <div>2023年2月～現在　|　日本ユースウェアシステム株式会社</div>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
