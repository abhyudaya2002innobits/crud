import { response } from "express";
import  Users  from "../../../models/user";


class AuthService{
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
            return Promise.resolve("USer created successfully")
            
        }catch(error:any){
            return Promise.reject(error);
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
            if(readUser.id==Users.id){
                return Promise.resolve("User exist with details")
            }
            
        }catch(error:any){
            console.log(`error occured ${error}`)
            return Promise.reject("No user exist")

        }
    }

    async deleteUser(userEmail: any) {
        try {

            let userDelete = await Users.destroy({
                where: {
                    email: userEmail
                }
            });
            
    
            if (userDelete) {
            
                return Promise.resolve("User deleted");
            } else {
                
                return Promise.resolve("No user found with the specified email");
            }
        } catch (error) {
            console.log(`Error occurred: ${error}`);
            return Promise.reject("Error occurred at deletion");
        }
    }
    async loginUser(object:any){

        try{
            let userExist=await Users.findOne({
                where:{
                    email:object.email,
                
                }
            })
            
            if(!userExist){
                return `User with email dosen't exist`
            }
            if(object.password!=userExist.password){
                return `Password not matched`
            }
            if(userExist && (object.password==userExist.password)){
                return Promise.resolve("User LogedIn successfully")
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