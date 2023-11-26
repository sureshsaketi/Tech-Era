import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <div className="HeaderContainer">
      <Link className="NavLink" to="/">
        <img
          className="WebsiteLogoImage"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </div>
  </>
)
export default Header
