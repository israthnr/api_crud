import { model, Schema } from "mongoose";

// write schema
const schema = new Schema({
    title: String,
    desc: String,
});

//create users model
const Movie = model("Movie", schema);

export default Movie;