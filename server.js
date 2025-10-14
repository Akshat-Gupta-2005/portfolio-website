import express from "express";
import { Resend } from "resend";

const app = express();
app.use(express.json());

const resend = new Resend("re_VZF6XUrE_NdgCqkAN8rsiMbvophneuUYT");

app.post("/api/sendEmail", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: "your@email.com",
      subject: `Message from ${name}`,
      html: `<p>${message}</p>`,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
