import mongoose from "mongoose"
import express from 'express';
import cors from 'cors';
import HelloController from './controllers/hello-controller.js';
import UserController from './controllers/users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';

const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   serverSelectionTimeoutMS: 5000,
   autoIndex: false,
   maxPoolSize: 10,
   socketTimeoutMS: 45000,
   family: 4
};

/*
const CONNECTION_STRING = 'mongodb+srv://taehyeon93:WebDevPassword@cluster0.gfdvr3y.mongodb.net/tuiter?retryWrites=true&w=majority'

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
|| 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING, options);

mongoose.connect('mongodb://localhost:27017/tuiter', options);
*/

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
|| 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING, options);


const app = express();
app.use(cors());
app.use(express.json());





TuitsController(app);
HelloController(app);
UserController(app);

app.listen(process.env.PORT || 4000)