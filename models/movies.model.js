import { model, Schema } from "mongoose";

// write schema
const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
});

//create users model
const Movie = model("Movie", schema);

export default Movie;