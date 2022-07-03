import { Component, createSignal, onMount } from 'solid-js';

import ZmSwitch from './ZmSwitch';

const ThemePicker: Component = () => {

    let themeEl: HTMLElement | null;
    const [isLight] = createSignal(JSON.parse(localStorage.getItem('isLight') ?? 'false'));
    const [isSolar] = createSignal(JSON.parse(localStorage.getItem('isSolar') ?? 'false'));

    onMount(() => {
        themeEl = document.getElementById('root');
        onLight(isLight());
        onSolar(isSolar());
    })

    const onLight = (isLight: boolean) => {
        localStorage.setItem('isLight', isLight.toString());
        if (isLight) {
            themeEl!.classList.add('light')
            themeEl!.classList.remove('dark')
        } else {
            themeEl!.classList.add('dark')
            themeEl!.classList.remove('light')
        }    
    }

    const onSolar = (isSolar: boolean) => {
        localStorage.setItem('isSolar', isSolar.toString());
        isSolar
            ? themeEl!.classList.add('solar')
            : themeEl!.classList.remove('solar')
    }

    return <span class='theme-picker'>
        <ZmSwitch checked={isLight()} lableLeft='Dark' lableRight='Light' onChange={onLight} />
        <ZmSwitch checked={isSolar()} lableRight='Solar' onChange={onSolar} />
    </span>
}

export default ThemePicker;


