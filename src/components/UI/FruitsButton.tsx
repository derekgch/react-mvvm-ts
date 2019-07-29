import React from 'react'
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { withTheme } from '@material-ui/styles';
const primary_color = red[300];

let theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: '#000',
    },
  },
});
theme = responsiveFontSizes(theme);

interface FruitsButtonProps {
  _id:string,
  description:string
}

const FruitsButton: React.FC<FruitsButtonProps> = (props) => {
  return ( 
    <ThemeProvider theme={theme}>
    <div>
      <Button variant="contained" 
              color="secondary" >
        Fruit-{props._id}-{props.description}
      </Button>
    </div>
    </ThemeProvider>
  )
}

export default FruitsButton;


