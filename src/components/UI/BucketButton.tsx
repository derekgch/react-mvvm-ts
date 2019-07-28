import * as React from 'react';
import Button from '@material-ui/core/Button';

interface IButtonProps {
  _id:string,
  description:string
}

const BucketButton: React.FunctionComponent<IButtonProps> = (props) => {
  return <Button  variant="contained" color="primary">
    Button!
    {props._id}
    {props.description}
    </Button>;
};

export default BucketButton;
