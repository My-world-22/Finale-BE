import express from "express";
import { getUser, postUser, putUser, deleteUser, getUserId, postUserVerifier } from "./controllerRouteUser.js"
import checkToken from "../middleware/jwtCheckToken.js";


const routerUser = express.Router()

// routerUser.get('/', getUser);
routerUser.get('/:id', getUserId);
// routerUser.get('/:id',getUserId)
routerUser.post('/', postUser);
routerUser.post('/session', postUserVerifier);
routerUser.put('/:id' ,checkToken, putUser);
routerUser.delete('/:id' ,checkToken, deleteUser);


export default routerUser;