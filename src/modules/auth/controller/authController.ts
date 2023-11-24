import { Request, Response } from "express";
import AuthService from "../service/authService";
import  Users  from "../../../models/user";
class AuthController {
  authService: AuthService;

  constructor() {
    this.authService = new AuthService();
    this.signinwithemailController = this.signinwithemailController.bind(this);
    this.deleteUser=this.deleteUser.bind(this)
    this.readusercontroller=this.readusercontroller.bind(this)
  }

  async signinwithemailController(req: Request, res: Response) {
    try {
      console.log(req.body, ">>>>>req");
      const { UserName, email, password } = req.body; 
      let object = { UserName, email, password }; 
      let result = await this.authService.signinwithemail(object);
      res.status(200).send("User created successfully");
    } catch (error: any) {
      console.log(error, ">>>>>>>>");
      res.status(400).send("Error in creating user");
    }
  }
  async readusercontroller(req: Request, res: Response) {
    try {
        console.log(req.params, ">>>>>>");
        const { id } = req.params; 
        let userId=id
        let userexist = await this.authService.readuser(userId);
        if(userexist){

          res.status(200).json({
            success:"true",          
            id:id,
            message:"User exist with id"
          })
        }
        
    } catch (error: any) {
        console.log(error, ">>>>");
        res.status(400).send("Error occurred")
        
    }
}

async deleteUser(req: Request, res: Response) {
  try {
    console.log(req.body, "...>>>>");
    const { email } = req.body;
    let userEmail=email


    if (!userEmail ) {
      
      return res.status(400).send("Email is required for deletion");
    }
    

    let deleteUser = await this.authService.deleteUser(userEmail);

    if (deleteUser) {
      
      res.status(200).send("User deleted successfully");
    } else {
      
      res.status(404).send("No user found with the specified email");
    }
  } catch (error: any) {
    console.log("Error occurred:", error);
    res.status(500).send("Internal server error");
  }
}
async logInController(req:Request,res:Response){
  try{
    console.log(req.body,">>>>>>")
    let {UserName,password}=req.body
    // let object={email}
    let result=await this.authService.loginUser(UserName,password)

    if(result){
    res.status(200).json({
      success:"True",
      message:"LogedIn Successfull"
      })
    }
    

  }catch(error){
    console.log(`${error}`)
    res.status(400).json({
      success:"False",
      message:"No user found"
    })

  }

}



}

export default AuthController;
