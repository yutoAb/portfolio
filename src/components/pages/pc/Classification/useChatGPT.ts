import OpenAI from "openai";

const openai = new OpenAI();

const apiKey = "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";

async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "Say this is a test" }],
        store: true,
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();