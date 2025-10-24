import { useEffect } from "react";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import styles from "./Footer.module.css"


export default function Footer() {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div className={`container ${styles.cont1}`}>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <Link href="/" className={`d-flex align-items-center mb-3 link-body-emphasis text-decoration-none ${styles.icon2}`} aria-label="Bootstrap">
                        <svg className={`bi me-2 ${styles.icon1}`} width="40" height="32" aria-hidden="true">
                            <FontAwesomeIcon
                                icon={faApple}
                                style={{ fontSize: "50px" }}
                                className={styles.icon}
                            />
                        </svg>
                    </Link>
                    <p className="text-body-secondary">© 2025</p>
                </div>

                <div className="col mb-3"></div>

                <div className="col mb-3">
                    <h5>Apple</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Home</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Features</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Pricing</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">FAQs</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Entertainment</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple One</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple TV+</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple Music</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple Arcade</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple Fitness+</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple News+</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple Podcasts</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple Books</Link>
                        </li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>About Apple</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Newsroom</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Apple Leadership</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Career Opportunities</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Investors</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Events</Link>
                        </li>
                        <li className="nav-item mb-2">
                            <Link href="#" className="nav-link p-0 text-body-secondary">Contact Apple</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )

}