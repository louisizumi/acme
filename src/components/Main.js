import closeLogo from '../images/close_logo.svg';
import gorgiasLogo from '../images/gorgias_logo.svg';
import prezlyLogo from '../images/prezly_logo.svg';
import productboardLogo from '../images/productboard_logo.svg';
import segmentLogo from '../images/segment_logo.svg';
import zapierLogo from '../images/zapier_logo.svg';

import productTreeSmall from '../images/product-tree-small.png';
import productTreeLarge from '../images/product-tree-large.png';
import productExample from '../images/product-example.png';
import productPage from '../images/product-page.png'

export default function Main() {
  return (
    <div className="text-midnight">
      <section className="px-6 sm:px-16 md:px-32 pt-24 text-center text-midnight">
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
      <section className="px-6 md:px-24 pt-24">
        <div className="max-w-3xl">
          <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Sem enim cursus orci at.</h2>
          <p className="mb-4 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, vitae et, vitae et cursus amet tincidunt feugiat nulla. Senectus maecenas diam risus sodales dictum eu. Eget cursus sit bibendum pulvinar faucibus vitae nam sed. Faucibus vel laoreet.</p>
          <a href="/" className="product-link">Learn more</a>
        </div>
        <img src={productTreeSmall} alt="product tree" className="lg:hidden mx-auto mt-5vh" />
        <img src={productTreeLarge} alt="product tree" className="hidden lg:block mx-auto" />
      </section>
      <section className="px-6 pt-24">
        <div className="relative lg:grid grid-cols-2 gap-12 p-6 sm:p-16 md:p-24 bg-gradient-to-l from-gradient-dark via-gradient-mid to-gradient-light">
          <div className="lg:flex justify-center items-center mb-8 xl:mb-0">
            <div className="max-w-xl">
              <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id.</h2>
              <p className="lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus augue ut diam viverra. Velit donec ultrices sed id dui quis nunc tempor.</p>
            </div>
          </div>
          <div>
            <img src={productExample} alt="product example" className="absolute -right-4 lg:max-w-lg xl:max-w-none" />
            <img src={productExample} alt="product example" className="invisible max-w-full md:max-w-lg" />
          </div>
        </div>
      </section>
      <section className="px-6 md:px-24 pt-24 text-center">
        <h2 className="mb-4 text-3xl lg:text-4xl font-semibold">Dui tellus quis magna id ultricies eu sed.</h2>
        <p className="mb-8 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu, aenean viverra penatibus quis. Laoreet.</p>
        <img src={productPage} alt="product page example" />
      </section>
    </div>
  )
}