import { Schema, model } from 'mongoose';

const localeSchema = new Schema({
  _id: false,
  lang: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const countrySchema = new Schema({
  countryName: String,
  capital: String,
  imageUrl: String,
  videoUrl: String,
  currency: {
    type: String,
    required: true,
  },
  ISOCode: {
    type: String,
    uppercase: true,
    unique: true,
    required: true,
  },
  capitalLocation: {
    type: {
      type: String,
      enum: ['Point'],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  localizations: [localeSchema],
});

const Country = model('Country', countrySchema);

export default Country;
