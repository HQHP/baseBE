import express  from "express";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require("dotenv").config()

const app = express();
const PORT = process.env.PORT || 3000;

viewEngine(app)
initWebRoutes(app)

app.listen(PORT,()=>{
    console.log('listening on port')
})