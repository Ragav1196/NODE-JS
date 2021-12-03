import express from "express";
import { MongoClient } from "mongodb";

// TO HIDE THE URL OF MONGO DB ATLAS:2
// !CONT. FROM THE "Flow.txt"
import dotenv from "dotenv";

// ORGANIZING ALL THE APP FUNCTIONS:4
import { moviesRouter } from "./routes/movies.js";

// TO HIDE THE URL OF MONGO DB ATLAS:3
dotenv.config();

const app = express();

{
  // console.log(process.env)
}

{
  // const PORT = 9000;
}

// PUSHING TO HIROKK:2
const PORT = process.env.PORT;
/* 
  we can assign a port locally but hirokku will run automatically on 
    which ever port is available

  refer .env file
    there we have specified a port to run locally
 */
app.use(express.json());

// TO HIDE THE URL OF MONGO DB ATLAS:4
const MONGO_URL = process.env.MONGO_URL;
// storing the object from the "process.env" which we stored in the ".env" file to the "MONGO_URL variable"

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

// ORGANIZING ALL THE APP FUNCTIONS:2
app.use("/movies", moviesRouter);
/* 
    as the "/movies" is common for all the app functions that is moved to a new file
      we are using that to tell the app.use to refer that movies.js whenever needed
      so whenever "/movies" is typed in the url "app.use" will refer the "moviesRouter"
*/

{
  //   app.get("/movies", async (request, response) => {
  //     console.log(request.query);
  //     const filter = request.query;
  //     const filterMovies = await getMovies(filter);
  //     response.send(filterMovies);
  //   });
  //   app.post("/movies", async (request, response) => {
  //     const data = request.body;
  //     const result = await createMovies(data);
  //     response.send(result);
  //   });
  //   app.get("/movies/:id", async (request, response) => {
  //     console.log(request.params);
  //     const { id } = request.params;
  //     // const movie = await client
  //     //   .db("session38")
  //     //   .collection("movies")
  //     //   .findOne({ id: id });
  //     // TO MAKE ABOVE NORMAL CODE INTO A FUNCTION:
  //     const movie = await getMovieById(id);
  //     /*
  //         select the code without the "const movie = await" and the semicolon at the last
  //         then right click on it and select "refactor" then select "extract to inner function in module scope"
  //         then give the function a name and enter
  //         this will create a function at the end and change the selected code to a call function code
  //         other method is to select the code as said above and click the bulb icon and select the
  //           "extract to inner function in module scope" option
  //     */
  //     // console.log(movie)
  //     /* "movie" contains whatever is returned from that query in the postman result section */
  //     movie ? response.send(movie) : response.send(movie);
  //   });
  //   // TO DELETE ONE MOVIE:
  //   app.delete("/movies/:id", async (request, response) => {
  //     console.log(request.params);
  //     const { id } = request.params;
  //     const result = await deleteMovieById(id);
  //     // TO GIVE A ERROR MESSAGE WHEN THERE IS NO MOVIE  :
  //     result.deletedCount > 0
  //       ? /*
  //       result contains whatever the query is returning in the result section in the postman
  //   */
  //         response.send(result)
  //       : response.status(404).send({ Message: "No matching movie found" });
  //   });
  //   // TO UPDATE ONE MOVIE:
  //   app.put("/movies/:id", async (request, response) => {
  //     console.log(request.params);
  //     const { id } = request.params;
  //     const data = request.body;
  //     /* to give the data which need to be replaced */
  //     const result = await updateMovieById(id, data);
  //     // TO SHOW THE UPDATED MOVIE IN THE POSTMAN RESULT SECTION:
  //     const movie = await getMovieById(id);
  //     /*    calling the function that is used to get movie by id */
  //     /*    'set' is used to replace the data */
  //     response.send(movie);
  //     // this one is the method to send the details that we have specified to the database
  //   });
  //   /*
  //     to update a movie
  //     follow the procedure as said in the previous class topic "MONGO DB COMMAND FOR CREATING DATA:"
  //     except changing the method to the post change it to put
  //     give the data to be updated
  //     and press send button
  // */
}
//    all the above app functions are moved to the "movies.js" file

app.listen(PORT, () => console.log("App is started in", PORT));

{
  // function updateMovieById(id, data) {
  //   return client
  //     .db("session38")
  //     .collection("movies")
  //     .updateOne({ id: id }, { $set: data });
  // }
  // function createMovies(data) {
  //   return client.db("session38").collection("movies").insertMany(data);
  // }
  // function getMovies(filter) {
  //   return client.db("session38").collection("movies").find(filter).toArray();
  // }
  // async function deleteMovieById(id) {
  //   return await client
  //     .db("session38")
  //     .collection("movies")
  //     .deleteOne({ id: id });
  // }
  // function getMovieById(id) {
  //   return client.db("session38").collection("movies").findOne({ id: id });
  // }
}

// FUNCTIONS CREATED BY REFACTOR METHOD

{
  // function updateMovieById(id, data) {
  //   return client
  //     .db("session38")
  //     .collection("movies")
  //     .updateOne({ id: id }, { $set: data });
  // }
  // function createMovies(data) {
  //   return client.db("session38").collection("movies").insertMany(data);
  // }
  // function getMovies(filter) {
  //   return client.db("session38").collection("movies").find(filter).toArray();
  // }
  // async function deleteMovieById(id) {
  //   return await client
  //     .db("session38")
  //     .collection("movies")
  //     .deleteOne({ id: id });
  // }
  // function getMovieById(id) {
  //   return client.db("session38").collection("movies").findOne({ id: id });
  // }
}

// MOVING THE ABOVE FUNCTIONS TO A NEW FILE:1
// select => bulb => move to a new file
