/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0, 
    });
  }

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em"
    },
    logo: {
      height: "8em" 
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    tabContainer: { 
      marginLeft: 'auto'
    },
    tab: { 
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px'
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '50px',
      height: "45px",
    }
  }));

export default function Header(props){
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
      setValue(value)
    }

    const pages = ["/","/services","/revolution","/about","/contact","/estimate"]

    useEffect(() =>{
      pages.forEach((page, index) => {
        if (window.location.pathname === page && value !== index) {
          setValue(index)
        } 
      })
    });

    return (
      <React.Fragment>
        <ElevationScroll> 
            <AppBar position="fixed">
                <Toolbar disableGutters>
                  <Button 
                    component={Link} to="/" 
                    label="Home" className={classes.logoContainer} 
                    onClick={() => setValue(0)} disableRipple>
                    <img alt="Company Logo" className={classes.logo} src={logo}/>
                  </Button>
                  <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    className={classes.tabContainer}
                    indicatorColor="primary"
                  >
                    <Tab className={classes.tab} component={Link} to="/" label="Home" />
                    <Tab className={classes.tab} component={Link} to="/services" label="Services" />
                    <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
                    <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
                    <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
                  </Tabs>
                  <Button variant="contained" color="secondary" 
                    className={classes.button}
                    component={Link} 
                    to="/estimate"
                  >
                    Free Estimate
                  </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </React.Fragment>
    )
}