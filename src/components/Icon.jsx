export default function IconButton({ handleClick, children }) {
  return (
    <button
      onClick={handleClick}
      className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-800"
    >
      {children}
    </button>
  );
}
