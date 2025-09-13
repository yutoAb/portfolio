import { Typography, Box, Stack, TextField, Button } from "@mui/material";
import { purple } from "../Constants";
import { slideFadeIn } from "../Keyframs";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { WhiteTextField } from "./WhiteTextField";

export const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // 一度だけ発火させる
    threshold: 0.1, // 10% が見えたら発火
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    const { name, email, subject, message } = form;

    const user = "yuto27abe";
    const domain = "gmail.com";
    const to = `${user}@${domain}`;

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(
      `${subject}`
    )}&body=${encodeURIComponent(
      `お名前：${name}\nメールアドレス：${email}\n\nお問い合わせ内容：\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <Box
      sx={{
        backgroundColor: purple,
        padding: "20px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Box
        ref={ref}
        sx={{
          width: { xs: "100%", md: "80%" },
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(50px)",
          animation: inView ? `${slideFadeIn} 1s ease-out` : "none",
          transition: "all 0.5s ease-out",
        }}
      >
        <Typography
          variant="h3"
          sx={{ paddingTop: "100px", marginBottom: "30px" }}
        >
          Contact
        </Typography>

        <Stack
          spacing={3}
          maxWidth={600}
          width="100%"
          sx={{
            mx: { xs: "auto", md: 0 },
          }}
        >
          <WhiteTextField
            label="お名前"
            value={form.name}
            field="name"
            onChange={(field, value) => setForm({ ...form, [field]: value })}
          />

          <WhiteTextField
            label="メールアドレス"
            field="email"
            type="email"
            value={form.email}
            onChange={(field, value) => setForm({ ...form, [field]: value })}
          />

          <WhiteTextField
            label="件名"
            field="subject"
            type="subject"
            value={form.subject}
            onChange={(field, value) => setForm({ ...form, [field]: value })}
          />

          <WhiteTextField
            label="お問い合わせ内容"
            field="message"
            multiline
            rows={5}
            value={form.message}
            onChange={(field, value) => setForm({ ...form, [field]: value })}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ width: "150px", alignSelf: "center" }}
          >
            送信
          </Button>
        </Stack>
        <Box textAlign="center" mt={2}></Box>
      </Box>
    </Box>
  );
};
