import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { TransitionProps } from '@material-ui/core/transitions';

interface Props {
  open:boolean,
  onClose:()=>void,
  editID:string,
  editDescription:string,
  handleSave:(id:string, description:string)=>void
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditForm: React.FC<Props> = (props) => {
  const { editID, editDescription } = props;
  const [ descriptionText, setDescriptionText ] = useState(editDescription || "");
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setDescriptionText(event.target.value);
  }
  useEffect(()=>{
    setDescriptionText(editDescription);
  },[editDescription])

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
      
    >
    <DialogTitle>{"Editing Fruit- " + editID}</DialogTitle>
      <DialogContent>
        Description:
        <Input   
                value={descriptionText} 
                onChange={handleChange}
                fullWidth
        >
        </Input>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => props.handleSave(editID, descriptionText)} color="secondary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditForm
