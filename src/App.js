// external imports
import confetti from "canvas-confetti";
import { HotKeys } from "react-hotkeys";
import { useEffect, useRef } from "react";

// internal imports
import "./App.css";
import { getRandomConfig } from "./utils/confetti-config";

export function App() {
    const keyMap = {
        KEYS_SEQUENCE: "c s s b a t t l e",
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
        // focus only working as expected when it changes from one element to another
        // that is the reason why here I switch focus from hotkeys element to paragraph element
        hotkeysRef?.current?.focus();
        textRef?.current?.focus();
    }, []);

    return (
        <HotKeys keyMap={keyMap} handlers={handlers} innerRef={hotkeysRef}>
            <p className="main-text" tabIndex={-1} ref={textRef}>
                Type "cssbattle"
            </p>
        </HotKeys>
    );
}
