// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'dark-bg' : 'light-bg'
      const textClassName = isDarkTheme ? 'light-text' : 'dark-text'

      const notFoundImgUrl =
        'https://assets.ccbp.in/frontend/react-js/not-found-img.png'
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${bgClassName}`}>
            <img
              src={notFoundImgUrl}
              alt="not found"
              className="not-found-img"
            />
            <h1 className={textClassName}>Lost Your Way?</h1>
            <p className={textClassName}>
              We cannot seem to find the page you are looking for!
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
