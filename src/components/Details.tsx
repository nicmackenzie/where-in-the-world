import { Country, ComponentType } from '../types/types';
import { numberFormatter } from '../utils';

interface Props {
  selectedCountry: Country | undefined;
  onSetDisplayComponent: (value: ComponentType) => void;
}

export default function Details({
  selectedCountry,
  onSetDisplayComponent,
}: // onSetDisplayComponent,
Props) {
  if (!selectedCountry) return null;

  return (
    <div className="container">
      <div className="flex flex-col gap-16 mt-16">
        <button
          onClick={() => onSetDisplayComponent('home')}
          className="border-none self-start bg-light-elements shadow-md dark:bg-dark-elements px-4 py-2 rounded-sm hover:bg-gray-300 hover:dark:bg-gray-500"
        >
          &larr; Back
        </button>
        <div className="flex flex-col sm:flex-row gap-16">
          <img
            src={selectedCountry.flag}
            alt={selectedCountry.name}
            className="w-full sm:w-1/2 max-h-80"
          />
          <div className="w-full sm:w-1/2 flex flex-col gap-8 sm:block self-start sm:self-center">
            <h1 className="text-2xl font-extrabold sm:mb-4">
              {selectedCountry.name}
            </h1>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between mb-8">
              <div className="space-y-1">
                <p>
                  <span className="font-extrabold">Native Name: &nbsp;</span>{' '}
                  {selectedCountry.nativeName}
                </p>
                <p>
                  <span className="font-extrabold">Population: &nbsp;</span>{' '}
                  {numberFormatter(selectedCountry.population)}
                </p>
                <p>
                  <span className="font-extrabold">Region: &nbsp;</span>{' '}
                  {selectedCountry.region}
                </p>
                <p>
                  <span className="font-extrabold">Sub Region: &nbsp;</span>{' '}
                  {selectedCountry.subregion}
                </p>
                <p>
                  <span className="font-extrabold">Capital: &nbsp;</span>{' '}
                  {selectedCountry.capital}
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <span className="font-extrabold">
                    Top Level Domain: &nbsp;
                  </span>{' '}
                  {selectedCountry.topLevelDomain.join(',')}
                </p>
                <p>
                  <span className="font-extrabold">Languages: &nbsp;</span>{' '}
                  {selectedCountry.languages.map(lang => lang.name).join(',')}
                </p>
              </div>
            </div>
            <div className="flex flex-col self-start sm:flex-row gap-4 items-center">
              <div className="self-start sm:self-center">Border Countries:</div>
              {selectedCountry.borders ? (
                <div className="flex gap-2">
                  {selectedCountry.borders?.map(border => (
                    <span
                      key={border}
                      className="py-1 px-2 shadow-md rounded bg-light-elements dark:bg-dark-elements"
                    >
                      {border}
                    </span>
                  ))}
                </div>
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
          {/* {selectedCountry.name} */}
        </div>
      </div>
    </div>
  );
}
