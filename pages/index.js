import Layout from "../components/Layout";
import Link from "next/link";

const Index = () => (
    <Layout>
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4 d-flex justify-content-center">
                            <img src="profile.jpg" className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <h1>Wilson Lopez</h1>
                            <h3>Frontend Developer</h3>
                            <h5>Automation QA Developer</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            <Link href="/hireme">
                                <a>Hire me</a>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>

        {/* second section */}

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </Layout>
)

export default Index