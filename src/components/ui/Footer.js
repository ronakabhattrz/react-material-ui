import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

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
    },
    mainContainer: {
        position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: '0.75rem',
        fontWeight: "bold"
    }
}))

export default function Footer(){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.link}>
                            Services
                        </Grid>
                        <Grid item className={classes.link}>
                            CUstom Software
                        </Grid>
                        <Grid item className={classes.link}>
                            Mobile development
                        </Grid>
                        <Grid item className={classes.link}>
                            website development
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.link}>
                            Revolution
                        </Grid>
                        <Grid item className={classes.link}>
                            Technology
                        </Grid>
                        <Grid item className={classes.link}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.link}>
                            About Us
                        </Grid>
                        <Grid item className={classes.link}>
                            Team
                        </Grid>
                        <Grid item className={classes.link}>
                            History
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.link}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <img alt="black decoratiev slash" src={footerAdornment}
                className={classes.adornment}    
            />
        </footer>
    ); 
}