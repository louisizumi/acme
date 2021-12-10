import DemoForm from './DemoForm';

import arrowUp from '../images/arrow_up.svg';
import arrowDown from '../images/arrow_down.svg';
import externalLink from '../images/external_link.svg';

export default function Footer() {
  return (
    <footer className="px-6 py-24 sm:px-16 md:p-24 bg-midnight text-white">
      <div className="mb-32 lg:mb-48">
        <DemoForm />
      </div>
      <div className="lg:flex flex-wrap justify-between gap-24">
        <div className="">
          <div className="flex justify-between items-center border-b lg:border-none border-white border-opacity-25">
            <h3 className="py-3 text-xl font-semibold">Est.</h3>
            <img src={arrowUp} alt="up arrow" className="lg:hidden" />
          </div>
          <ul>
            <li>Vitae nec.</li>
            <li>Purus.</li>
            <li>Nibh.</li>
            <li>Blandit.</li>
            <li>Malesuada.</li>
            <li>Et volutpat.</li>
          </ul>
        </div>
        <div className="">
          <div className="flex justify-between items-center border-b lg:border-none border-white border-opacity-25">
            <h3 className="py-3 text-xl font-semibold">Urna.</h3>
            <img src={arrowDown} alt="down arrow" className="lg:hidden" />
          </div>
          <ul className="hidden lg:block">
            <li>Mauris.</li>
            <li>Ac ut cras.</li>
            <li>Purus.</li>
            <li>Nunc elementum.</li>
            <li>Sit ac interdum.</li>
            <li>Sed ipsum lobortis.</li>
          </ul>
        </div>
        <div className="">
          <div className="flex justify-between items-center border-b lg:border-none border-white border-opacity-25">
            <h3 className="py-3 text-xl font-semibold">Leo.</h3>
            <img src={arrowDown} alt="down arrow" className="lg:hidden" />
          </div>
          <ul className="hidden lg:block">
            <li>Nulla maecenas nunc.</li>
            <li>Marris.</li>
            <li>In velit sagittis.</li>
            <li>Et cursus fingilla.</li>
          </ul>
        </div>
        <div className="">
          <div className="flex justify-between items-center border-b lg:border-none border-white border-opacity-25">
            <h3 className="py-3 text-xl font-semibold">Duis.</h3>
            <img src={arrowDown} alt="down arrow" className="lg:hidden" />
          </div>
          <ul className="hidden lg:block">
            <li>Id.</li>
            <li>Aliquam.</li>
            <li>Interdum.</li>
            <li>Risus.</li>
          </ul>
        </div>
        <a href="/">
          <div className="relative mt-8 lg:m-2 p-6 border border-white border-opacity-25 lg:max-w-xs min-w-xs">
            <img src={externalLink} alt="external link" className="absolute top-2 right-2" />
            <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu rhoncus, maecenas scelerisque. Tristique massa.</p>
          </div>
        </a>
      </div>
      <div className="xl:flex justify-between mt-24">
        <div className="max-w-xl">
          <h4 className="mb-5 text-sm font-bold">Pretium pellentesque massa.</h4>
          <p className="mb-8 opacity-50 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor proin tempor sed fermentum sit pretium pellentesque. Dictumst risus elementum dignissim risus, lobortis molestie.</p>
        </div>
        <div className="sm:flex sm:justify-between gap-4 sm:gap-8 md:gap-16 mx-auto md:mx-0 max-w-xl">
          <a href="/" className="block mb-4 sm:mb-0">Terms & Conditions</a>
          <a href="/" className="block mb-4 sm:mb-0">Privacy Policy</a>
          <a href="/" className="block mb-4 sm:mb-0">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}