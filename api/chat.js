export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "No message received" });
  }

  const reply = "Hello! You said: " + message;

  res.status(200).json({ reply });
}
