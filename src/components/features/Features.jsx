// MATERIAL STUFF
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// MATERIAL ICONS
import BoltIcon from '@mui/icons-material/Bolt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CameraIcon from '@mui/icons-material/Camera';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaidIcon from '@mui/icons-material/Paid';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

// STYLES FILES
import classes from './Features.module.scss'

const Features = () => {
  return (
    <section className={classes.features} id="features">

      {/* SECTION LABEL */}
      <h4 className="slogan">WHAT&lsquo;S GOING ON HERE !?</h4>
      <h1 className="sectionLabel">Our Products Awesome Features</h1>
      <p className="underHeader"></p>

      {/* SECTION CONTENT */}
      <div className={classes.feats}>
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid item sm={6} lg={3}>
              <div className={`${classes.img} ${classes.img1}`}>
                <BoltIcon />
              </div>
              <h3>Fast Performance</h3>
              <p>Incredibelly fast in contacting and dealing with multiple customers inteligent way at the same time...</p>
            </Grid>
            <Grid item sm={6} lg={3}>
              <div className={`${classes.img} ${classes.img2}`}>
                <BusinessCenterIcon className={classes.small} />
              </div>
              <h3>Awesome Deals</h3>
              <p>We got awesome deals for you that makes shopping and choosing your stuff is the funniest thing...</p>
            </Grid>
            <Grid item sm={6} lg={3}>
              <div className={`${classes.img} ${classes.img3}`}>
                <CameraIcon className={classes.small} />
              </div>
              <h3>Free Services</h3>
              <p>A long your way with us you will find awesome deals and services you can pay to get them...</p>
            </Grid>
            <Grid item sm={6} lg={3}>
              <div className={`${classes.img} ${classes.img4}`}>
                <SupportAgentIcon />
              </div>
              <h3>Customer Service</h3>
              <p>You will never get stuck with us. you can always contact us any time if you found any problem...</p>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* PAID SECTION */}
      <div className={classes.paid}>
        <Container maxWidth="lg">
          <Grid container spacing={10} className={classes.wrapper}>
            <Grid item md={6} className={classes.phoneSide}>
              <img src="/images/features/phone2.png" alt="" />
              <img className={classes.blob} src="/images/features/blob.svg" alt="" />
            </Grid>
            <Grid item md={6} className={classes.textSide}>
              <h2>Don&lsquo;t worry you will not pay too much for our awesome services...</h2>
              <p>There several ways to get free services with us but also you can find awesome paid services that will make your life on fire, be with us...</p>
              <div className={`${classes.icon} ${classes.icon1}`}>
                <AddShoppingCartIcon />
              </div>
              <div className={`${classes.icon} ${classes.icon2}`}>
                <PaidIcon />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* STEPS SECTION */}
      <div className={classes.steps}>

        {/* TOP SVG SHAPE */}
        <div className={classes.stepsLayout2}></div>

        {/* INSIDE STEPS */}
        <div className={classes.inside}>
          <Container maxWidth="xl">
            <Grid container spacing={5}>
              <Grid item sm={6} lg={3}>
                <div className={classes.num}>
                  01
                </div>
                <h3>Set your instructions</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ipsam. Magnam, quo debitis! Deserunt animi a neque expedita? Vel</p>
              </Grid>
              <Grid item sm={6} lg={3}>
                <div className={`${classes.num} ${classes.midNum}`}>
                  02
                </div>
                <h3>Destribution methods</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ipsam. Magnam, quo debitis! Deserunt animi a neque expedita? Vel</p>
              </Grid>
              <Grid item sm={6} lg={3}>
                <div className={classes.num}>
                  03
                </div>
                <h3>Your delivery means</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ipsam. Magnam, quo debitis! Deserunt animi a neque expedita? Vel</p>
              </Grid>
              <Grid item sm={6} lg={3}>
                <div className={`${classes.num} ${classes.lastNum}`}>
                  04
                </div>
                <h3>Customer funds payment</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, ipsam. Magnam, quo debitis! Deserunt animi a neque expedita? Vel</p>
              </Grid>
            </Grid>
          </Container>
        </div>

        {/* BOTTOM SVG SHAPE */}
        <div className={classes.stepsLayout}></div>
      </div>

    </section>
  )
}

export default Features;