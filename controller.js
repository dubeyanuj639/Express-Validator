
export const signUp = (req, res) => {
    try {
        return res.status(200).send(`Ok`)
    }
    catch (e) {
        return res.status(500).send('Internal Server Error.')
    }
}

export const signIn = (req, res) => {
    try {
        return res.status(200).send(`Ok`)
    }
    catch (e) {
        return res.status(500).send('Internal Server Error.')
    }
}

export const getUser = (req, res) => {
    try {
        return res.status(200).send(`Ok`)
    }
    catch (e) {
        return res.status(500).send('Internal Server Error.')
    }
}
