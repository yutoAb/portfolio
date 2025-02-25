import React, { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Class } from "@mui/icons-material";

const Classification: React.FC = () => {
  const [query, setQuery] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const fetchVideo = async () => {
    try {
      const response = await fetch(
        `https://api.sora.com/search?query=${query}`
      );
      const data = await response.json();
      setVideoUrl(data.videoUrl);
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
      <Stack spacing={2} direction="row">
        <TextField
          id="outlined-basic"
          label="Input sentences..."
          variant="outlined"
          onChange={handleInputChange}
        />
        <Button onClick={fetchVideo}>Search</Button>
        {videoUrl && (
          <div>
            <video width="600" controls>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </Stack>
    </Box>
  );
};

export default Classification;