import express from 'express';
import { signUp } from './controller';
// import * as validate from './validator';
import { validate } from './validator';
const { check, body, validationResult } = require('express-validator');

const app = express()

/* app.post('/signUp', [
    check('firstName', 'First Name is required').isLength({ min: 10 })
], signUp) */

app.post('/signUp', validate, signUp)


export default app;