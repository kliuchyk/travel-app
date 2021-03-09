import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`⚡️ [server] is running on port: [${PORT}]`);
});
