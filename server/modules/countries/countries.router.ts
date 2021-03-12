import { Router } from 'express';
import countriesController from './countries.controller';

const router = Router();

router.get('/all', countriesController.getAll);
router.get('/country/:id', countriesController.getDetails);
router.post('/country', countriesController.create);

export default router;
