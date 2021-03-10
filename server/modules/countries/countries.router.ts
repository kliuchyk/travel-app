import { Router } from 'express';
import countriesController from './countries.controller';

const router = Router();

router.get('/all', countriesController.getAll);
router.post('/country', countriesController.create);
// router.get('/posts/:id', countriesController.getOne);
// router.delete('/posts/:id', countriesController.delete);
// router.put('/posts', countriesController.update);

export default router;
