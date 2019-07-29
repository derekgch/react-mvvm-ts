import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import { TransitionProps } from '@material-ui/core/transitions';

interface Props {
  open:boolean,
  onClose:()=>any,
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FruitEdit: React.FC<Props> = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
      keepMounted
    >
    <DialogActions>
      <Button onClick={props.onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={props.onClose} color="primary">
        Save
      </Button>
    </DialogActions>

    </Dialog>
  )
}

export default FruitEdit
