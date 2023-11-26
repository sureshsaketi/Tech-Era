import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import FailureView from '../FailureView'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseItemDetails extends Component {
  state = {courseDetails: {}}

  componentDidMount() {
    this.getCoursesDetails()
  }

  getCoursesDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const data = fetchedData.course_details
      const courseDetails = {
        description: data.description,
        name: data.name,
        id: data.id,
        imageUrl: data.image_url,
      }
      this.setState({apiStatus: apiStatusConstants.success, courseDetails})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getCoursesDetails()
  }

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderLoaderView = () => (
    <div className="LoaderContainer" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderCourseDetailsView = () => {
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails

    return (
      <div className="CourseDetailsContainer">
        <div className="LanguageCard">
          <img className="LangImage" src={imageUrl} alt={name} />
          <div className="DetailsContainer">
            <h1 className="LangHeading">{name}</h1>
            <p className="Description">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  renderCourseDetailsViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderCourseDetailsView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderCourseDetailsViews()}
      </>
    )
  }
}

export default CourseItemDetails
