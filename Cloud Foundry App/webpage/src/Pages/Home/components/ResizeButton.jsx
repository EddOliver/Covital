import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { createMuiTheme,ThemeProvider} from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';

const ResizableIconButton = ({classes, size, ...props}) =>
<IconButton className={classes[size]} {...props}/>

const styles = {
    small: {
        '& svg': {
            fontSize: 18
        }
    },
    medium: {
        '& svg': {
            fontSize: 24
        }
    },
    large: {
        '& svg': {
            fontSize: "200%"
        }
    },
    larges: {
        '& svg': {
            fontSize: 40
        }
    },
    largess: {
        '& svg': {
            fontSize: 60
        }
    }
};

export default withStyles(styles)(ResizableIconButton);