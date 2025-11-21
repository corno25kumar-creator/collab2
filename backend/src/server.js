import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";
import { connectDb } from "./lib/db.js";
import cors from 'cors'
import { serve } from "inngest/express";
import { functions, inngest } from "./lib/inngest.js";

const app = express();

const __dirname = path.resolve();


//middleware
app.use(express.json())

app.use(cors({
  origin:ENV.CLIENT_URL,
   credentials:true
  }))

  app.use("/api/inngest", serve({client: inngest, functions}))

app.get("/hat", (req, res) => {
  res.status(200).json("hello hat");
});

app.get("/books", (req, res) => {
  res.status(200).json("hello books");
});

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // ⬇ FIX: RegExp fallback route
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDb();
    app.listen(ENV.PORT, () => {
      console.log(`server ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("💥error in starting server", error);
  }
};

startServer();
