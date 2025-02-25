// import OpenAI from "openai";

const apiKey =
  "";

// const openai = new OpenAI({
//   apiKey: apiKey,
//   dangerouslyAllowBrowser: true, // クライアントサイドで使う場合は必要
// });

export async function getChatCompletion() {
  if (!apiKey) {
    throw new Error(
      "API key is missing. Set the OPENAI_API_KEY environment variable."
    );
  }

  const url = "https://api.openai.com/v1/chat/completions";

  const requestBody = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "What is the OpenAI mission?" }],
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Chat Completion Response:", data);
    console.log(response.headers.get("x-ratelimit-limit")); // 最大リクエスト数
    console.log(response.headers.get("x-ratelimit-remaining")); // 残りのリクエスト数
    console.log(response.headers.get("x-ratelimit-reset")); // 制限解除の時間

    return data;
  } catch (error) {
    console.error("Error fetching chat completion:", error);
  }
}
