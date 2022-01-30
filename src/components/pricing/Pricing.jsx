// REACT STUFF
import { useState } from 'react';

// STYLES FILES
import classes from './Pricing.module.scss'
import MonthlyPlans from './MonthlyPlans';
import AnnualPlans from './AnnualPlans';

const Pricing = () => {

  const [plan, setPlan] = useState('monthly');

  const changePlan = (plan) => {
    setPlan(plan)
  }

  return (
    <div className={classes.pricing} id='pricing'>
      <h4 className="slogan">PRICING PLAN</h4>
      <h1 className='sectionLabel'>Choose Your Pricing Plan</h1>
      <p className='underHeader'></p>
      <br></br>

      {/* CHOOSE PLANS SECTION */}
      <div className={classes.choosePlan}>
        <button onClick={() => changePlan('monthly')} className={plan === 'monthly' ? classes.active : ''}>Monthly plan</button>
        <button onClick={() => changePlan('annual')} className={plan === 'annual' ? classes.active : ''}>Annual plan</button>
      </div>

      {/* PRICES SECTION */}
      {plan === 'monthly' ? 
        <MonthlyPlans />
        : 
        <AnnualPlans />
      }
      
    </div>
  )
}

export default Pricing;