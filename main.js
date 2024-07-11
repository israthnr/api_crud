import express from "express";
import movieRoutes from "./routes/movies.route.js"

const app = express();
const PORT = 6969;

app.get("/", (req,res) => {
    res.json({
        msg: "Hello Rahna"
    });
});

//CRUD funcionality of movies

// client -> middleware -> server

//create middleware using use function for using middleware

app.use("/movies", movieRoutes);



/*should add Routes Structure but reduce the code conflict 
create seperate route folder and add that folder
*/

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
});
