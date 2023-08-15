import { useEffect, useState } from 'react';
import Home from './components/Home';
import Details from './components/Details';
import Header from './components/Header';
import { ComponentType, Country } from './types/types';
import { PAGE_SIZE } from './utils';

function App() {
  const [displayComponent, setDisplayComponent] =
    useState<ComponentType>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>();
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(function () {
    async function fetchCountries() {
      const res = await fetch('./data.json');
      const data = await res.json();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  function toogleTheme() {
    setIsDarkMode(prev => !prev);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      }
    },
    [isDarkMode]
  );

  const filteredCountries = countries.filter(country => {
    if (selectedRegion === '') return true;
    return country.region === selectedRegion;
  });

  const totalPosts = filteredCountries.length;
  const totalPages = Math.floor(totalPosts / PAGE_SIZE);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setCurrentPage(nextPage);
  };

  const start = PAGE_SIZE * (currentPage - 1);
  const end = PAGE_SIZE * currentPage;
  const postsPerPage = filteredCountries.slice(start, end);

  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  return (
    <>
      <Header onSetDarkMode={toogleTheme} isDarkMode={isDarkMode} />
      {displayComponent === 'home' ? (
        <Home
          countries={postsPerPage}
          onSetDisplayComponent={setDisplayComponent}
          onSelectedCountry={setSelectedCountry}
          onSelectedRegion={setSelectedRegion}
          canGoPrev={canGoPrev}
          canGoNext={canGoNext}
          onGoToPrev={goToPrev}
          onGoToNext={goToNext}
        />
      ) : (
        <Details
          selectedCountry={selectedCountry}
          onSetDisplayComponent={setDisplayComponent}
        />
      )}
    </>
  );
}

export default App;
