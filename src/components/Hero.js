import Notice from './Notice';
import Navbar from './Navbar';
import DemoForm from './DemoForm';

import productChatSmall from '../images/product-chat-small.png';
import productChatLarge from '../images/product-chat-large.png';

export default function Hero() {
  return (
    <section className="flex flex-col items-center min-h-screen bg-midnight">
      <div className="w-full">
        <Notice />
        <Navbar />
      </div>
      <div className="flex-1 flex justify-center items-center p-6 sm:p-24 w-full min-h-full">
        <div className="lg:grid grid-cols-2 gap-12">
          <div className="mb-8 text-white lg:mb-0">
            <DemoForm />
          </div>
          <div>
            <img src={productChatSmall} alt="product chat" className="md:hidden mx-auto" />
            <img src={productChatLarge} alt="product chat" className="hidden md:block mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}