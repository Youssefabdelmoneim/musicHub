export default function ActionButton({ onClick, className = "", children }) {
  console.log(`what`);
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 px-2 text-zinc-400 shadow-sm transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-95`}
    >
      {children}
    </button>
  );
}
