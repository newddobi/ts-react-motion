import React from "react";
import { useAppDispatch } from "hooks";
import { motionActions } from "reducers/motion";
import MotionDialog from "./MotionDialog";

const Header = () => {
    const dispatch = useAppDispatch();
    const { showDialog } = motionActions;

    const handleClickOpen = () => {
        dispatch(showDialog(true));
    };

    return (
        <header className="banner">
            <h1 className="banner__title">Motion</h1>
            <ul className="control-panel">
                <li>
                    <button
                        id="new-image"
                        className="create-button"
                        onClick={handleClickOpen}
                    >
                        Image
                    </button>
                </li>
                <li>
                    <button
                        id="new-video"
                        className="create-button"
                        onClick={handleClickOpen}
                    >
                        Video
                    </button>
                </li>
                <li>
                    <button
                        id="new-note"
                        className="create-button"
                        onClick={handleClickOpen}
                    >
                        Note
                    </button>
                </li>
                <li>
                    <button
                        id="new-todo"
                        className="create-button"
                        onClick={handleClickOpen}
                    >
                        Todo
                    </button>
                </li>
            </ul>
            <MotionDialog/>
        </header>
    );
};

export default Header;
