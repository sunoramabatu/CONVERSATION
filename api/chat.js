export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};

  if (!message) {
    return res.status(400).json({ error: "No message received" });
  }

  let reply;

    if (message.toLowerCase().includes("how are you")) {
      reply = "I'm great! Nice to talk with you. How about you?";
    }
    else if (message.toLowerCase().includes("hello")) {
      reply = "Hello! What do you want to talk about today?";
    }
    else {
      reply = "Interesting! Tell me more.";
    }


  res.status(200).json({ reply });
}
