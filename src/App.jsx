import './App.css'
import Navbar from './Navbar'
import Body from './Body'
import Programs from './Programs'
import Title from './Title'
import About from './About'
import Campus from './Campus'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Body/>
      <div className='container'> 
        <Title subTitle = "OUR PROGRAM" title = "What we Offer"/>
        <Programs/>
        <About/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle = "TESTIMONIALS " title = "Student Speaks" />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Book A Session'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
