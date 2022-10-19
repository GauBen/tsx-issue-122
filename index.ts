import { PrismaClient } from '@prisma/client'
import express from 'express'

// Instanciating Prisma is enough for the watcher not to kill the child process correctly
const prisma = new PrismaClient()

const api = express()
api.get('/', (_req, res) => {
  res.send('<h1>Hello World!</h1>')
})
api.listen(4000, () => {
  console.log('Server started on http://localhost:4000/')
})
