import React from 'react';
import {makeStyles} from '@material-ui/styles';

import footerAdornment from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer:{ 
        backgroundColor: '#0B71B9',
        width: "100%",
        zIndex: 1302,
        position: "relative"
    },
    adornment: { 
        width: '25%',
        verticalAlign: "bottom",
        [theme.breakpoints.down("md")]:{
            width: "21em"
        },
        [theme.breakpoints.down("xs")]:{
            width: "15em"
        }
    }
}))

export default function Footer(){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <img alt="black decoratiev slash" src={footerAdornment}
                className={classes.adornment}    
            />
        </footer>
    ); 
}