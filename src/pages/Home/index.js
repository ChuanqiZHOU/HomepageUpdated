
import NaviHeader from '../../components/NaviHeader'
import About from './About'
import Experience from './Experiences'
import Education from './Education'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Skill from './Skill'
const Home = () => { 

    
  return (
    <>
      <NaviHeader></NaviHeader>
      <About></About>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Education></Education>
      <Contact></Contact>
    </>
  )
}

export default Home