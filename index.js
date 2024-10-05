import express from "express";
import indexRouter from "./routes/index.js"; // Import the router

const app = express();
const PORT = 3000;

app.use('/api', indexRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
