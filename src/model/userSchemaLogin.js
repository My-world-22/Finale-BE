import { mongoose, Schema } from "mongoose";

const userLogin = new Schema({
    email: {
        type: String,
        require: [false, 'Enter Email']
    },
    password: {
        type: String,
        require: [true, 'Enter Password']
    }
},
    {
        timestamps: true,
    },
);

export const login = mongoose.model('login', userLogin);

//modello per accesso user