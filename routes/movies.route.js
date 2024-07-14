import express from "express";
import { MovieCreate, 
    MovieDelete, 
    MovieIndex, 
    MovieUpdate,
    MovieDetail 
} from "../controllers/movies.controller.js";

const router = express.Router();

// /movies/movies
// R - for reading
router.get("/", MovieIndex);

router.get("/:id", MovieDetail);

// C - for creating movies
router.post("/", MovieCreate);

// U - update movies
router.put("/:id", MovieUpdate);

// D- for deleting movies
router.delete("/:id",MovieDelete);

//for showing others

export default router;