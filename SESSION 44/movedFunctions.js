import { client } from "./index.js"
function updateMovieById(id, data) {
  return client
    .db("session38")
    .collection("movies")
    .updateOne({ id: id }, { $set: data });
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
    .deleteOne({ id: id });
}
function getMovieById(id) {
  return client.db("session38").collection("movies").findOne({ id: id });
}

export {
  getMovies,
  createMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
}
