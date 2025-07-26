import { Typography, Box, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { purple } from "../../common/Constants";
import yutoAb from "../../../../assets/2024_阿部雄斗.png";
import { Sns } from "../../common/Sns";
import { slideFadeIn } from "../../common/Keyframs";

export const Top = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("md"));

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
      <Stack direction="row" spacing={10}>
        <Box
          component="img"
          src={yutoAb}
          alt="yutoAb"
          sx={{
            width: "300px",
            height: "auto",
            objectFit: "contain",
          }}
        />
        <Stack
          spacing={5}
          sx={{
            animation: `${slideFadeIn} 1s ease-out`,
          }}
        >
          <Typography variant={isXs ? "h4" : "h2"}>
            Yuto Abe / 阿部 雄斗
          </Typography>
          <Box
            sx={{
              width: "300px",
              height: "auto",
              objectFit: "contain",
            }}
          >
            <Sns />
          </Box>
          <Box>
            <div>皆さん初めまして．阿部 雄斗（アベ ユウト）と申します．</div>
            <br />
            <div>
              早稲田大学
              情報通信学科の小林・小川研究室に所属させていただいている修士１年生です．
            </div>
            <div>
              研究内容としては，機械学習を用いた音声認識モデル・音声対話モデルの構築に取り組んでいます．
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
      </Stack>
    </Box>
  );
};
