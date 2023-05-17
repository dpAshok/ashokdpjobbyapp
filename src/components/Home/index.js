import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1 className="home-heading">Find The Job That Fits Your Life</h1>
          <p className="home-desc">
            Millions of People are searching for jobs,salary information,company
            reviews,Find the job that fits your abilities and potential.
          </p>
          <Link to="/jobs">
            <button type="button" className="find-jobs-btn">
              Find Jobs
            </button>
          </Link>
        </div>
      </>
    )
  }
}

export default Home

// import Cookies from 'js-cookie'
// import {Redirect, Link} from 'react-router-dom'
// import Header from '../Header'

// import './index.css'

// const Home = () => {
//   const jwtToken = Cookies.get('jwt_token')
//   if (jwtToken === undefined) {
//     return <Redirect to="/login" />
//   }

//   return (
//     <>
//       <Header />
//       <div className="home-container">
//         <div className="responsive-container">
//           <h1 className="main-heading">Find The Job That Fits Your Life</h1>
//           <p className="job-desc">
//             Millions of people are searching for jobs, salary information,
//             company reviews. Find the job that fits your abilities and
//             potential.
//           </p>
//           <Link to="/jobs" className="link-item">
//             <button type="button" className="find-jobs">
//               Find Jobs
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Home
