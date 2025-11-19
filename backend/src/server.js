import express from "express"
import {ENV} from "./lib/env.js"

const app = express()


console.log(ENV.DB_URL)

app.get("/", (req, res) => {
  res.status(200).json("hello" );
});

app.listen(ENV.PORT, ()=> {
    console.log(`server ${ENV.PORT}`)
})