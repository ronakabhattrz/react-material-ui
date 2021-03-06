import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

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
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "5rem"
    },
    icon: { 
        height: "4rem",
        width: "4rem",
        [theme.breakpoints.down("xs")]: {
            height: "2.5rem",
            width: "2.5rem"
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop: '-6rem',
        right: "1.5rem",
        [theme.breakpoints.down("xs")]: {
            right: "0.6rem",
        }
    }
}))

export default function Footer(){
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justify="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/" className={classes.link}>
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/services" className={classes.link}>
                                Services
                            </Grid>
                            <Grid item component={Link} to="/custom-software-development" className={classes.link}>
                                Custom Software
                            </Grid>
                            <Grid item component={Link} to="/mobile-development" className={classes.link}>
                                Mobile development
                            </Grid>
                            <Grid item component={Link} to="/website-development" className={classes.link}>
                                website development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/revolution" className={classes.link}>
                                Revolution
                            </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link}>
                                Technology
                            </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link}>
                                Process
                            </Grid>
                            <Grid item component={Link} to="/revolution" className={classes.link}>
                                Vision
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/about" className={classes.link}>
                                About Us
                            </Grid>
                            <Grid item component={Link} to="/about" className={classes.link}>
                                Team
                            </Grid>
                            <Grid item component={Link} to="/about" className={classes.link}>
                                History
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item component={Link} to="/contact" className={classes.link}>
                                Contact Us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img alt="black decoratiev slash" src={footerAdornment}
                className={classes.adornment}    
            />
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
                    <img alt="Facebook" src={facebook} className={classes.icon} />
                </Grid>
                <Grid item component={"a"}  href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="Twiter" src={twitter} className={classes.icon}  />
                </Grid>
                <Grid item component={"a"}  href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="Instagram" src={instagram} className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    ); 
}