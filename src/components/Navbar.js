import companyLogo from '../logo.svg'
import hamburger from '../hamburger.svg'

const navItems = ['Lorem.', 'Ipsum.', 'Dolor.', 'Sit amet.'];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-8 sm:py-6 text-white">
      <img src={companyLogo} alt="acme logo" className="mr-16" />
      <div className="flex-1 hidden sm:flex justify-end lg:justify-between items-center">
        <ul className="hidden lg:flex items-center">
          {
            navItems.map((navItem, index) => {
              return (
                <li className="mr-16" key={index}>
                  {navItem}
                </li>
              )
            })
          }
        </ul>
        <div className="hidden sm:block">
          <a href="/" className="mr-8">Log in</a>
          <a href="/" className="btn mr-8 lg:mr-0 bg-blue">Request a demo</a>
        </div>
      </div>
      <img src={hamburger} alt="hamburger menu" className="lg:hidden" />
    </nav>
  )
}