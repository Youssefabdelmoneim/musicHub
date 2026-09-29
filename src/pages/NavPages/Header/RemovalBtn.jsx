export default function RemovalBtn({ setInputField }) {
  return (
    <button
      onClick={() => setInputField("")}
      type="button"
      aria-label="Clear search"
      className="ml-1 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-200 active:scale-95"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round] sm:h-5 sm:w-5"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
}
