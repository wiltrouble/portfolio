import Github from "../pages/github";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({children}) => (
    <>
        <Navbar/>
        <main>
            <div className="container py-4">
                {children}
            </div>
        </main>

        <footer className="bg-dark text-light text-center">
            <div className="container p-4">
            <h5>&copy; Wilson Lopez Portfolio</h5>
                <p>2016 - {new Date().getFullYear()}</p>
            </div>
        </footer>
    </>
)

export default Layout;