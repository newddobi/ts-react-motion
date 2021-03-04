import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useAppDispatch, useAppSelector } from "hooks";
import { motionActions } from "reducers/motion";

const MotionDialog = () => {
    const dialogFlag = useAppSelector((state) => state.motion.dialogFlag);
    const dispatch = useAppDispatch();
    const { closeDialog } = motionActions;

    const handleClickClose = () => {
        dispatch(closeDialog(false));
    };

    return (
        <div>
            <Dialog
                open={dialogFlag}
                onClose={handleClickClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">할일추가</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        할일을 제목과 내용으로 적어주세요 :)
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="제목"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="content"
                        label="내용"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickClose} color="primary">
                        취소
                    </Button>
                    <Button onClick={handleClickClose} color="primary">
                        저장
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MotionDialog;
