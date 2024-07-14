import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./db/db.js";

const app = express();

//Data understanding middleware
app.use(express.json());

//connect connectDB
connectDB();

app.get("/", (req,res) => {
    res.json({
        msg: "Hello Rahna"
    });
});

// client -> middleware -> server

//create middleware using use function for using middleware

app.use("/movies", movieRoutes);

/*should add Routes Structure but reduce the code conflict 
create seperate route folder and add that folder
*/

app.listen(process.env.PORT, () => {
    console.log(`The server is running at http://localhost:${process.env.PORT}`);
});
