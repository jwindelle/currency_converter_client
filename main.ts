import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
    dotenv.config();

const PORT = process.env.PORT;
const router = express.Router();
const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/', router );
    app.use('/jquery', express.static(__dirname+'/node_modules/jquery/dist/'));
    app.use('/bootstrap', express.static(__dirname+'/node_modules/bootstrap/dist/'));
    app.use(express.static('public'));
    app.use(cors({origin: 'http://localhost:5000'}));
    app.use(express.json());
    app.listen(PORT, ()=>{
        console.log(`server running at ${PORT}`);
    });

//====================================================================================
//  ROUTERS
//====================================================================================
router.get('/', (request, response)=>{
    response.sendFile(__dirname+'/views/index.htm');
});