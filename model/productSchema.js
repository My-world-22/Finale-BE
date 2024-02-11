import { mongoose, Schema } from "mongoose";

const newProduct = new Schema({
    name: {
        type: String,
        require: [true, 'Please insert a product name']
    },
    description: {
        type: String,
        require: [true, 'Please insert a product description']
    },
    location: {
        type: String,
        require: [true, 'Please insert a product location']
    },
    price: {
        type: Number,
        require: [true, 'Please insert a product price']
    },

},
    {
        timestamps: true,
    },
);

export const product = mongoose.model('product', newProduct);
//modello per inserire nuovo prodotto