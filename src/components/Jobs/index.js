import {Component} from 'react'
import JobItemDetailsCards from '../JobItemDetailsCards'
import './index.css'
import Header from '../Header'

class Jobs extends Component {
  render() {
    const {salaryRangesList, employmentTypesList, LocationsList} = this.props

    return (
      <div className="Job-container">
        <Header />
        <div className="job-details-container">
          <JobItemDetailsCards
            salaryRangesList={salaryRangesList}
            employmentTypesList={employmentTypesList}
            renderProfileDetail={this.renderProfileDetails}
            LocationsList={LocationsList}
          />
        </div>
      </div>
    )
  }
}

export default Jobs
