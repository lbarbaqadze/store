'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"
import Navbar from "../components/Navbar/Navbar"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faApple, faCloudflare, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faChartSimple, faBattery, faGlobe, faGear, faMagnifyingGlassLocation, faHammer } from "@fortawesome/free-solid-svg-icons"


export default function Home() {

    const path = process.env.NODE_ENV === 'production' ? '/store' : '';

    const cardData = [
        { name: "iPhone", img: "img1.png" },
        { name: "Mac", img: "img2.png" },
        { name: "iPad", img: "img3.png" },
        { name: "iWatch", img: "img4.png" },
        { name: "Airpods Max", img: "img5.png" },
        { name: "Airpods 4", img: "img6.png" }
    ]

    return (
        <>
            <Navbar style={{ backgroundColor: "rgb(16, 16, 16)" }} />

            <div className={styles.containerOne}>
                <h1>Apple Support</h1>
                <div className={styles.componentOne}>
                    {cardData.map((card, i) => (
                        <div className={styles.card} key={i}>
                            <Image src={`${path}/images/support-images/${card.img}`}
                                alt="Apple"
                                width={100}
                                height={100} />
                            <h6>{card.name}</h6>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Get Support</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div className={`col ${styles.card}`}>
                        <div
                            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                            style={{
                                backgroundImage: `url(${path}/images/support-images/apple1.jpg)`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Easy Setup
                                </h3>
                                <p>Quick guide for first-time iPhone setup with Apple ID and Face ID.</p>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <FontAwesomeIcon icon={faApple} style={{ fontSize: "35px" }} />
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <small>Apple</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`col ${styles.card}`}>
                        <div
                            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                            style={{
                                backgroundImage: `url(${path}/images/support-images/apple2.jpg)`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Wi-Fi & Bluetooth
                                </h3>
                                <p>Tips to stay connected with Wi-Fi, Bluetooth, and AirDrop easily.</p>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <FontAwesomeIcon icon={faApple} style={{ fontSize: "35px" }} />
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <small>Apple</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`col ${styles.card}`}>
                        <div
                            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                            style={{
                                backgroundImage: `url(${path}/images/support-images/apple3.jpg)`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                    Battery Care
                                </h3>
                                <p>Learn how to extend battery life and monitor usage on your iPhone.</p>
                                <ul className="d-flex list-unstyled mt-auto">
                                    <li className="me-auto">
                                        <FontAwesomeIcon icon={faApple} style={{ fontSize: "35px" }} />
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <small>Apple</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container px-4 py-5" id="icon-grid">
                <h2 className="pb-2 border-bottom">Need Help?</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faApple} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Setup</h3>
                            <p>Learn how to set up your iPhone easily and start using it right away.</p>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faChartSimple} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Performance</h3>
                            <p>Get tips to keep your iPhone fast, smooth, and optimized.</p>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faBattery} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Battery</h3>
                            <p>Extend your battery life and understand charging best practices.</p>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faCloudflare} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">iCloud</h3>
                            <p>Sync and back up your data safely using iCloud.</p>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faGlobe} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Connectivity</h3>
                            <p>Fix Wi-Fi, Bluetooth, or network connection issues quickly.</p>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faGear} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Settings</h3>
                            <p>Customize notifications, privacy, and accessibility features.</p>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Find My</h3>
                            <p>Locate your lost device or share your location with family.</p>
                        </div>
                    </div>

                    <div className="col d-flex align-items-start">
                        <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em" aria-hidden="true">
                            <FontAwesomeIcon icon={faHammer} />
                        </svg>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Repairs</h3>
                            <p>Get help with screen replacements or hardware repairs.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
                            aria-label="Home"
                        >
                            <FontAwesomeIcon icon={faApple} style={{fontSize: "30px"}}/>
                        </a>
                        <span className="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <a className="text-body-secondary" href="#" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} style={{fontSize: "30px"}}/>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="#" aria-label="Facebook">
                               <FontAwesomeIcon icon={faFacebook} style={{fontSize: "30px"}}/>
                            </a>
                        </li>
                    </ul>
                </footer>
            </div>

        </>
    )
}