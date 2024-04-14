// external imports
import confetti from "canvas-confetti";
import { HotKeys } from "react-hotkeys";
import { useEffect, useRef } from "react";

// internal imports
import "./App.css";
import { getRandomConfig } from "./utils/confetti-config";

export function App() {
    const keyMap = {
        KEYS_SEQUENCE: ["c s s b a t t l e", "C S S B A T T L E"],
    };

    const handlers = {
        KEYS_SEQUENCE: () => blastConfetti(),
    };

    const blastConfetti = () => {
        // get random configuration to blast confetti
        const config = getRandomConfig();

        confetti(config);
    };

    const hotkeysRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        hotkeysRef?.current?.focus();
        textRef?.current?.focus();
        /* Focus only working as expected when it changes from one element to another,
         that is the reason why here focus is switched from hotkeys element to paragraph element.
         I have tried all others methods, focusing on just 1 element is not working. */
    }, []);

    return (
        <HotKeys keyMap={keyMap} handlers={handlers} innerRef={hotkeysRef}>
            <p className="main-text" tabIndex={-1} ref={textRef}>
                Type "cssbattle"
            </p>
        </HotKeys>
    );
}
