// REACT LIBRARIES
import Carousel from 'react-multi-carousel';

// MATERIAL STUFF
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

// MATERIAL ICONS
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// STYLES FILES
import classes from './Testimonial.module.scss'
import 'react-multi-carousel/lib/styles.css';

const Testimonial = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className={classes.testimonial} id='testimonial'>
      <h4 className="slogan">TESTIMONIAL</h4>
      <h1 className="sectionLabel">Meet Client Satisfaction</h1>
      <p className='underHeader'></p>

      {/* CLIENT DETAILS */}
      <div className={classes.client}>
        <Container>
          <Grid container spacing={5} className={classes.twoWrappers}>
            <Grid item sm={10} md={6}>
              <Grid container spacing={3} justifyContent="center">
                <Grid item sm={6}>
                  <div className={classes.insideSmall}>
                    <div className={`${classes.img} ${classes.img1}`}>
                      <img src="/images/testimonial/experience.png" alt="" />
                    </div>
                    <h1>187</h1>
                    <h4>Years Of Experience</h4>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className={classes.insideSmall}>
                    <div className={`${classes.img} ${classes.img2}`}>
                      <img src="/images/testimonial/rating.png" alt="" />
                    </div>
                    <h1>187</h1>
                    <h4>Happy Clients</h4>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className={classes.insideSmall}>
                    <div className={`${classes.img} ${classes.img3}`}>
                      <img src="/images/testimonial/coding.png" alt="" />
                    </div>
                    <h1>72</h1>
                    <h4>Qualified Developers</h4>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className={classes.insideSmall}>
                    <div className={`${classes.img} ${classes.img4}`}>
                      <img src="/images/testimonial/growth.png" alt="" />
                    </div>
                    <h1>187</h1>
                    <h4>Weekly Updating</h4>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={10} md={6}>
              <div className={classes.image}>
                <img src="/images/testimonial/client3.jpg" alt="" />
                <div className={classes.icon}>
                  <PlayCircleOutlineIcon />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* CAROUSEL SECTION */}
      <div className={classes.happyClients}>
        <Container>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            transitionDuration={1000}
            className={classes.carousel}
          >
            <div className={classes.slide}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={3.0} precision={0.5} />
              </Stack>
              <h4>Modern look & trending design</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem vitae amet voluptatum, necessitatibus impedit iste odio nihil quos! Quo doloremque dolore</p>
              <div className={classes.user}>
                <img src="/images/testimonial/users/user1.jpg" alt="" />
                <div className={classes.info}>
                  <h4>John White</h4>
                  <p>@Twitter.com</p>
                </div>
              </div>
            </div>
            <div className={classes.slide}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
              </Stack>
              <h4>Design Quality & performance</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem vitae amet voluptatum, necessitatibus impedit iste odio nihil quos! Quo doloremque dolore</p>
              <div className={classes.user}>
                <img src="/images/testimonial/users/user2.png" alt="" />
                <div className={classes.info}>
                  <h4>Denny Hilguston</h4>
                  <p>@Facebook.com</p>
                </div>
              </div>
            </div>
            <div className={classes.slide}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={4.0} precision={0.5} />
              </Stack>
              <h4>Layout and organized layers</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem vitae amet voluptatum, necessitatibus impedit iste odio nihil quos! Quo doloremque dolore</p>
              <div className={classes.user}>
                <img src="/images/testimonial/users/user3.jpg" alt="" />
                <div className={classes.info}>
                  <h4>Alex Johanson</h4>
                  <p>@LinkedIn.com</p>
                </div>
              </div>
            </div>
            <div className={classes.slide}>
              <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={5.0} precision={0.5} />
              </Stack>
              <h4>Awesome and cheap services</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem vitae amet voluptatum, necessitatibus impedit iste odio nihil quos! Quo doloremque dolore</p>
              <div className={classes.user}>
                <img src="/images/testimonial/users/user4.jpg" alt="" />
                <div className={classes.info}>
                  <h4>Albert smith</h4>
                  <p>@Google.com</p>
                </div>
              </div>
            </div>
          </Carousel>
        </Container>
      </div>

      {/* BLOG SECTION */}
      <div className={classes.blog}>
        <Container>
          <div className={classes.blogInside}>
            <div className={classes.text}>
              <h2>Subscribe To Our Blog</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque libero necessitatibus voluptates ab ex fugiat iure</p>
            </div>
            <div className={classes.input}>
              <input type="text" placeholder='Type your email address' />
              <button>Subscribe</button>
            </div>
          </div>
          <div className={classes.blogShape}></div>
        </Container>
      </div>

    </div>
  )
}

export default Testimonial;