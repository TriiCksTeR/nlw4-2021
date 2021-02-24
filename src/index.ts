import "reflect-metadata"
import express from 'express'
import "./database"
import { router } from "./routes"
const server = express()
server.use(express.json());
server.use(router)


server.listen(3333, () => console.log("server on!"))