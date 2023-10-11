import express from "express";
import cors from "cors";
const app = express();
const port = 3001;
import router from "./router/index.js";
import "./db.js";
import bodyParser from "body-parser"
import { login } from "./controller/login.js";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";
import { register } from "./controller/register.js";
import meetingRoutes from "./router/meeting.routes.js"
import { createMeeting } from "./controller/meeting.js";


const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors(corsOptions))
app.use("/api", router);
app.get("/", (req, res) => {

});

app.post("/api/register",(req,res)=>{
})

app.post("/api/login", (req, res) => {  
    const login = false;
    login=req.body
    if (login === true) {
        res.status(200).send("Welcome")
    } else {
      res.status(401).send('Unauthorized');
    }
});

app.post("/api/meeting",createMeeting,(req,res)=>{

});
  
app.use(errorHandlerMiddleware)
app.listen(port,(req,res)=>{
    console.log(`${port} dinleniyor`);
})