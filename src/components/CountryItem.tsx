import { ComponentType, Country } from '../types/types';
import { numberFormatter } from '../utils';

interface Props {
  onSetDisplayComponent: (value: ComponentType) => void;
  onSelectedCountry: (value: Country) => void;
  details: Country;
}

export default function CountryItem({
  details,
  onSetDisplayComponent,
  onSelectedCountry,
}: Props) {
  function handleClick() {
    onSetDisplayComponent('details');
    const country = {
      name: details.name,
      population: details.population,
      region: details.region,
      capital: details.capital,
      flag: details.flag,
      nativeName: details.nativeName,
      subregion: details.subregion,
      topLevelDomain: details.topLevelDomain,
      currencies: details.currencies,
      languages: details.languages,
      borders: details.borders,
    };
    onSelectedCountry(country);
  }
  return (
    <div
      className="w-full shadow-md rounded-md overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <header className="h-[148px] overflow-hidden">
        <img src={details.flag} alt={details.name} className="w-full " />
      </header>
      <div className="px-6 py-8 bg-light-elements dark:bg-dark-elements">
        <div className="font-extrabold text-lg mb-8">{details.name}</div>
        <div>
          <div>
            <span className="font-semibold">Population:</span>{' '}
            {numberFormatter(details.population)}
          </div>
          <div>
            <span className="font-semibold">Region:</span> {details.region}
          </div>
          <div>
            <span className="font-semibold">Capital:</span> {details.capital}
          </div>
        </div>
      </div>
    </div>
  );
}
