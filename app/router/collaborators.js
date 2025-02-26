import { Router } from "express";
import collaboratorsController from "../../collaborators.controller.js";

const collaboratorsRouter = new Router();

collaboratorsRouter.get('/collaborators', collaboratorsController.getAll);
collaboratorsRouter.get('/collaborators/:id', collaboratorsController.getOne);
collaboratorsRouter.post('/collaborators', collaboratorsController.create);
collaboratorsRouter.put('/collaborators/:id', collaboratorsController.update);
collaboratorsRouter.delete('/collaborators/:id', collaboratorsController.delete);

export default collaboratorsRouter;