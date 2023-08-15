import { ComponentType, Country } from '../types/types';
import CountryItem from './CountryItem';
import Pagination from './Pagination';
// import Input from './Input';
import Select from './Select';

interface Props {
  onSetDisplayComponent: (value: ComponentType) => void;
  onSelectedCountry: (value: Country) => void;
  onSelectedRegion: (value: string) => void;
  countries: Country[];
  canGoPrev: boolean;
  canGoNext: boolean;
  onGoToPrev: () => void;
  onGoToNext: () => void;
}

function Home({
  countries,
  onSetDisplayComponent,
  onSelectedCountry,
  onSelectedRegion,
  canGoPrev,
  canGoNext,
  onGoToPrev,
  onGoToNext,
}: Props) {
  // function handleSubmit(e: React.FormEvent) {
  //   e.preventDefault();
  // }

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:items-center sm:justify-between">
        {/* <form onSubmit={handleSubmit}>
          <Input />
        </form> */}
        <Select onSelectedRegion={onSelectedRegion} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-8">
        {countries.length &&
          countries.map(country => (
            <CountryItem
              key={country.name}
              details={country}
              onSetDisplayComponent={onSetDisplayComponent}
              onSelectedCountry={onSelectedCountry}
            />
          ))}
      </div>

      <Pagination
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        onGoToPrev={onGoToPrev}
        onGoToNext={onGoToNext}
      />
    </div>
  );
}

export default Home;
