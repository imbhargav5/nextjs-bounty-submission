interface ToggleButtonProps {
  isMonthly?: boolean;
  onToggle: () => void;
}

export function PlanToggleButton({ isMonthly, onToggle }: ToggleButtonProps) {
  return (
    <div className="flex justify-center items-center mb-8 bg-muted rounded-md p-1 h-[38px] w-[332px]">
      <button
        className={`w-full px-3 py-1 rounded-md  ${
          isMonthly
            ? 'bg-background text-foreground border'
            : 'text-muted-foreground'
        }`}
        onClick={onToggle}
      >
        Monthly
      </button>
      <button
        className={`w-full px-3 py-1 rounded-md  ${
          !isMonthly
            ? 'bg-background text-foreground border'
            : 'text-muted-foreground'
        }`}
        onClick={onToggle}
      >
        Yearly
      </button>
    </div>
  );
}
