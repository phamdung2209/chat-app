import Conversation from '../models/conversation.model.js'
import Message from '../models/message.model.js'
import { getReceiverSocketId, io } from '../socket/socket.js'

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([newMessage.save(), conversation.save()])

        // SOCKET.IO GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId)
        if (receiverSocketId) {
            // req.io.to(receiverSocketId).emit('newMessage', newMessage)
            io.to(receiverSocketId).emit('newMessage', newMessage)
        }

        return res.status(201).json(newMessage)
    } catch (error) {
        console.log('Error in sendMessage controller: ', error.message)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params
        const senderId = req.user._id

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        }).populate('messages')

        if (!conversation) {
            return res.status(200).json([])
        }

        return res.status(200).json(conversation.messages)
    } catch (error) {
        console.log('Error in getMessages controller: ', error.message)
        return res.status(500).json({ error: 'Internal Server Error' })
    }
}
