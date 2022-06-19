import { Component } from 'solid-js';
import { NavLink } from 'solid-app-router';

const Header: Component = () => {
    return (
        <header>
            <img src="src/assets/zmey.ico" style={"height: 1rem; margin-inline:1rem"}/>
            <span>Змей</span>
            <nav>
              <NavLink href='/' end>Вкъщи</NavLink>
              <NavLink href='/quotes'>JavaScript</NavLink>
            </nav>
        </header>
    )
}

export default Header;