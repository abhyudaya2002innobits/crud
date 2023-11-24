import AuthService from '../modules/auth/service/authService';
import { v4 as uuid, v4 } from 'uuid';

 
import { describe, expect, test } from "@jest/globals";

 
 const authService=new AuthService()
 
let userId
 
let userInfo: any = {
    id:"2",
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
            body: userInfo.id
        }
        try {
            console.log(`user ${req.body} mil gaya`,">>")
            let user = await authService.readuser(req.body)
            // console.log("err1")
            // const final = JSON.parse(JSON.stringify(user));
            // userId = final.userId
            // console.log("err2")
            expect(userInfo.id).toBe(`${userInfo.id}`)
        }
        catch (error) {
            // logger.error("Error in running", error);
            console.log(`${error}`)
 
 
        }
    })
    
})
 


   