import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experience, projects} from "../profile";

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
                        {
                            skills.map(({skill, percentage}, i) => (
                                <div className="py-3"  key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        {console.log(percentage)}
                                        <div className="progress-bar" role="progressbar" style={{width: `${percentage}%`}}>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experience.map(({title, description, from, to}, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{`${from} - ${to? to: 'Current'}`}</h5>
                                        <p>
                                            {description}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="/experiences">
                            <a className="btn btn-dark">
                                Know More
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({name, description, image}, i) => (
                                <div className="col-md-4 p-2">
                            <div className="card h-100">
                                <div className="overflow">
                                    <img src={`/${image}`} className="card-img-top"/>
                                </div>
                                <div className="card-body">
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                    <a href="">Know more</a>
                                </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>

            
                <div className="text-center m-2">
                    <Link href="/portfolio">
                        <a className="btn btn-light">More projects</a>
                    </Link>
                </div>
            
                    
                </div>                      
                
            </div>
        </div>
    </Layout>
)

export default Index