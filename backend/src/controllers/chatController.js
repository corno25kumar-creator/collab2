import { chatClient } from "../lib/stream.js";

export async function getStreamToken(req,res) {
    try {
        // we have to use clerk id not mongodb id 
        const token = chatClient.createToken(req.user.clerkId)
        
        res.status(200).json({
            token,
            userId: req.user.clerkId,
            userName: req.user.name,
            userImage: req.user.image
        })
    } catch (error) {
        console.error("error in chat controller", error)
        res.status(500).json({message: 'internal server error'})
    }
}