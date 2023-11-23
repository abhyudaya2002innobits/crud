// const Umzug = require("umzug");
import  Umzug  from 'umzug';
import sequelize from 'sequelize';
import path from 'path';
import databaseInstance from "./dbconfig";


const migrate = new Umzug({
    migrations: {
        
        path: path.join(__dirname, '../migrations'),
        pattern: /\.js$/,
        
        params: [databaseInstance.getQueryInterface(), sequelize],
    },
    
    storage: 'sequelize',
    storageOptions: {
        sequelize: databaseInstance,
    },
})


const databaseConnection = async () => {
    console.log("db 1")
    try {
        console.log("db 2")
        const result: any = await databaseInstance.authenticate()
        
            .then(async () => {
                console.log("db3")
                await migrate.up()
                    .then(async () => {
                        console.log("db4")
                        
                        console.log("ALL migration run successfully")
                        console.log("db5")
                        return Promise.resolve()
                    }).catch((err: any) => {
                        console.log("db6")
                        
                        return Promise.reject(err)
                    })
                    console.log("db7")
                return Promise.resolve()
                console.log("db8")


            }).catch((err) => {
                return Promise.reject(err)
            })
            console.log("db connected>>>>>>>>>>>")
        return Promise.resolve("db connected>>>>>>>>>>>")
        console.log("db9")
    }
    catch (err) {
        return Promise.reject(err)
    }
}

export default databaseConnection;