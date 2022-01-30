// STYLES FILES
import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={classes.footer}>

      {/* FOOTER LOGO SECTION */}
      <div className={classes.name}>
        <img src="/images/header/logo.png" alt="" />
        <h2>L<span>O</span>cha Landing Page</h2>
      </div>

      {/* FOOTER INFO SECTION */}
      <div className={classes.info}>
        <ul className={classes.footerList}>
          <li>Home</li>
          <li>Advertise</li>
          <li>Support</li>
          <li>Marketing</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* FOOTER ABOUT DESIGNER */}
      <div className={classes.me}>
        <p>
          &copy;Copyright Designed By <span>Ahmad Eid</span>
        </p>
      </div>

    </div>
  )
}

export default Footer;