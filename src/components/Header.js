import React from "react";

const Header = ({onDarkModeClick, isDarkMode }) =>  {
  function handleDarkModeClick()  {
    const buttonState = false;
    onDarkModeClick(buttonState)
  }

  return (
    <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
  )
}

export default Header;