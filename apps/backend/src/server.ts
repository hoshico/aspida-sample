import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.get("/user/:id", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  const user = users.find((u) => u.id === Number(req.params.id));

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
