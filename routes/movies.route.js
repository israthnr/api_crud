import express from "express";
import { MovieCreate, 
    MovieDelete, 
    MovieIndex, 
    MovieUpdate 
} from "../controllers/movies.controller.js";

const router = express.Router();

// /movies/movies
// R - for reading
router.get("/", MovieIndex);

// C - for creating movies
router.post("/", MovieCreate);

// U - update movies
router.put("/:id", MovieUpdate);

// D- for deleting movies
router.delete("/:id",MovieDelete);

//for showing others

export default router;