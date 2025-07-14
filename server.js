import express from "express";
import router from "./routes/noteRoutes.js";





const app = express();
app.use(express.json());

//using our custom router over here.
app.use("/note", router);
app.get("/", (req, res) => {
    res.send("The api is running wonderfully!!!");
})

app.listen(3000, () => {
    return console.log("App is running on port 3000");
});
