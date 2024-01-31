import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import './config/index.mjs'
import webhook from "./routes/web_hook.mjs"


const app  = express();

// set middleWares..

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd() + "/public" )));

const port = process.env.PORT || 3000;


// REST APIs

app.use("/webhook",(reqs,resp)=>{

            resp.send("hello world")
            console.log(reqs.body)

})


app.listen(port,()=>{
    console.log("server started..");
});

