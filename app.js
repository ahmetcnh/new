import express from "express";
import cors from "cors";
const app = express();
const port = 3001;
import router from "./router/index.js";
import "./db.js";
import { login } from "./controller/login.js";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";
import { register } from "./controller/register.js";

const corsOptions = {
    origin: "http://localhost:3000/",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };
const corsOptionsLogin = {
  origin: "http://localhost:3000/login",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
const corsOptionsRegister = {
    origin: "http://localhost:3000/register",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(cors(corsOptionsLogin,))
app.use("/api", router);
app.get("/", (req, res) => {
  res.json("selamlar");
});

app.post("/api/register",(req,res)=>{
})

app.post("/api/login",cors(corsOptionsLogin),(req,res)=>{
    if(login===true){
        res.redirect("localhost:3000/meeting")
    }
})

app.use(errorHandlerMiddleware)
app.listen(port,(req,res)=>{
    console.log(`${port} dinleniyor`);
})