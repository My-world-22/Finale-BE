import { express } from "express"
import { postUserVerifier } from "./controllerRouteUser"
const loginUser = express.Router()
loginUser.post('/' ,postUserVerifier)