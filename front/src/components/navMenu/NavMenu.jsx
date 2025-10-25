import "./NavMenu.css";
import { useState } from "react";
import globus from "../../assets/globus.png";

import Buttons from "./Buttons/Buttons";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState("home");

  function handleClick(value) {
    setIsOpen(value);
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
      <a href="#form"><button className="nav-button">Тур</button></a>
    </nav>
  );
}
