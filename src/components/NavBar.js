import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((link) => {
    return <NavLinks key={link} link = {link} />
  })


  return <nav>
    {linkElements}
  </nav>;
}

function NavLinks(props) {
  return <a href={'#' + props.link}>{props.link}</a>
}

export default NavBar;
