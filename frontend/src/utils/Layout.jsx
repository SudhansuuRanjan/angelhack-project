import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout