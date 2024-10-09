/* eslint-disable react/prop-types */
import Navbar from "./Navbar"
import Footer from "./Footer"


const BaseLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
    
  )
}

export default BaseLayout