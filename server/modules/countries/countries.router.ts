import { Router } from 'express';
import countriesController from './countries.controller';

const router = Router();

router.get('/countries', countriesController.getAll);
// router.get('/posts/:id', countriesController.getOne);
// router.post('/posts', countriesController.create);
// router.delete('/posts/:id', countriesController.delete);
// router.put('/posts', countriesController.update);

export default router;
