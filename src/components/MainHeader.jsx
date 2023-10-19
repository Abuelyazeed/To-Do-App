import { useState } from "react";
import "./MainHeader.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";
function MainHeader({ darkMode }) {
  const [moonIcon, setMoonIcon] = useState(true);

  function lightModeHandler() {
    darkMode();
    setMoonIcon(!moonIcon);
  }
  return (
    <div className="header">
      <h1>MY TASKS</h1>
      {moonIcon ? (
        <button className="dark-mode-icon" onClick={lightModeHandler}>
          <MdDarkMode />
        </button>
      ) : (
        <button className="dark-mode-icon" onClick={lightModeHandler}>
          <MdLightMode />
        </button>
      )}
    </div>
  );
}

export default MainHeader;
