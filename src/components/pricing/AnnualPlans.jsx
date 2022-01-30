// MATERIAL STUFF
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

// MATERIAL ICONS
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DangerousIcon from '@mui/icons-material/Dangerous';
import VerifiedIcon from '@mui/icons-material/Verified';

// JS FILES
import PriceHovering from '../../../public/js/PriceHovering'

// STYLES FILES
import classes from './Plans.module.scss'

const AnnualPlans = () => {

  return (
    <div className={classes.annualPlans}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item sm={6} md={4} className={`${classes.plan1} singlePlan`}>
            <div className={classes.planDetails}>
              <h3>Free Plan</h3>
              <p>For small teams and local usage</p>

              {/* PRICE PART */}
              <div className={classes.price}>
                $0<span>/ Year</span>
              </div>

              {/* FEATURES LIST */}
              <List>
                <ListItem>
                  <CheckCircleIcon />
                  Drag & Drop Builder
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  1,000's of Templates
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  Blog Support Tools
                </ListItem>
                <ListItem>
                  <DangerousIcon />
                  eCommerce Store
                </ListItem>
                <ListItem>
                  <DangerousIcon />
                  Multi Storage
                </ListItem>
                <ListItem>
                  <DangerousIcon />
                  Online Servers
                </ListItem>
              </List>

              {/* PLAN BUTTON */}
              <div className={classes.planBtn}>
                <button onMouseOver={() => PriceHovering.hovering(event)} onMouseLeave={() => PriceHovering.leaveHovering(event)}>Choose Plan</button>
              </div>

            </div>
          </Grid>
          <Grid item sm={6} md={4} className={`${classes.plan1} singlePlan`}>
            <div className={`${classes.planDetails} ${classes.specPlanDetails}`}>
              <h3>Business King</h3>
              <p>For Enterprise business</p>

              {/* PRICE PART */}
              <div className={classes.price}>
                $120<span>/ Year</span>
              </div>

              {/* FEATURES LIST */}
              <List>
                <ListItem>
                  <CheckCircleIcon />
                  Drag & Drop Builder
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  1,000's of Templates
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  Blog Support Tools
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  eCommerce Store
                </ListItem>
                <ListItem>
                  <DangerousIcon />
                  Multi Storage
                </ListItem>
                <ListItem>
                  <DangerousIcon />
                  Online Servers
                </ListItem>
              </List>

              {/* PLAN BUTTON */}
              <div className={classes.planBtn}>
                <button onMouseOver={() => PriceHovering.hovering(event)} onMouseLeave={() => PriceHovering.leaveHovering(event)}>Choose Plan</button>
              </div>

            </div>
          </Grid>
          <Grid item sm={6} md={4} className={`${classes.plan1} singlePlan`}>
            <div className={classes.planDetails}>
              {/* VERIFIED SPECIAL ICON */}
              <VerifiedIcon className={classes.specialIcon} />
            
              <h3>Pro Master</h3>
              <p>For pro level developers</p>

              {/* PRICE PART */}
              <div className={classes.price}>
                $230<span>/ Year</span>
              </div>

              {/* FEATURES LIST */}
              <List>
                <ListItem>
                  <CheckCircleIcon />
                  Drag & Drop Builder
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  1,000's of Templates
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  Blog Support Tools
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  eCommerce Store
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  Multi Storage
                </ListItem>
                <ListItem>
                  <CheckCircleIcon />
                  Online Servers
                </ListItem>
              </List>

              {/* PLAN BUTTON */}
              <div className={classes.planBtn}>
                <button onMouseOver={() => PriceHovering.hovering(event)} onMouseLeave={() => PriceHovering.leaveHovering(event)}>Choose Plan</button>
              </div>

            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default AnnualPlans;