import closeLogo from '../images/close_logo.svg';
import gorgiasLogo from '../images/gorgias_logo.svg';
import prezlyLogo from '../images/prezly_logo.svg';
import productboardLogo from '../images/productboard_logo.svg';
import segmentLogo from '../images/segment_logo.svg';
import zapierLogo from '../images/zapier_logo.svg';

import productTreeLarge from '../images/product_2a-wide.svg';
import productTreeSmall from '../images/product_2b-small.svg';
import productExample from '../images/product_3.svg';
import productPage from '../images/product_4.svg';
import productGraphic from '../images/product_5.svg';
import headshot from '../images/headshot.svg';

export default function Main() {
  return (
    <div className="mt-6 text-midnight">
      <section className="section text-center">
        <h3 className="mb-16 text-2xl lg:text-3xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant.</h3>
        <div className="flex-center flex-wrap gap-8 md:gap-16">
          <img src={segmentLogo} alt="segment logo" className="hidden xl:block" />
          <img src={zapierLogo} alt="zapier logo" className="hidden md:block" />
          <img src={gorgiasLogo} alt="gorgias logo" />
          <img src={productboardLogo} alt="productboard logo" />
          <img src={closeLogo} alt="close logo" className="hidden md:block" />
          <img src={prezlyLogo} alt="prezly logo" className="hidden xl:block" />
        </div>
        <a href="/" className="product-link border-blue mt-16">Ut eleifend.</a>
      </section>
      <section className="section sm:px-24">
        <div className="max-w-3xl">
          <h2 className="h2">Sem enim cursus orci at.</h2>
          <p className="mb-4 lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, vitae et, vitae et cursus amet tincidunt feugiat nulla. Senectus maecenas diam risus sodales dictum eu. Eget cursus sit bibendum pulvinar faucibus vitae nam sed. Faucibus vel laoreet.</p>
          <a href="/" className="product-link border-blue">Learn more</a>
        </div>
        <img src={productTreeSmall} alt="product tree" className="lg:hidden mx-auto mt-12" />
        <img src={productTreeLarge} alt="product tree" className="hidden lg:block mx-auto" />
      </section>
      <section className="section">
        <div className="relative lg:grid grid-cols-2 gap-16 p-6 sm:p-24 bg-gradient-to-l from-gradient-dark via-gradient-mid to-gradient-light">
          <div className="lg:flex justify-center items-center mb-8 xl:mb-0">
            <div className="max-w-xl">
              <h2 className="h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et id.</h2>
              <p className="lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus augue ut diam viverra. Velit donec ultrices sed id dui quis nunc tempor.</p>
            </div>
          </div>
          <div>
            <img src={productExample} alt="product example" className="absolute -right-4 lg:max-w-lg xl:max-w-none" />
            <img src={productExample} alt="product example" className="invisible max-w-full" />
          </div>
        </div>
      </section>
      <section className="section text-center">
        <h2 className="h2">Dui tellus quis magna id ultricies eu sed.</h2>
        <p className="mx-auto mb-8 max-w-3xl lg:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vestibulum molestie amet, maecenas id amet. Ipsum accumsan arcu, aenean viverra penatibus quis. Laoreet.</p>
        <img src={productPage} alt="product page example" className="mx-auto" />
      </section>
      <section className="section px-0 lg:px-6">
        <div className="p-6 sm:p-24 bg-blue">
          <div className="relative">
            <div className="z-10 lg:absolute top-0 left-0 max-w-xl text-white">
              <h2 className="h2">Ultrices euismod curabitur sapien nunc.</h2>
              <p className="mb-4 lg:text-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat neque dignissim morbi lacinia volutpat est. Pulvinar scelerisque at urna elit quisque pellentesque. Quam cursus.</p>
              <a href="/" className="product-link border-white">Learn more</a>
            </div>
            <img src={productGraphic} alt="product graphic" className="lg:absolute right-0 bottom-0 py-6 lg:py-0" />
            <img src={productGraphic} alt="product graphic" className="hidden invisible lg:block py-8" />
          </div>
        </div>
      </section>
      <section className="section sm:px-24">
        <div className="lg:flex justify-between items-center gap-24 xl:gap-36">
          <img src={headshot} alt="headshot" className="mx-auto lg:mx-0 bg-light" />
          <div className="mt-16 lg:mt-0 w-full h-full">
            <div className="lg:max-w-xl">
              <p>Vulputate vel vitae id ornare.</p>
              <p className="mb-10 font-semibold">Amet quis.</p>
              <h2 className="mb-10 text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget enim vel.</h2>
              <div className="pb-32 lg:pb-0 text-center lg:text-left">
                <a href="/" className="product-link border-blue mt-36 lg:mt-0">Read Customer Story</a>
                <div className="grid grid-cols-3 gap-2 -mt-36 lg:mt-24">
                  <div className="w-36 h-9 bg-midnight"></div>
                  <div className="w-36 h-9 bg-light"></div>
                  <div className="w-36 h-9 bg-light"></div>
                  <div className="w-36 h-9 bg-light"></div>
                  <div className="w-36 h-9 bg-light"></div>
                  <div className="w-36 h-9 bg-light"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}