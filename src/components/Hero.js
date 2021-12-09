import Notice from './Notice';
import Navbar from './Navbar';

import productChatSmall from '../images/product-chat-small.png';
import productChatLarge from '../images/product-chat-large.png';

export default function Hero() {
  return (
    <section className="flex flex-col items-center min-h-screen bg-midnight">
      <div className="w-full">
        <Notice />
        <Navbar />
      </div>
      <div className="flex-1 flex justify-center items-center p-5vw min-h-full">
        <div className="lg:grid grid-cols-2 gap-12">
          <div className="mb-8 text-white lg:mb-0">
            <h1 className="mb-4 text-4xl lg:text-5xl xl:text-7xl font-semibold">Vel quis feugiat pharetra diam viverra quis.</h1>
            <p className="mb-8 font-light lg:text-xl lg:font-light">Interdum enim platea sagittis vitae vitae. Odio adipiscing odio enim pharetra lorem ut sagittis nibh enim. Posuere.</p>
            <form action="/" method="post" className="sm:flex">
              <div className="mb-2 sm:mr-2 sm:">
                <input type="text" name="email" id="email" className="sm:px-4 w-full sm:w-80 h-12 text-center sm:text-left placeholder:text-black" placeholder="Enter your email address" required></input>
              </div>
              <div>
                <input type="submit" value="Request a demo" className="btn w-full h-12 bg-blue"></input> 
              </div>
            </form>
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