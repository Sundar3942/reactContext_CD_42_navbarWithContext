// Write your code here
import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const themeHandler = () => {
        toggleTheme()
      }

      const logoImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const fontColorClassName = isDarkTheme ? 'dark-theme' : 'light-theme'
      return (
        <div className={`navbar ${fontColorClassName}`}>
          <div className="logo-container">
            <img src={logoImgUrl} alt="website logo" className="logo" />
          </div>
          <ul type="none" className="nav-links-container">
            <li>
              <Link to="/" className={fontColorClassName}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={fontColorClassName}>
                About
              </Link>
            </li>
          </ul>
          <div className="logo-container">
            <button
              type="button"
              data-testid="theme"
              className="toggle-btn"
              onClick={themeHandler}
            >
              <img src={themeImgUrl} alt="theme" className="logo" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Navbar)
