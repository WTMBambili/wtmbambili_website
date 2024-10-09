/* eslint-disable react/prop-types */
import Navbar from "./Navbar"
import Footer from "./Footer"


const BaseLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main className="mt-20">
            {children}
        </main>
        <Footer/>
    </div>
    
  )
}

export default BaseLayout