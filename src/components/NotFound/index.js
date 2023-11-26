import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="NotFoundPage">
      <img
        className="NotFoundImage"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="NotFoundHeading">Page Not Found</h1>
      <p className="NotFoundText">
        We are sorry, the page you requested could not be found.
      </p>
    </div>
  </>
)
export default NotFound
