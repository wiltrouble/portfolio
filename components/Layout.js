import Github from "../pages/github";
import Navbar from "./Navbar";
import { useEffect  } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({children, footer=true}) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
            NProgress.start()
        }

        router.events.on("routeChangeStart", handleRouteChange)

        router.events.on("routeChangeComplete", () => NProgress.done())

        return () => { 
            router.events.off('routeChangeStart', handleRouteChange)
        }
    })


    return (
        <>
        <Navbar/>
        <main>
            <div className="container py-4">
                {children}
            </div>
        </main>

        {footer && (
                <footer className="bg-dark text-light text-center">
                    <div className="container p-4">
                    <h5>&copy; Wilson Lopez Portfolio</h5>
                        <p>2016 - {new Date().getFullYear()}</p>
                    </div>
                </footer>
            )
        }
        </>
    )
}

export default Layout;