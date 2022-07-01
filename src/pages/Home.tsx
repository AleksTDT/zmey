import CodeViewer from "../components/CodeViewer";
import { Component } from "solid-js/types/render/component";

const Home: Component<{}> = (props) => {
    return <>
        <CodeViewer code={`function someFunc() {
    // this is coment
    const someVar = \`\${new Date().toLocaleDateString()} is now!\`;
    let someStr  = 'This is cool'
    for (let index = 1; index < 100; index++) {
        console.log(index + index);        
    }

    /*this isFinitemulty
    line
    comment*/
}`} />
    </>;
};

export default Home;