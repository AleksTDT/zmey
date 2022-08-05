import { Component } from "solid-js";
import Prism from "prismjs";

interface CodeViewerProp {
  code: string;
}

const CodeViewer: Component<CodeViewerProp> = (prop: CodeViewerProp) => {
  const highlightedHtml: string = Prism.highlight(
    prop.code,
    Prism.languages.javascript,
    "javascript"
  );

  return (
    <pre>
      <code innerHTML={highlightedHtml}></code>
    </pre>
  );
};

export default CodeViewer;
