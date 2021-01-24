import { validationResult } from "express-validator"

export const signUp = (req, res) => {
    try {
        console.log(req.body)
        return res.status(200).send(`Ok`)
    }
    catch (e) {
        return res.status(500).send('Internal Server Error.')
    }
}

export const create = (req, res) => {
    try {
        console.log(`this is request body `, req.body)
        return res.status(200).send(`Ok`)
    }
    catch (e) {
        return res.status(500).send('Internal Server Error.')
    }
}
