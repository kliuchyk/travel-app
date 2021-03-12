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

  async getDetails(id) {
    if (!id) {
      throw new Error("Id not specified");
    }

    const countryDetails = await Country.findById(id);
    return countryDetails;
  }
}

export default new CountriesService();
