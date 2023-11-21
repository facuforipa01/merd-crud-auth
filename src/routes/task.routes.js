import { Router } from "express";
import { authRequiere } from "../middlewares/validateToken.js";
import {
    getTask,
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from '../controllers/tasks.controller.js'

const router = Router()

router.get('/tasks', authRequiere, getTasks )
router.get('/task/:id', authRequiere, getTask )


router.post('/tasks', authRequiere, createTask )

router.delete('/task/:id', authRequiere, deleteTask )

router.put('/task/:id', authRequiere, updateTask )


export default router