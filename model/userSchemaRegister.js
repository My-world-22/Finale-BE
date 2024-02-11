import { mongoose, Schema } from "mongoose";

const newUserRegister = new Schema({
    name: {
        type: String,
        require: [true, 'please enter a name']
    },
    surname: {
        type: String,
        require: [true, 'please enter a surname']
    },
    email: {
        type: String,
        require: [true, 'please enter a email'],
    },
    password: {
        type: String,
        require: [true, 'please enter a password']
    },
},
    { timestamps: true, },
);

export const User = mongoose.model('User', newUserRegister);
//modello per iscrizione utente