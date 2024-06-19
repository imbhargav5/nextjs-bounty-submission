interface ToggleButtonProps {
  isMonthly?: boolean;
  onToggle: () => void;
}

export function PlanToggleButton({ isMonthly, onToggle }: ToggleButtonProps) {
  return (
    <div className="flex justify-center mb-8">
      <button
        className={`px-4 py-2 rounded-l-lg ${
          isMonthly ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
        onClick={onToggle}
      >
        Monthly
      </button>
      <button
        className={`px-4 py-2 rounded-r-lg ${
          !isMonthly ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}
        onClick={onToggle}
      >
        Yearly
      </button>
    </div>
  );
}
