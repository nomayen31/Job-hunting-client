import { Outlet } from 'react-router'
import NavBar from '../Pages/Shared/NavBar'
import Footer from '../Pages/Shared/Footer'

const RootLayout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout