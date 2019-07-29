import React, { useState, useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import { TransitionProps } from '@material-ui/core/transitions';

interface Props {
  open:boolean,
  onClose:()=>any,
  fruitID:string,
  fruitDescription:string
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FruitEdit: React.FC<Props> = (props) => {
  const { fruitDescription, fruitID } = props;
  const [ descriptionText, setDescriptionText ] = useState(fruitDescription || "");
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
    setDescriptionText(event.target.value);
  }
  useEffect(()=>{
    setDescriptionText(fruitDescription);
  },[fruitDescription])

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      TransitionComponent={Transition}
      
    >
    <DialogTitle>{"Editing Fruit- " + fruitID}</DialogTitle>
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
      <Button onClick={props.onClose} color="secondary">
        Save
      </Button>
    </DialogActions>

    </Dialog>
  )
}

export default FruitEdit
