interface Props {
  canGoPrev: boolean;
  canGoNext: boolean;
  onGoToPrev: () => void;
  onGoToNext: () => void;
}

export default function Pagination({
  canGoPrev,
  canGoNext,
  onGoToPrev,
  onGoToNext,
}: Props) {
  return (
    <div className="flex items-center gap-4 mt-8">
      <button
        disabled={!canGoPrev}
        onClick={onGoToPrev}
        className="px-4 py-2 rounded-sm bg-light-elements dark:bg-dark-elements shadow-sm transition-colors hover:dark:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:dark:bg-gray-400 "
      >
        &larr; <span>Previous</span>
      </button>
      <button
        disabled={!canGoNext}
        onClick={onGoToNext}
        className="px-4 py-2 rounded-sm bg-light-elements dark:bg-dark-elements shadow-sm transition-colors hover:dark:bg-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:dark:bg-gray-400"
      >
        &rarr; <span>Next</span>
      </button>
    </div>
  );
}
