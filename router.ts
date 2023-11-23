import authRouter from "./src/modules/auth/routes/authRoutes";

import { Router } from "express";


const mainroute=Router()
mainroute.use(authRouter)

export default mainroute