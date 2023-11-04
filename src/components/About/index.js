// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'dark-bg' : 'light-bg'
      const textClassName = isDarkTheme ? 'light-text' : 'dark-text'

      const aboutImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`about-container ${bgClassName}`}>
            <img src={aboutImgUrl} alt="about" className="about-img" />
            <h1 className={textClassName}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
