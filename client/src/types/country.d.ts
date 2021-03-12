interface Country {
  ISOCode: string;
  capital: string;
  capitalLocation: { coordinates: [number, number] };
  countryName: string;
  currency: string;
  imageUrl: string;
  localizations: [];
  videoId: string;
  about: string;
  _id: string;
}