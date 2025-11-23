import express from 'express'
import { protectRoute } from '../middleware/protectRoute.js'
import {
    createSession,
    getActivesession,
    getMyRecentSession,
    getSessionById,
    joinSession,
    endSession
} from '../controllers/sessionController.js'

const router = express.Router()

router.post("/",protectRoute, createSession)
router.get("/active",protectRoute, getActivesession)
router.get("/my-recent",protectRoute, getMyRecentSession)

router.get("/:id",protectRoute, getSessionById)
router.post("/:id/join",protectRoute, joinSession)
router.post("/:id/end",protectRoute, endSession)



export default router