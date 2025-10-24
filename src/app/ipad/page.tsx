'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRef } from "react"
import { useBasket } from "../context/basketContext"
import { toast } from 'react-toastify';
import Ipad from "../components/Ipad/Ipad"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";


export default function Home() {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
            const scrollElement = document.getElementById('scrollArea')
            if (scrollElement) {
                new bootstrap.ScrollSpy(scrollElement, {
                    target: '#navbar-example2',
                    offset: 100
                })
            }
        })
    }, [])

    useEffect(() => {
        const links = document.querySelectorAll('a.nav-link, a.dropdown-item')
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const targetId = link.getAttribute('href')?.replace('#', '')
                const target = document.getElementById(targetId!)
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            })
        })
    }, [])

    const path = process.env.NODE_ENV === 'production' ? '/store' : '';

    const { addToCart } = useBasket()

    const sliderRef4 = useRef<HTMLDivElement>(null);

    const scrollLeft4 = () => sliderRef4.current?.scrollBy({ left: -300, behavior: 'smooth' });
    const scrollRight4 = () => sliderRef4.current?.scrollBy({ left: 300, behavior: 'smooth' });

    return (
        <>
            <Navbar style={{ backgroundColor: "rgb(16, 16, 16)" }} />

            <Ipad />

            <div className={styles.containerOne}>
                <h1>Explore the lineup.</h1>
                <div className={styles.componentOne}>
                    <div className={`card ${styles.cardOne}`} style={{ width: "18rem" }}>
                        <img src={`${path}/images/ipad-images/ipad4.png`} className={`card-img-top ${styles.cardImg}`} alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title ${styles.h5}`}>iPad Pro</h5>
                            <p className={`card-text ${styles.p}`}>
                                The ultimate iPad experience with the most advanced technology.
                            </p>
                            <p className={`card-text ${styles.p2}`}>
                                $2499
                            </p>
                            <div className={styles.button}>
                                <Link href={"/products"}><button className={styles.btn}>Buy</button></Link>
                                <button
                                    className={styles.btn2}
                                    onClick={() => {
                                        const product = {
                                            id: 1,
                                            name: "iPad Pro",
                                            price: "$2499",
                                            image: `${path}/images/ipad-images/ipad4.png`,
                                        };
                                        addToCart(product);
                                        toast.success(`${product.name} added to cart!`);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`card ${styles.cardOne}`} style={{ width: "18rem" }}>
                        <img src={`${path}/images/ipad-images/ipad5.png`} className={`card-img-top ${styles.cardImg}`} alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title ${styles.h5}`}>iPad Air</h5>
                            <p className={`card-text ${styles.p}`}>
                                Serious performance in a thin and light design.
                            </p>
                            <p className={`card-text ${styles.p2}`}>
                                $1499
                            </p>
                            <div className={styles.button}>
                                <Link href={"/products"}><button className={styles.btn}>Buy</button></Link>
                                <button
                                    className={styles.btn2}
                                    onClick={() => {
                                        const product = {
                                            id: 2,
                                            name: "iPad Air",
                                            price: "$1499",
                                            image: `${path}/images/ipad-images/ipad5.png`,
                                        };
                                        addToCart(product);
                                        toast.success(`${product.name} added to cart!`);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`card ${styles.cardOne}`} style={{ width: "18rem" }}>
                        <img src={`${path}/images/ipad1.png`} className={`card-img-top ${styles.cardImg}`} alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title ${styles.h5}`}>iPad Mini</h5>
                            <p className={`card-text ${styles.p}`}>
                                The full iPad experience in an ultraportable design.
                            </p>
                            <p className={`card-text ${styles.p2}`}>
                                $1549
                            </p>
                            <div className={styles.button}>
                                <Link href={"/products"}><button className={styles.btn}>Buy</button></Link>
                                <button
                                    className={styles.btn2}
                                    onClick={() => {
                                        const product = {
                                            id: 3,
                                            name: "iPad Mini",
                                            price: "$1549",
                                            image: `${path}/images/ipad1.png`,
                                        };
                                        addToCart(product);
                                        toast.success(`${product.name} added to cart!`);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`card ${styles.cardOne}`} style={{ width: "18rem" }}>
                        <img src={`${path}/images/ipad2.png`} className={`card-img-top ${styles.cardImg}`} alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title ${styles.h5}`}>iPad Mini</h5>
                            <p className={`card-text ${styles.p}`}>
                                The full iPad experience in an ultraportable design.
                            </p>
                            <p className={`card-text ${styles.p2}`}>
                                $1549
                            </p>
                            <div className={styles.button}>
                                <Link href={"/products"}><button className={styles.btn}>Buy</button></Link>
                                <button
                                    className={styles.btn2}
                                    onClick={() => {
                                        const product = {
                                            id: 4,
                                            name: "iPad Mini",
                                            price: "$1549",
                                            image: `${path}/images/ipad2.png`,
                                        };
                                        addToCart(product);
                                        toast.success(`${product.name} added to cart!`);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`card ${styles.cardOne}`} style={{ width: "18rem" }}>
                        <img src={`${path}/images/ipad3.png`} className={`card-img-top ${styles.cardImg}`} alt="..." />
                        <div className="card-body">
                            <h5 className={`card-title ${styles.h5}`}>iPad Mini</h5>
                            <p className={`card-text ${styles.p}`}>
                                The full iPad experience in an ultraportable design.
                            </p>
                            <p className={`card-text ${styles.p2}`}>
                                $1549
                            </p>
                            <div className={styles.button}>
                                <Link href={"/products"}><button className={styles.btn}>Buy</button></Link>
                                <button
                                    className={styles.btn2}
                                    onClick={() => {
                                        const product = {
                                            id: 5,
                                            name: "iPad Mini",
                                            price: "$1549",
                                            image: `${path}/images/ipad3.png`,
                                        };
                                        addToCart(product);
                                        toast.success(`${product.name} added to cart!`);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.containerFour}>
                <h1>Get to know iPad.</h1>

                <div style={{ position: 'relative' }}>
                    <div
                        className={styles.componentFour}
                        ref={sliderRef4}
                        style={{ overflowX: 'auto', scrollBehavior: 'smooth', padding: '20px 0' }}
                    >
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div className={styles.card4} key={i}>
                                <div className={styles.imageWrapper4}>
                                    <Image
                                        src={`${path}/images/ipad-images/image${i}.png`}
                                        alt={`apple-watch-${i}`}
                                        width={500}
                                        height={400}
                                        className={styles.img4}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: -35,
                            right: 0,
                            display: 'flex',
                            gap: '10px',
                            padding: '10px',
                        }}
                    >
                        <button
                            onClick={scrollLeft4}
                            style={{
                                backgroundColor: '#e4e4e7ff',
                                border: 'none',
                                borderRadius: '50%',
                                fontSize: '22px',
                                cursor: 'pointer',
                                color: '#787373ff',
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            onClick={scrollRight4}
                            style={{
                                backgroundColor: '#e4e4e7ff',
                                border: 'none',
                                borderRadius: '50%',
                                fontSize: '22px',
                                cursor: 'pointer',
                                color: '#787373ff',
                            }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container py-3">
                <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3 sticky-top">
                    <a className={`navbar-brand fw-bold ${styles.title}`} href="#">iPad Overview</a>
                    <ul className="nav nav-pills gap-3">
                        <li className="nav-item">
                            <a className={`nav-link ${styles.tag}`} href="#scrollspyHeading1">Why iPad</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.tag}`} href="#scrollspyHeading2">Performance</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${styles.tag}`} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#scrollspyHeading3">Creativity</a></li>
                                <li><a className="dropdown-item" href="#scrollspyHeading4">Productivity</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#scrollspyHeading5">Portability</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div
                    id="scrollArea"
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example2"
                    className="bg-body-tertiary p-3 rounded-2"
                    style={{
                        height: '400px',
                        overflowY: 'scroll',
                        scrollBehavior: 'smooth',
                    }}
                >
                    <h4 id="scrollspyHeading1" className={styles.name}>Why iPad</h4>
                    <p>iPad isnt just a tablet — its the perfect balance of power, elegance, and creativity.
                        With its intuitive interface, you can do everything youd normally do on a computer — only faster, simpler, and more naturally.</p>

                    <h4 id="scrollspyHeading2" className={styles.name}>Performance and Power</h4>
                    <p>At the heart of iPad beats Apples M-series chip — the same powerful architecture found in the Mac.
                        Apps open instantly, games run with console-level graphics, and videos edit smoother than ever before.</p>

                    <h4 id="scrollspyHeading3" className={styles.name}>Creativity Unleashed</h4>
                    <p>Whether youre sketching your next masterpiece or taking handwritten notes, iPad transforms every idea into action.
                        Paired with Apple Pencil, it becomes a digital canvas with pixel-perfect precision.</p>

                    <h4 id="scrollspyHeading4" className={styles.name}>Productivity and Work</h4>
                    <p>Take your workflow anywhere. iPad seamlessly connects with Magic Keyboard, trackpad, and cloud apps to make multitasking natural.</p>

                    <h4 id="scrollspyHeading5" className={styles.name}>Portability and Design</h4>
                    <p>Ultra-thin, feather-light, and crafted with precision aluminum — iPad is built to move with you.
                        Every detail, from the smooth edges to the vibrant display, is designed to feel as good as it looks.</p>
                </div>
            </div>

            <Footer />
        </>
    )
}