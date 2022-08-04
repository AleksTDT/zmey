import { Component } from "solid-js";
import { NavLink } from "solid-app-router";
import ThemePicker from "./ThemePicker";

const Header: Component = () => {
  return (
    <header>
      <span class="logo">
        <img src="src/assets/zmey.ico" />
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
};

export default Header;
