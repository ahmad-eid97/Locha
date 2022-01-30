// IMPORTING REACT & NEXT STUFF
import * as React from 'react';
import { Link } from 'react-scroll';
import NavList from './NavList';

// IMPORTING MATERIAL STUFF
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

// STYLES FILES
import classes from './MobileMenu.module.scss'

const MobileMenu = () => {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.mobNavList}>
        {NavList.map(item => (
          <ListItem  key={item.title}>
            <ListItemIcon>
              {item.title === 'Home' && <CottageOutlinedIcon />}
              {item.title === 'Features' && <AcUnitOutlinedIcon />}
              {item.title === 'Pricing' && <MonetizationOnOutlinedIcon />}
              {item.title === 'Testimonial' && <PeopleAltOutlinedIcon />}
            </ListItemIcon>
            <Link 
            onClick={toggleDrawer(anchor, false)}
            to={item.path} 
            activeClass={classes.active} 
            smooth={true} 
            duration={500}
            spy={true}>
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <>
          <Button onClick={toggleDrawer('right', true)}><WidgetsOutlinedIcon 
            sx={{color:'#273c75'}} /></Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </>
    </div>
  );
}

export default MobileMenu;
