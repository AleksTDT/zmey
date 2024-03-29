import { Component } from "solid-js";
import { NavLink } from "solid-app-router";
import ThemePicker from "./ThemePicker";
import { svgs } from "../assets/svgs";

const Header: Component = () => (
  <header>
    <span class="logo">
      {svgs.dragon}
      <span>Змей</span>
    </span>
    <nav>
      <NavLink href="/" end>
        Вкъщи
      </NavLink>
      <NavLink href="/article">JavaScript</NavLink>
    </nav>
    <ThemePicker />
  </header>
);

export default Header;
