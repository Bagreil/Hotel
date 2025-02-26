import { Router } from "express";
import bookingController from "../../booking.controller.js";

const bookingRouter = new Router();

bookingRouter.get('/booking', bookingController.getAll);
bookingRouter.get('/booking/:id', bookingController.getOne);
bookingRouter.post('/booking', bookingController.create);
bookingRouter.put('/booking/:id', bookingController.update);
bookingRouter.delete('/booking/:id', bookingController.delete);

export default bookingRouter;