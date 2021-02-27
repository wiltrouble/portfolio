import Github from "../pages/github";
import Navbar from "./Navbar";
const Layout = ({children}) => (
    <>
        <Navbar/>
        <main>
            <div className="container py-4">
                {children}
            </div>
        </main>
    </>
)

export default Layout;