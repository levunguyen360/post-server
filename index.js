import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './router/posts.js';
import mongoose from 'mongoose';

const app = express();
const port = process.env.port || 5000;
const url = 'mongodb+srv://levunguyen:v4d2Es6xTXy9nQ42@cluster0.2jtkjep.mongodb.net/?retryWrites=true&w=majority';

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/posts', posts);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conneted to DB");
    app.listen(port, ()=>{
        console.log(`server is runing port: ${port}`);
    })
}).catch((err) => {
    console.log('err', err);
});

