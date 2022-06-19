import { Component, onMount } from 'solid-js';

let themeEl: HTMLElement | null;

const onDark = () => {
    themeEl!.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
}
const onLight = () => {
    themeEl!.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
}
const onSolar = () => {
    if (themeEl!.classList.contains('solar')) {
        themeEl!.classList.remove('solar');
        themeEl!.classList.replace('isSolar', true.toString());
    } else {
        themeEl!.classList.add('solar');
        themeEl!.classList.replace('isSolar', false.toString());
    };
}

const setUpThemePicker = () => {
    themeEl = document.getElementById('theme');
    let theme = localStorage.getItem('theme');
    let isSolar = localStorage.getItem('isSolar');

    if (theme) {
        themeEl!.classList.add(theme);
        isSolar && themeEl!.classList.add('solar');
    }
}

const ThemePicker: Component = () => {
    onMount(() => setUpThemePicker())

    return <>
        <button onClick={onDark}>Dark</button>
        <button onClick={onLight}>Light</button>
        <button onClick={onSolar}>Solar</button>
    </>
}

export default ThemePicker;


