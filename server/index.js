import  express  from "express";
import dotenv from 'dotenv';

import Connection from "./database/db.js";

const app = express();

dotenv.config();

const PORT = 8000;

const username =process.env.DB_USERNAME;
const password =process.env.DB_PASSWORD;


Connection(username, password);

app.listen(PORT, () => console.log('server is running successfully on PORT ${PORT}'));