import { Link } from "react-router-dom";
import "../NavMenu.css"

export default function Buttons({ inner, onClick, value, path }) {
  return (
    <Link 
        onClick={() => onClick()}
        className={value ? "active" : "not-active"}
        to={path}
    >
      {inner}
    </Link>
  );
}
