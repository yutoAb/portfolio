import { Typography, Box, Stack, Divider } from "@mui/material";
import { pink } from "../../common/Constants";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

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
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="span">
                      2027年3月
                    </Typography>
                    <Typography>
                      早稲田大学 基幹理工学術院 <br />
                      博士前期課程
                    </Typography>
                    <Typography>情報理工・情報通信専攻</Typography>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="span">
                      2025年3月
                    </Typography>
                    <Typography>
                      早稲田大学 基幹理工学部 <br />
                      学士課程
                    </Typography>
                    <Typography>情報通信学科</Typography>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent variant="h6">2021年4月</TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
            {/* <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
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
            </Box> */}
            <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", marginBottom: "10px" }}
              >
                経歴
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
