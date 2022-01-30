// IMPORTING REACT & NEXT STUFF
import * as React from 'react';
import { Link } from 'react-scroll'
import NavList from './NavList';

// IMPORTING MATERIAL-UI COMPONENTS
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// IMPORTINS NEXT COMPONENTS
import MobileMenu from './MobileMenu';

// IMPORTING EXTERNAL STYLES
import classes from './NavBar.module.scss'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={classes.navbar}>
        <Container maxWidth="xl">
          <Toolbar>

            {/* NAV BRAND LOGO AND TITILE */}
            <Typography className={classes.navBrand} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to='home' smooth={true} duration={500}>
                <img src="/images/header/logo.png" alt="" />
                L<span>O</span>cha
              </Link>
            </Typography>

            {/* NAV NAVIGATING LINKS */}
            <List className={classes.deviceNavList}>
              {NavList.map(item => (
                <ListItem key={item.title}>
                  <Link
                  activeClass={classes.active}
                  to={item.path} 
                  smooth={true} 
                  duration={500}
                  spy={true}>
                    {item.title}
                  </Link>
                </ListItem>
              ))}
            </List>

            <Typography sx={{flexGrow: 1}}></Typography>

            {/* MOBILE MENU NAVIGATOR */}
            <div className={classes.mobileMenu}>
              <MobileMenu />
            </div>

            {/* GET STAETED BUTTON */}
            <button className={classes.startBtn}>
              Get Started
            </button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default NavBar;
