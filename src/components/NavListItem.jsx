import { useNavigate } from "react-router-dom";
export default function NavListItem({ path, children }) {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(path)}>
      <button
        type="button"
        className="flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
      >
        {children}
      </button>
    </li>
  );
}
