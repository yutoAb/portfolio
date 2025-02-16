import { Typography, Box, Stack } from "@mui/material";
import { purple } from "../../common/Constants";
import penguin from "../../../../assets/penguin.png";

export const Top = () => {
  return (
    <Box
      sx={{
        backgroundColor: purple,
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
      }}
    >
      <Stack spacing={6}>
        <Stack direction="row" spacing={3}>
          <Box
            component="img"
            src={penguin}
            alt="penguin"
            sx={{
              width: "40%",
              height: "auto",
              objectFit: "contain",
            }}
          />
          <Typography variant="h3">
            Yuto Abe <br /> 阿部 雄斗
          </Typography>
        </Stack>
        <Box>
          <div>皆さん初めまして．阿部 雄斗（アベ ユウト）と申します．</div>
          <br />
          <div>
            早稲田大学
            情報通信学科の小林・小川研究室に所属させていただいている修士１年生です．
          </div>
          <div>
            研究内容としては，機械学習を用いた音声認識モデルの精度向上を目指して取り組んでいます．
          </div>
          <br />
          <div>
            また長期インターンでは日本ユースウェアシステム株式会社で，WEBアプリの開発をさせていただいています．
          </div>
          <div>
            フロントでは React×TypeScript，バックでは Scalaを触っています．
          </div>
          <br />
          <div>趣味はマンガとゴルフです．</div>
          <div>
            不格好なホームページですが，人となりを知っていただければ幸いです．
          </div>
        </Box>
      </Stack>
    </Box>
  );
};
