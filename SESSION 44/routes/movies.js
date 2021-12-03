// ORGANIZING ALL THE APP FUNCTIONS:3

import express from "express";

// MOVING THE ABOVE FUNCTIONS TO A NEW FILE:1
import {
  getMovies,
  createMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
} from "../movedFunctions.js" /* ".js" is mandatory to specify in node but not incase of react*/;

const router = express.Router();
/*
    !DOUBT:1
        what is the use of express.Router();
*/

// ELEMINATING THE REPEATITIONS IN CODE:1
{
  //   router.get("", async (request, response) => {
  //     console.log(request.query);
  //     const filter = request.query;
  //     const filterMovies = await getMovies(filter);
  //     response.send(filterMovies);
  //   });
  //   router.post("", async (request, response) => {
  //     const data = request.body;
  //     const result = await createMovies(data);
  //     response.send(result);
  //   });
  //   router.get("/:id", async (request, response) => {
  //     console.log(request.params);
  //     const { id } = request.params;
  //     // const movie = await client
  //     //   .db("session38")
  //     //   .collection("movies")
  //     //   .findOne({ id: id });
  //     // TO MAKE ABOVE NORMAL CODE INTO A FUNCTION:
  //     const movie = await getMovieById(id);
  //     /*
  //           select the code without the "const movie = await" and the semicolon at the last
  //           then right click on it and select "refactor" then select "extract to inner function in module scope"
  //           then give the function a name and enter
  //           this will create a function at the end and change the selected code to a call function code
  //           other method is to select the code as said above and click the bulb icon and select the
  //             "extract to inner function in module scope" option
  //       */
  //     // console.log(movie)
  //     /* "movie" contains whatever is returned from that query in the postman result section */
  //     movie ? response.send(movie) : response.send(movie);
  //   });
  //   // TO DELETE ONE MOVIE:
  //   router.delete("/:id", async (request, response) => {
  //     console.log(request.params);
  //     const { id } = request.params;
  //     const result = await deleteMovieById(id);
  //     // TO GIVE A ERROR MESSAGE WHEN THERE IS NO MOVIE  :
  //     result.deletedCount > 0
  //       ? /*
  //         result contains whatever the query is returning in the result section in the postman
  //     */
  //         response.send(result)
  //       : response.status(404).send({ Message: "No matching movie found" });
  //   });
  //   // TO UPDATE ONE MOVIE:
  //   router.put("/:id", async (request, response) => {
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
  //       to update a movie
  //       follow the procedure as said in the previous class topic "MONGO DB COMMAND FOR CREATING DATA:"
  //       except changing the method to the post change it to put
  //       give the data to be updated
  //       and press send button
  //   */
}

// ELEMINATING THE REPEATITIONS IN CODE:2
router
  .route("/")
  .get(async (request, response) => {
    console.log(request.query);

    const filter = request.query;

    const filterMovies = await getMovies(filter);

    response.send(filterMovies);
  })
  .post(async (request, response) => {
    const data = request.body;

    const result = await createMovies(data);

    response.send(result);
  });
/*
     we are doing the chaining to eliminate the repetition by taking out the common thing like we do in algebra 
     here the process doesnt always happen step by step
     whatever the query that process start to happen directly
     so if the query is regarding the "post" then it will directly got to post it dont
        go to the get and then to the post 
    it is more of like "switch"  method we saw in react router so whichever matches
        that process only gets excecuted
*/

router
  .route("/:id")
  .get(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;

    const movie = await getMovieById(id);

    movie ? response.send(movie) : response.send(movie);
  })
  .delete(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;

    const result = await deleteMovieById(id);

    result.deletedCount > 0
      ? response.send(result)
      : response.status(404).send({ Message: "No matching movie found" });
  })
  .put(async (request, response) => {
    console.log(request.params);
    const { id } = request.params;
    const data = request.body;

    const result = await updateMovieById(id, data);

    const movie = await getMovieById(id);

    response.send(movie);
  });

export const moviesRouter = router;
/* renaming the router as moviesRouter */
