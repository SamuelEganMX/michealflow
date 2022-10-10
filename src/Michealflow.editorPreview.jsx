import { createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

export function preview({ sampleText }) {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss() {
    return require("./ui/Michealflow.css");
}
