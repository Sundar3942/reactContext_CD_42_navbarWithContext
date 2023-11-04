// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClassName = isDarkTheme ? 'dark-bg' : 'light-bg'
      const textClassName = isDarkTheme ? 'light-text' : 'dark-text'
      const homeImgUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      return (
        <>
          <Navbar />
          <div className={`home-container ${bgClassName}`}>
            <img src={homeImgUrl} alt="home" className="home-img" />
            <h1 className={textClassName}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
