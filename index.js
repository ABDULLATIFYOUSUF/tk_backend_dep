import express from "express";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

app.use('/', (req,res,next) => {
    console.log("agai request", req.query)
    if(req.query.apiKey === '123'){
        next()
}else{
    res.status(401).send({message: "not allowed"})
}
})

// app.use('/', (req,res,next) => {
//     console.log("agai request")
//     next()
// })

app.use("/api", router);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
