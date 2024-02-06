import jwt from 'jsonwebtoken'

const generateJWT = (id, res) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })

    res.cookie('_auth', token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
        secure: true,
    })
}

export default generateJWT
