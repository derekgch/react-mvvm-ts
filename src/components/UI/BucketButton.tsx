import * as React from 'react';
import Button from '@material-ui/core/Button';

interface IButtonProps {
  _id:string,
  description:string,
  handleClick:(event: React.MouseEvent<HTMLButtonElement>, id:string)=>void
}

const BucketButton: React.FunctionComponent<IButtonProps> = (props) => {
  return <Button  variant="contained" color="primary" onClick={(event) => props.handleClick(event, props._id)}>
    Bucket Button!
    --{props._id}--
    {props.description}
    </Button>;
};

export default BucketButton;
