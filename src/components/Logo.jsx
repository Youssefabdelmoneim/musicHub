import { useNavigate } from "react-router-dom";
export default function Logo() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <div
      className="flex cursor-pointer items-center gap-1"
      onClick={handleNavigation}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-none stroke-emerald-400 stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" fill="#10b981" />
        <circle cx="18" cy="16" r="3" fill="#10b981" />
      </svg>
      <div className="text-xl font-semibold tracking-tight">
        Music<span className="text-emerald-400">Hub</span>
      </div>
    </div>
  );
}
