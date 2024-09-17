import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <div className="not-found-text-container">
      <h1>Page Not Found</h1>
      <p>we&apos;re sorry, the page you requested could not be found</p>
    </div>
  </div>
)

export default NotFound
