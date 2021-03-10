import Country from './country.schema';

class CountriesService {
  async getAll() {
    const countries = await Country.find();
    return countries;
  }

  async create(country) {
    const newCountry = await Country.create(country);
    return newCountry;
  }
}

export default new CountriesService();
