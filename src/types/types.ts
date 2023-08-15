export type ComponentType = 'home' | 'details';

export type currency = {
  code: string;
  name: string;
  symbol: string;
};

export type language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export interface Country {
  name: string;
  population: number;
  region: string;
  capital: string;
  flag: string;
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: currency[];
  languages: language[];
  borders: string[];
}
