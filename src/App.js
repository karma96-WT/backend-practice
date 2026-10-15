import express from "express";
import userRoute from "./routes/user.route.js";
import postRoute from './routes/post.route.js';

const app=express(); // create an express app
app.use(express.json());

app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);

export default app;