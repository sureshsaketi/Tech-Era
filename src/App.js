import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import CourseItemDetails from './components/CourseItemDetails'

import './App.css'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseItemDetails} />
    <Route to="/not-found" component={NotFound} />
  </Switch>
)

export default App
