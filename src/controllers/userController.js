import User from '../models/userModel.js'

const getUser = async (req, res) => {
    const users = await User.find({})

    return res.status(200).json(users)
}

const createUser = async (req, res) => {
    const user = req.body

    const newUser = await User.create(user)

    return res.status(201).json(newUser)
}

const deleteUser = async (req, res) => {
    const id = req.params.id

    await User.findByIdAndRemove({ _id: id })

    return res.status(200).json({ res: `User deleted, ${id}` })
}

export {
    getUser,
    createUser,
    deleteUser
}