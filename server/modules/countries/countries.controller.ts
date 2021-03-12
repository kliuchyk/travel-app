import { Request, Response } from 'express';
import CountriesService from './countries.service';

class CountriesController {
  async getAll(req: Request, res: Response) {
    try {
      const countries = await CountriesService.getAll();
      return res.json(countries);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const country = await CountriesService.create(req.body);
      res.json(country);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getDetails(req: Request, res: Response) {
    try {
      const details = await CountriesService.getDetails(req.params.id);
      res.json(details);
    } catch(error) {
      res.status(500).json(error);
    }
  }
}

export default new CountriesController();
