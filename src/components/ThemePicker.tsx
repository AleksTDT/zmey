import { Component, onMount } from 'solid-js';

import ZmSwitch from './ZmSwitch';

let themeEl: HTMLElement | null;

const ThemePicker: Component = () => {

    onMount(() => {
        themeEl = document.getElementById('theme');
    })

    const onLight = (isLight: boolean) => {
        themeEl!.classList.toggle('light');
        themeEl!.classList.toggle('dark');
        localStorage.setItem('isLight', isLight.toString());
    }

    const onSolar = (isSolar: boolean) => {
        localStorage.setItem('isSolar', isSolar.toString());
        themeEl!.classList.toggle('solar');
    }

    return <span class='theme-picker'>
        <ZmSwitch checked={JSON.parse(localStorage.getItem('isLight') ?? 'false')} lableLeft='Dark' lableRight='Light' onChange={onLight} />
        <ZmSwitch checked={JSON.parse(localStorage.getItem('isSolar') ?? 'false')} lableRight='Solar' onChange={onSolar} />
    </span>
}

export default ThemePicker;


