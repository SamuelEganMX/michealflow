import { createElement, useEffect } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/Michealflow.css";

export function Michealflow({ sampleText, buttonAction, textAttribute }) {
    async function test() {
        await delay(2000);
        await buttonAction.execute();
    }

    function delay(t, v) {
        return new Promise(resolve => {
            setTimeout(resolve.bind(null, v), t);
        });
     }

    useEffect(() => {
        if (buttonAction.canExecute) {
            test();
        }
    }, [buttonAction.canExecute]);

    return <HelloWorldSample sampleText={textAttribute.value} />;
}
