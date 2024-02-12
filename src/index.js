import express from "express";
import mongoose from "mongoose"
import routerUser from "./routes/userRoute.js";
import routerProduct from "./routes/productRoute.js"
import checkToken from "./middleware/jwtCheckToken.js"
import cors from "cors"
import loginRouter from './routes/userRoute.js'

const port = process.env.PORT;
const app = express();

const corsOptions = {
    origin: process.env.APPROVED,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/api/users', loginRouter)
app.use('/api/users', routerUser)
app.use('/api/product', routerProduct)


app.use(checkToken)


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connect succes with MongoDB!');
        app.listen(port, () => { console.log('Server listening on PORT: ' + port) })
    } catch (error) {
        console.log('connection failed error:' + error)
    }
}
connectDB()