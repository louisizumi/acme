import Notice from './Notice';
import Navbar from './Navbar';
import DemoForm from './DemoForm';

import productChatLarge from '../images/product_1a-wide.png';
import productChatSmall from '../images/product_1b-small.png';

export default function Hero() {
  return (
    <section className="flex-center flex-col min-h-screen bg-midnight">
      <div className="w-full">
        <Notice />
        <Navbar />
      </div>
      <div className="flex-1 flex-center p-6 sm:p-16 md:p-24 w-full max-w-screen-2xl min-h-full">
        <div className="lg:grid grid-cols-2 gap-12">
          <div className="mb-8 text-white lg:mb-0 max-w-3xl">
            <h1 className="mb-4 text-4xl lg:text-5xl xl:text-7xl font-semibold">Vel quis feugiat pharetra diam viverra quis.</h1>
            <p className="mb-8 lg:text-xl font-light">Interdum enim platea sagittis vitae vitae. Odio adipiscing odio enim pharetra lorem ut sagittis nibh enim. Posuere.</p>
            <DemoForm />
          </div>
          <div>
            <img src={productChatSmall} alt="product chat" className="lg:hidden mx-auto" />
            <img src={productChatLarge} alt="product chat" className="hidden lg:block mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}