import * as React from 'react';

interface IButtonProps {
  _id:string,
  description:string
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return <div>
    Button!
    {props._id}
    {props.description}
    </div>;
};

export default Button;
