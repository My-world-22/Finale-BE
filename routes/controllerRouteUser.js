import { User } from "../model/userSchemaRegister.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { login } from "../model/userSchemaLogin.js";


export const getUser = async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
};//ok tutti utenti restituiti
//..............................................................................
export const getUserId = async (req, res) => {
    const userId = await User.findById(req.params.id)
    res.status(200).json(userId)
};//ok singolo utente
//..............................................................................
export const postUser = async (req, res) => {
    const password = await bcrypt.hash(req.body.password, 11)
    const newUser = await User.create({
        ...req.body,
        password,
    })
    const { password: _, __v, ...newUserWithoutPassword } = newUser.toObject()
    res.status(201).json(newUserWithoutPassword)

};//ok utente creato
//........................prova aggiornare password hash
export const putUser = async (req, res) => {
    const newPasswordHash = await bcrypt.hash(req.body.password, 11)
    const updateDataUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        ...req.body.password = newPasswordHash,

        new: true,
    });
    res.status(201).json(updateDataUser)

};
// ok
//............................................................................

export const postUserVerifier = async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ email: user.email, id: user.id, token: token(user.id) })
    } else {
        res.status(400).json({ message: 'invalid data' })
    }
    if (!user) {
        res.status(404).json({ message: 'User not found' })
    }
    const isCorrectPassword =await bcrypt.compare(password, user.password)
    if (!isCorrectPassword) {
        res.status(401).json({ message: 'invalid password' })
    }

}

//............................................................................
const token = id => jwt.sign({id}, process.env.JWT_PRIVATE_KEY, { expiresIn: '6h' });

export const deleteUser = async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' })
    }
    res.status(200).json({ message: `user ${req.params.id} deleted` })
};//ok