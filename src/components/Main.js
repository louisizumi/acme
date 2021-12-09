import closeLogo from '../images/close_logo.svg';
import gorgiasLogo from '../images/gorgias_logo.svg';
import prezlyLogo from '../images/prezly_logo.svg';
import productboardLogo from '../images/productboard_logo.svg';
import segmentLogo from '../images/segment_logo.svg';
import zapierLogo from '../images/zapier_logo.svg';

export default function Main() {
  return (
    <div>
      <section className="px-5vw sm:px-10vw py-10vh text-center text-midnight">
        <h2 className="mb-16 text-2xl lg:text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant.</h2>
        <div className="flex justify-around items-center gap-8">
          <img src={segmentLogo} alt="segment logo" className="hidden xl:block" />
          <img src={zapierLogo} alt="zapier logo" className="hidden md:block" />
          <img src={gorgiasLogo} alt="gorgias logo" />
          <img src={productboardLogo} alt="productboard logo" />
          <img src={closeLogo} alt="close logo" className="hidden md:block" />
          <img src={prezlyLogo} alt="prezly logo" className="hidden xl:block" />
        </div>
        <a href="/" className="product-link mt-16">Ut eleifend.</a>
      </section>
    </div>
  )
}