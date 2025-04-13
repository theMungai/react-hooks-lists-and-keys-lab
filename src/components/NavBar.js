import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {
        links.map((link) => (
          <li key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))
      }
    </nav>
  )
  
}

export default NavBar;
