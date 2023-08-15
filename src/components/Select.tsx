interface Props {
  onSelectedRegion: (value: string) => void;
}

const options = [
  'Asia',
  'Europe',
  'Africa',
  'Oceania',
  'Americas',
  'Polar',
  'Antarctic Ocean',
  'Antarctic',
];

export default function Select({ onSelectedRegion }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    onSelectedRegion(e.target.value);
  }

  return (
    <select
      onChange={handleChange}
      className="sm:w-1/4 px-4 py-2 bg-light-elements dark:bg-dark-elements rounded-md shadow-md outline-none font-sm"
    >
      <option value="">All</option>
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
