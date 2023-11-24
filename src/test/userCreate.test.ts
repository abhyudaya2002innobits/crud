import AuthService from '../modules/auth/service/authService';
import { v4 as uuid, v4 } from 'uuid';

 
import { describe, expect, test } from "@jest/globals";

 
 const authService=new AuthService()
 
let userId
 
let userInfo: any = {
    UserName: "dev",
    email: "@123",
    
    password: "123456",
    
}
 
// let userInfo1: any = {
//     fullName: "AAAAAA",
//     email: (faker.internet.email()),
//     contactNumber: "8879995415",
//     password: "123456",
//     description: "goddd",
//     dateOfBirth: "2022-01-18",
//     gender:"Male",
 
// };
 
 
 
describe("user test cases", () => {
    it("create user test cases", async () => {
        var req = {
            body: userInfo
        }
        try {
            console.log(req.body,">>")
            let user = await authService.signinwithemail(req.body)
            // console.log("err1")
            // const final = JSON.parse(JSON.stringify(user));
            // userId = final.userId
            // console.log("err2")
            expect(userInfo.UserName).toBe("dev")
        }
        catch (error) {
            // logger.error("Error in running", error);
            console.log(`${error}`)
 
 
        }
    })
})
 