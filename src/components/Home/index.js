import {Component} from 'react'

import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import Header from '../Header'
import FailureView from '../FailureView'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    coursesList: [],
  }

  componentDidMount() {
    this.getCoursesList()
  }

  getCoursesList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const {courses} = fetchedData
      const updatedFetchedData = courses.map(eachCourse => ({
        id: eachCourse.id,
        name: eachCourse.name,
        logoUrl: eachCourse.logo_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        coursesList: updatedFetchedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getCoursesList()
  }

  renderLoaderView = () => (
    <div className="LoaderContainer" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  renderCoursesView = () => {
    const {coursesList} = this.state
    return (
      <>
        <h1 className="CoursesHeading">Courses</h1>
        <ul className="CoursesContainer">
          {coursesList.map(eachCourse => {
            const {name, logoUrl, id} = eachCourse
            return (
              <Link className="LinkItem" to={`/courses/${id}`} key={id}>
                <li className="TechLanguageContainer" key={id}>
                  <img className="LanguageImage" src={logoUrl} alt={name} />
                  <p className="LanguageName">{name}</p>
                </li>
              </Link>
            )
          })}
        </ul>
      </>
    )
  }

  renderCoursesListView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      case apiStatusConstants.success:
        return this.renderCoursesView()
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
        <div className="HomeContainer">{this.renderCoursesListView()}</div>
      </>
    )
  }
}

export default Home
