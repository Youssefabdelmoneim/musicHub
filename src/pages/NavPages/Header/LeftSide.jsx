import { useNavigate } from "react-router-dom";
import IconButton from "../../../components/Icon";
import Logo from "../../../components/Logo";
export default function LeftSide({ handleCollapsing }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <IconButton handleClick={handleCollapsing}>
        <svg
          className="h-6 w-6 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </IconButton>
      <Logo />
    </div>
  );
}
