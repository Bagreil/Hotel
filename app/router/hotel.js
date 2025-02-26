import { Router } from "express";
import hotelController from "../../hotel.controller.js";

const hotelRouter = new Router();

hotelRouter.get('/hotel', hotelController.getAll);
hotelRouter.get('/hotel/:id', hotelController.getOne);
hotelRouter.post('/hotel', hotelController.create);
hotelRouter.put('/hotel/:id', hotelController.update);
hotelRouter.delete('/hotel/:id', hotelController.delete);

export default hotelRouter;