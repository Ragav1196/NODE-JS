import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";

// METHOD TO INFORM THE NODE:2
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// METHOD TO INFORM THE NODE:3
app.use(cors());
/* third party middleware */
// for all the requests this cors is used
// cors allow any origin

app.use(express.json());

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);

  await client.connect();
  console.log("Mongo DB Connected");

  return client;
}

export const client = await createConnection();

app.get("/", (request, response) => {
  response.send("HELLO");
});

app.use("/movies", moviesRouter);

app.listen(PORT, () => console.log("App is started in", PORT));
