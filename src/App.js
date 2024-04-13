// external imports
import confetti from "canvas-confetti";
import { HotKeys } from "react-hotkeys";

// internal imports
import "./App.css";

export function App() {
    const keyMap = {
        KEYS_SEQUENCE: "c s s b a t t l e",
    };

    const handlers = {
        KEYS_SEQUENCE: () => blastConfetti(),
    };

    const blastConfetti = () => {
        confetti();
    };

    return (
        <HotKeys keyMap={keyMap} handlers={handlers}>
            <p className="main-text">Type "cssbattle"</p>
        </HotKeys>
    );
}
