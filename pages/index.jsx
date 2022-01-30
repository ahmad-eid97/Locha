import Features from '../src/components/features/Features';
import Footer from '../src/components/footer/Footer';
import Header from '../src/components/header/Header';
import Pricing from '../src/components/pricing/Pricing';
import Testimonial from '../src/components/testimonial/Testimonial';

const Main = () => {
  return(
    <div className="main">
      <Header />
      <Features />
      <Pricing />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Main;