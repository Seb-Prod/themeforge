import express from "express";
import cors from "cors";
import type { BaseColors } from "@themeforge/shared";

const colors: BaseColors = {
  background: "#ffffff",
  primary: "#a865cc",
  secondary: "#f5b942",
};

console.log(colors);

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    name: "ThemeForge API",
    status: "ok",
  });
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000");
});