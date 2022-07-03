import { Component, createSignal } from 'solid-js';

let nextId = 1;

interface ZmSwitchProps {
    checked: boolean;
    onChange: (value: boolean) => void,
    lableLeft?: string;
    lableRight?: string;
}

const ZmSwitch: Component<ZmSwitchProps> = (props: ZmSwitchProps) => {
    const id = `switch-${nextId++}`

    const [selected, setSelected] = createSignal(props.checked);
    const onChange = () => {
        setSelected(!selected());
        props.onChange(selected());
    };

    return (
        <div class='switch'>
            <label for={id}>{props.lableLeft}</label>
            <span>
                <input type="checkbox" checked={selected()} onChange={onChange} id={id} />
                <label for={id}></label>
            </span>
            <label for={id}>{props.lableRight}</label>
        </div>
    )
}

export default ZmSwitch;