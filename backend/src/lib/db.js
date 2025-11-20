import mongoose from "mongoose"

import{ENV} from "./env.js"

export const connectDb = async() => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log("✅ conntect with data base", conn.connection.host)
    } catch (error) {
        console.error("❌ error in connection db", error)
    }
}