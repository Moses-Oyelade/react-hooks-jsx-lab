import React from "react";

function NavBar() {
  // update the JSX being returned!
  function handleClick(){
    return(console.log("i am clicked"))
  }

  return (
  <nav>
    <a href="#home" onClick={handleClick}>Home</a>
    <a href="#about" onClick={handleClick}>About</a>
  </nav>
  )
}

export default NavBar;
