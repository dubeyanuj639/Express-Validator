import express from 'express';
import { signUp, signIn, getUser } from './controller';
import * as validate from './validator';
const app = express()

app.post('/signUp/:_id', validate.signUp, signUp)
app.post('/signIn', validate.signIn, signIn)
app.get('/getUser/:_id', validate.getUser, getUser)

export default app;