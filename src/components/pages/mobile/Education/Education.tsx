import { Typography, Box, Stack, Divider } from "@mui/material";
import { pink } from "../../common/Constants";

export const Education = () => {
  return (
    <Box
      sx={{
        backgroundColor: pink,
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "80%", marginY: "30px" }}>
        <Stack spacing={5}>
          <Typography variant="h3">Education</Typography>
          <Stack>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                学歴
              </Typography>
              <div>早稲田大学</div>
              <div>2021年4月～2025年3月 | 基幹理工学部 情報通信学科</div>
              <div>2025年4月～現在 | 基幹理工学研究科 情報通信専攻</div>
              <div>2024年4月～現在 | 小林・小川研究室</div>
            </Box>
            <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                スキル
              </Typography>
              <div>WEBアプリケーション制作</div>
              <div>　フロントエンド : React × TypeScript</div>
              <div>　バックエンド : Scala</div>
              <div>機械学習</div>
              <div>　Python</div>
              <div>　ツール : ESPnet</div>
              <div>資格</div>
              <div>　TOEIC : 770点</div>
              <div>WEB3分野</div>
              <div>　Smart Contract</div>
            </Box>
            <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                職歴
              </Typography>
              <div>2022年10月～2023年1月 | キャロットソフトウェア株式会社</div>
              <div>2023年2月～現在 | 日本ユースウェアシステム株式会社</div>
            </Box>
            <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                サークル
              </Typography>
              <div>パディゴルフクラブ[ゴルフサークル]</div>
              <div>　ゴルフ歴4年(2020年～)</div>
              <div>　ベストスコア : 94</div>
              <div>理工展連絡会[学園祭実行サークル]</div>
              <div>　情報局 WEB班所属</div>
              <div>　理工展連絡会のホームページの制作を行う</div>
              <div>　フロント : HTML CSS JavaScript</div>
              <div>La Neige[テニスサークル]</div>
              <div>　テニス歴5年(2019年～)</div>
              <div>早稲田うたおう会[バンドサークル]</div>
              <div>　ギター歴3年</div>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
