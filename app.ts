import express from 'express';
require('dotenv').config()
import {Request,Response} from 'express'
// const {sequelize}=require('./src/database/server')
import Server from './server';
import databaseConnection from './src/database/dbconnection';
import mainroute from './router';
import { Router } from 'express';
import { json } from 'sequelize';



const expressInstance=new Server().expressInstance





// sequelize.sync() 
// sequelize.sync({force:true})
// sequelize.sync({alter:true}).then(() => {
//     console.log('Tables created successfully!');
//   }).catch((error: any) => {
//     console.error('Unable to create tables: ', error);
//   });

const PORT=process.env.PORT

expressInstance.listen(PORT, () => {databaseConnection(), console.log(`listening on port ${PORT}`)});

