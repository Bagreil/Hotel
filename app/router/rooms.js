import { Router } from "express";
import roomsController from "../../rooms.controller.js";

const roomsRouter = new Router();

roomsRouter.get('/rooms', roomsController.getAll);
roomsRouter.get('/rooms/:id', roomsController.getOne);
roomsRouter.post('/rooms', roomsController.create);
roomsRouter.put('/rooms/:id', roomsController.update);
roomsRouter.delete('/rooms/:id', roomsController.delete);

export default roomsRouter;