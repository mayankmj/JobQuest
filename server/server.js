import express from 'express'
import router from './routes/route.js';
import bodyParser from 'body-parser'
import cors from 'cors'
import dbConnection from './database/db.js';
import 'dotenv/config'


// server initilisation
const app = express();

app.use(cors());
// encode the url
// for ex if url have space it remove from frontend and when reaches to backedn to remove add the space back
app.use(bodyParser.urlencoded({extended:true}));
// payload is in json format
app.use(bodyParser.json({extended:true}))

app.use('/',router);

const PORT = process.env.PORT || 8000;

const DB_URL = process.env.DB_URL;

dbConnection(DB_URL);
 // listen function creates backend server
 app.listen(PORT , () => console.log(`Server is running successfully on PORT ${PORT}`));

