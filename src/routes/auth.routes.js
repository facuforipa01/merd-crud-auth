import { Router } from "express";

import { authRequiere } from "../middlewares/validateToken.js";

import { login , register, logout, profile } from "../controllers/auth.controller.js";

const router = Router()

router.post('/register', register)
router.post('/login' , login)
router.post('/logout' , logout)
router.get('/profile', authRequiere, profile)

export default router