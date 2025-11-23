import {  requireAuth, getAuth } from '@clerk/express'
import User from '../models/User.js'

export const protectRoute = [
    requireAuth(),
    async(req, res) => {
        try {
            const clerkId = req.auth().userId;
            if(!clerkId){
                return res.status(401).json({message:"unauthorized - invalid user token"})
            }
            const user = await User.findOne({clerkId})

            if(!user) return res.status(404).json({message:"user not found"})

            req.user = user;
        } catch (error) {
            console.error("error in procted route middleware folder", error);
            res.status(500).json({message:"internal server Error"})
        }
    }
]
