import DemoForm from './DemoForm';

import arrowUp from '../images/arrow_up.svg';
import arrowDown from '../images/arrow_down.svg';
import externalLink from '../images/external_link.svg';

export default function Footer() {
  return (
    <footer className="sm:mt-12 px-6 py-24 sm:p-24 bg-midnight text-white">
      <div className="mb-32 lg:mb-48">
        <DemoForm />
      </div>
      <div className="lg:flex flex-wrap justify-between gap-24">
        <div className="">
          <div className="footer-dropdown">
            <h3 className="dropdown-header">Est.</h3>
            <img src={arrowUp} alt="up arrow" className="lg:hidden" />
          </div>
          <ul className="footer-links--open">
            <li>Vitae nec.</li>
            <li>Purus.</li>
            <li>Nibh.</li>
            <li>Blandit.</li>
            <li>Malesuada.</li>
            <li>Et volutpat.</li>
          </ul>
        </div>
        <div className="">
          <div className="footer-dropdown">
            <h3 className="dropdown-header">Urna.</h3>
            <img src={arrowDown} alt="down arrow" className="lg:hidden" />
          </div>
          <ul className="footer-links">
            <li>Mauris.</li>
            <li>Ac ut cras.</li>
            <li>Purus.</li>
            <li>Nunc elementum.</li>
            <li>Sit ac interdum.</li>
            <li>Sed ipsum lobortis.</li>
          </ul>
        </div>
        <div className="">
          <div className="footer-dropdown">
            <h3 className="dropdown-header">Leo.</h3>
            <img src={arrowDown} alt="down arrow" className="lg:hidden" />
          </div>
          <ul className="footer-links">
            <li>Nulla maecenas nunc.</li>
            <li>Marris.</li>
            <li>In velit sagittis.</li>
            <li>Et cursus fingilla.</li>
          </ul>
        </div>
        <div className="">
          <div className="footer-dropdown">
            <h3 className="dropdown-header">Duis.</h3>
            <img src={arrowDown} alt="down arrow" className="lg:hidden" />
          </div>
          <ul className="footer-links">
            <li>Id.</li>
            <li>Aliquam.</li>
            <li>Interdum.</li>
            <li>Risus.</li>
          </ul>
        </div>
        <div className="lg:max-w-xs min-w-xs">
          <a href="/" className="block relative my-8 lg:m-2 p-6 border border-white border-opacity-25">
            <img src={externalLink} alt="external link" className="absolute top-2 right-2" />
            <p className="text-xs font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu rhoncus, maecenas scelerisque. Tristique massa.</p>
          </a>
        </div>
      </div>
      <div className="xl:flex justify-between lg:mt-32">
        <div className="max-w-xl">
          <h4 className="mb-5 text-sm font-bold">Pretium pellentesque massa.</h4>
          <p className="mb-8 opacity-50 text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor proin tempor sed fermentum sit pretium pellentesque. Dictumst risus elementum dignissim risus, lobortis molestie.</p>
        </div>
        <div className="flex justify-between gap-4 sm:gap-8 md:gap-16 mx-auto md:mx-0 max-w-xl">
          <a href="/" className="legal-link">Terms & Conditions</a>
          <a href="/" className="legal-link">Privacy Policy</a>
          <a href="/" className="legal-link">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}