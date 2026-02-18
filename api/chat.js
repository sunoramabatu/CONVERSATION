export default async function handler(req, res) {

  const message = req.body.message;

  const reply = "Hello! You said: " + message;

  res.status(200).json({ reply });
}
