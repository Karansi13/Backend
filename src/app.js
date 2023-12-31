import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors())

// Production me aisehi likhte hai
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true 
}))

// 3 main major configuration
app.use(express.json({limit: "20kb"}))
app.use(express.urlencoded({extended:  true, limit: "16kb"}))
app.use(express.static("public"))

export { app }