import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { getChatCompletion } from "./useChatGPT";

const Classification: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [videoUrl] = useState<string | null>(null);
  const [chatResponse, setChatResponse] = useState<string | null>("");

  useEffect(() => {
    const fetchChatResponse = async () => {
      try {
        const response = await getChatCompletion();
        setChatResponse(response);
      } catch (error) {
        console.error("Error fetching ChatGPT response:", error);
      }
    };

    fetchChatResponse();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = async () => {
    if (!query) return;

    try {
      // 仮のAPIエンドポイント（実際のAPIが必要）
      //   const response = await fetch(
      //     `https://api.sora.com/search?query=${query}`
      //   );
      //   const data = await response.json();
      //   setVideoUrl(data.videoUrl);
      console.log("1");
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  return (
    <Box width={"80%"} margin={"auto"}>
      <Typography
        variant="h3"
        sx={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        文章分類ページ
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        ChatGPTのレスポンス: {chatResponse}
      </Typography>
      <Stack spacing={2} direction="row">
        <TextField
          id="outlined-basic"
          label="Input sentences..."
          variant="outlined"
          value={query}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Stack>
      {videoUrl && (
        <Box mt={3}>
          <video width="600" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      )}
    </Box>
  );
};

export default Classification;
