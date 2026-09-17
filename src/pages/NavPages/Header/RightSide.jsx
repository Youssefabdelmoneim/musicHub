export default function RightSide() {
  return (
    <div className="flex items-center gap-3">
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <button className="h-full w-8 cursor-pointer overflow-hidden rounded-full">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect width="100%" height="100%" fill="#FFFFFF" />
      </svg>
    </button>
  );
}
