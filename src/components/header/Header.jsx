// IMPORTING MATERIAL-UI STUFF
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NavBar from "../navbar/NavBar";

// IMPORTING STYLES FILE
import classes from './Header.module.scss'

const Header = () => {
  return (
    <>
      <NavBar />
      <div className={classes.header} id='home'>
        <Container>
          <Grid container className={classes.wrapper}>
            <Grid item xs={12} sm={6} className={classes.textSide}>
              <h4 className='slogan'>BE OUR GUEST</h4>
              <h1>Top Quality Digital Products for you To Explore</h1>
              <button className={classes.left}>
                <span className={classes.btnLayer}></span>
                <span className={classes.btnText}>TAKE A TOUR</span>
              </button>
              <button className={classes.right}>
                <span className={classes.btnLayer}></span>
                <span className={classes.btnText}>EXPLORE</span>
              </button>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.phoneSide}>
              <img src="/images/header/phone.png" alt="" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.shape}></div>
    </>
  )
}

export default Header;