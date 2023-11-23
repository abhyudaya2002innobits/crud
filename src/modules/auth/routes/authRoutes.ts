import AuthController from "../controller/authController";
import { Router } from "express";

class AuthRouter{
    authRouter=Router()
    authController= new AuthController
    constructor(){
        this.userRoute()
    }

    private userRoute(){
        this.authRouter.route('/api/v1/signin').post(this.authController.signinwithemailController)
        // this.authRouter.route('/api/v1/update').put(this.authController.updateEmailController)
        this.authRouter.route('/api/v1/read/:id').get(this.authController.readusercontroller)
        this.authRouter.route('/api/v1/delete').delete(this.authController.deleteUser)
        this.authRouter.route('/api/v1/login').post (this.authController.logInController)

    }
}
const authRouter = new AuthRouter().authRouter
export default authRouter;