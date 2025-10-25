import "./NavMenu.css";
import { useState } from "react";
import globus from "../../assets/globus.png";
import { useNavigate } from "react-router-dom";


import Buttons from "./Buttons/Buttons";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState("home");
  const navigate = useNavigate();

  function handleClick(value) {
    setIsOpen(value);
  }

  function handleTourClick() {
    if (window.location.pathname === "/") {
      const form = document.getElementById("form");
      form?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const form = document.getElementById("form");
        form?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }

  return (
    <nav>
      <div className="name-wrap">
        <img src={globus} alt="Глобус" />
        <p className="country">Kyrgyzstan</p>
      </div>
      <div className="buttons-con">
        <Buttons
          inner="Главная"
          onClick={() => handleClick("home")}
          value={isOpen === "home"}
          path="/"
        />
        <Buttons
          inner="Места"
          onClick={() => handleClick("landmark")}
          value={isOpen === "landmark"}
          path="/landmark"
        />
      </div>
      <button className="nav-button" onClick={handleTourClick}>Тур</button>
    </nav>
  );
}
