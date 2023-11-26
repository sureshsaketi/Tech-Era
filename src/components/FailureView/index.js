import './index.css'

const FailureView = props => {
  const {onClickRetry} = props
  return (
    <div className="FailurePage">
      <img
        className="FailureImage"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="FailureHeading">Oops! Something Went Wrong</h1>
      <p className="Text">
        We cannot seem to find the page you are looking for
      </p>
      <button className="RetryButton" type="button" onClick={onClickRetry}>
        Retry
      </button>
    </div>
  )
}
export default FailureView
