export default async function handler(req, res) {

  try {

    if (req.method !== "POST") {
      return res.status(405).end();
    }

    const { message } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a friendly English speaking partner." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    console.log(data); // 🔥 lihat error dari OpenAI

    if (!data.choices) {
      return res.status(500).json({ reply: "AI error: " + JSON.stringify(data) });
    }

    const reply = data.choices[0].message.content;

    res.status(200).json({ reply });

  } catch (error) {

    res.status(500).json({ reply: "Server error: " + error.message });

  }
}
