import express from 'express';
import mainRouter from './router';
import bodyParser from 'body-parser';
import cors from 'cors';


class Server{
    expressInstance=express()

    constructor(){
        this.expressInstance=express()
        this.middleWare()
        this.routingInstance()

    }
    private middleWare(){
        this.expressInstance.use(bodyParser.urlencoded({ extended: true }));

        this.expressInstance.use(bodyParser.json());

        this.expressInstance.use(cors())
    }
    private routingInstance(){
        this.expressInstance.use('/',mainRouter)
    }

}

export default Server