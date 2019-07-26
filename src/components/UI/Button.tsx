import * as React from 'react';

interface IButtonProps {
  _id:string,
  description:string
}

const Button: React.FunctionComponent<IButtonProps> = (props) => {
  return <button>
    Button!
    {props._id}
    {props.description}
    </button>;
};

export default Button;
