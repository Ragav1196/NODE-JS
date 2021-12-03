import { client } from "./index.js";
import {ObjectId} from "mongodb"

function updateMovieById(id, data) {
  return client
    .db("session38")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: data });
}
function createMovies(data) {
  return client.db("session38").collection("movies").insertMany(data);
}
function getMovies(filter) {
  return client.db("session38").collection("movies").find(filter).toArray();
}
async function deleteMovieById(id) {
  return await client
    .db("session38")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}

// CHANGING THE DELETE QUERY BY ID TO _ID:
function getMovieById(id) {
  {
    /* return client.db("session38").collection("movies").findOne({ id: id }); */
  }
  /*      instead of id we are refering the _id */

  {
    /* return client.db("session38").collection("movies").findOne({ _id: id }); */

  }
  /*     
          since the -id in mongo is an objectId we need to convert the id that we give in
            url to a objectId too  
            to convert it we need to import objectId from mongodb
  */

            return client.db("session38").collection("movies").findOne({ _id: ObjectId(id) });
              /* converting the id into objectId */
}

export {
  getMovies,
  createMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
};
