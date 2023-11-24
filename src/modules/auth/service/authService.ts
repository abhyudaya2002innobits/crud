import { response } from "express";
import  Users  from "../../../models/user";


class AuthService{
    static signinwithemail(object: {
        id: string; // signinwithemail: any;
        // signinwithemail: any;
        UserNAme: string; password: string;
    }) {
        throw new Error("Method not implemented.");
    }
    id: any;
    // signinwithemail: any;
    constructor(){
        this.signinwithemail=this.signinwithemail.bind(this)
        // this.CheckEmailBeforeSignin=this.CheckEmailBeforeSignin.bind(this)
        // this.updateEmail=this.updateEmail.bind(this)
        this.readuser=this.readuser.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
        this.loginUser=this.loginUser.bind(this)
        
    }
    async signinwithemail(object:any){
        try{
            let CreateUSer=await Users.create(object)
            console.log(CreateUSer)
            return Promise.resolve("User created successfully")
            
        }catch(error:any){
            return Promise.reject(`error occured ${error}`);
        }





    }
    async readuser(userId:any){
        try{
            let readUser = await Users.findOne({
                where: {
                    id: userId
                } 
            });
            if(!readUser){
                return "User with id not found"
            }
            if(readUser.id==userId.id){
                console.log("mil gaya")
                return Promise.resolve("User exist with details")
            }
            
        }catch(error:any){
            console.log(`error occured ${error}`)
            return Promise.reject("No user exist")

        }
    }
    async deleteUser(userEmail: any) {
        try {
            let Email = await Users.findOne({
                where: {
                    email:userEmail
                } 
            })
            if(Email){
                console.log("email exist")
                
            }

            
            let userDelete = await Users.destroy({
                where: {
                    email: userEmail
                }
            });
            console.log("email deleted")
            return Promise.resolve("user deleted successfully")
    
            // if (!userDelete) {
            
                
            // }
            
        } catch (error) {
            console.log(`Error occurred: ${error}`);
            return Promise.reject("Error occurred at deletion");
        }
    }
    async loginUser(UserName:string,password:string){

        try{
            let userExist=await Users.findOne({
                where:{
                    UserName:UserName
                    

                    
                
                }
            })
            
            if(userExist){
                return Promise.resolve("USer exist")
            }

        
            
        }catch(error:any){
            console.log(`error occured ${error}`)
            return Promise.reject("Error occured during LogedIN")

        }

    }






}
    // async  readUser(Username: any){
    //     try {
           
    //         let readUser = await Users.findOne({ Username });
    
        
    //         return readUser;
    
    //     } catch (error: any) {
    //         // Log or handle the error
    //         console.error("Error in readUser:", error);
    
    //         // You might want to rethrow the error depending on your use case
    //         throw error;
    //     }
    // }
    
    
    
   
    
            

        

    



export default AuthService