export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id } = req.params
    } catch (error) {
        console.log('Error in sendMessage controller: ', error.message)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}
