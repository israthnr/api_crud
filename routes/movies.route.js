import express from "express";

const router = express.Router();

// /movies/movies
// R - for reading
router.get('/',(req,res) => {
    res.send("Get all movie list");
});

// C - for creating movies
router.post('/',(req,res) => {
    res.send("Create movie");
});

// U - update movies
router.put('/:id',(req,res) => {
    res.send("Update movie");
});

// D- for deleting movies
router.delete('/:id',(req,res) => {
    res.send("Delete movie");
});

//for showing others

export default router;