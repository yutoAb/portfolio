import { Typography, Box, Stack } from "@mui/material";
import { red } from "@mui/material/colors";
import { pink } from "../Constants";

export const Education = () => {
  return (
    <Box
      sx={{
        backgroundColor: pink,
        padding: "20px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" sx={{ paddingTop: "100px" }}>
        Education
      </Typography>
      <Stack direction="row" spacing={10}>
        <Box>
          <Box>
            <div>学歴</div>
            <div>早稲田大学</div>
            <div>2021年4月～現在　|　基幹理工学部 情報通信学科</div>
            <div>2024年4月～現在　|　小林・小川研究室</div>
          </Box>
          <Box>
            <div>スキル</div>
            <div>WEBアプリケーション制作</div>
            <div>フロント : React × TypeScript</div>
            <div>バック : Scala</div>
            <div>機械学習</div>
            <div>Python</div>
            <div>ツール : ESPnet</div>
          </Box>
        </Box>
        <Box>
          <div>職歴</div>
          <div>2022年10月～2023年1月　|　キャロットソフトウェア株式会社</div>
          <div>2023年2月～現在　|　日本ユースウェアシステム株式会社</div>
        </Box>
      </Stack>
    </Box>
  );
};
