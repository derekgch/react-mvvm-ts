import React from 'react'
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
      main: '#00e',
    },
  },
});
theme = responsiveFontSizes(theme);

interface FruitsButtonProps {
  _id:string,
  description:string,
  handleclick:(event:React.MouseEvent<HTMLButtonElement>, id:string)=>void;
}

const FruitsButton: React.FC<FruitsButtonProps> = (props) => {
  return ( 
    <ThemeProvider theme={theme}>
    <div>
      <Button variant="contained" 
              color="secondary" 
              onClick={(event)=>props.handleclick(event, props._id)}
      >
        Fruit-{props._id}-{props.description}
      </Button>
    </div>
    </ThemeProvider>
  )
}

export default FruitsButton;


