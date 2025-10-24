'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Iphon from "./components/Iphone/Iphone"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"
import { useBasket } from "./context/basketContext"
import { toast } from 'react-toastify';
import { useRef } from "react"
import { useEffect } from "react"
import Slider from "./components/Slider/Slider";
import Link from "next/link";

export default function Home() {
    const path = process.env.NODE_ENV === 'production' ? '/store' : '';

    const { addToCart } = useBasket()

    const cardsData = [
        { name: "Apple iPhone 17 Pro", sub: "256GB Deep Blue", price: "3999$", img: "iphone1.png" },
        { name: "Apple iPhone 17 Pro", sub: "256GB Silver", price: "3999$", img: "iphone2.png" },
        { name: "Apple iPhone 17 Pro", sub: "256GB Deep Orange", price: "3999$", img: "iphone3.png" },
        { name: "Apple iPhone Air e-Sim", sub: "256GB Sky Blue", price: "3845$", img: "iphone4.png" },
        { name: "Apple iPhone Air e-Sim", sub: "256GB Space Black", price: "3845$", img: "iphone5.png" },
        { name: "Apple iPhone Air e-Sim", sub: "256GB Cloud White", price: "3845$", img: "iphone6.png" },
        { name: "Apple iPhone 16 Pro Max", sub: "256GB Natural Titanium", price: "2899$", img: "iphone7.png" },
        { name: "Apple iPhone 16 Pro Max", sub: "256GB Desert Titanium", price: "2899$", img: "iphone8.png" },
    ];

    const sliderRef4 = useRef<HTMLDivElement>(null);

    const scrollLeft4 = () => sliderRef4.current?.scrollBy({ left: -300, behavior: 'smooth' });
    const scrollRight4 = () => sliderRef4.current?.scrollBy({ left: 300, behavior: 'smooth' });

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



    return (
        <>
            <Navbar style={{backgroundColor: "rgb(16, 16, 16)"}} />
            <Iphon />

            <div className={styles.containerOne}>
                <h1>Iphone</h1>
                <div className={styles.componentOne}>
                    {cardsData.map((card, index) => (
                        <div className={styles.card} key={index}>
                            <Image
                                src={`${path}/images/iphone-images/${card.img}`}
                                alt={card.name}
                                width={220}
                                height={220}
                                style={{ objectFit: "cover", borderRadius: "10px" }}
                            />
                            <h5>{card.name}</h5>
                            <p>{card.sub}</p>
                            <p className={styles.p1}>{card.price}</p>
                            <div className={styles.button}>
                                <Link href={"/products"}><button className={styles.btn}>Buy</button></Link>
                                <button
                                    className={styles.btn2}
                                    onClick={() => {
                                        const product = {
                                            id: index,
                                            name: card.name,
                                            price: card.price,
                                            image: `${path}/images/iphone-images/${card.img}`,
                                        };
                                        addToCart(product);
                                        toast.success(`${product.name} added to cart!`);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.containerFour}>
                <h1>Get to know iPhone.</h1>

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
                                        src={`${path}/images/iphone-images/image${i}.png`}
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
                    <a className={`navbar-brand fw-bold ${styles.title}`} href="#">iPhone Overview</a>
                    <ul className="nav nav-pills gap-3">
                        <li className="nav-item">
                            <a className={`nav-link ${styles.tag}`} href="#scrollspyHeading1">Innovation</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${styles.tag}`} href="#scrollspyHeading2">Photography</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={`nav-link dropdown-toggle ${styles.tag}`} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#scrollspyHeading3">Experience</a></li>
                                <li><a className="dropdown-item" href="#scrollspyHeading4">Connectivity</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#scrollspyHeading5">Design</a></li>
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
                    <h4 id="scrollspyHeading1" className={styles.name}>Innovation</h4>
                    <p>iPhone brings the pinnacle of modern technology into the palm of your hand. Every element,
                        from the seamless iOS interface to the advanced hardware, is designed to work together flawlessly.
                        Smart features like Face ID, Siri, and predictive text anticipate your needs, making daily tasks faster
                        and more intuitive. Whether browsing, gaming, or managing your schedule, iPhone adapts to you,
                        providing an experience that feels both personal and powerful.</p>

                    <h4 id="scrollspyHeading2" className={styles.name}>Photography</h4>
                    <p>The iPhone camera is more than just a lens — its a complete photography studio.
                        With multiple lenses, Night Mode, Deep Fusion, and computational photography, it captures stunning detail
                        in any light. Videos can be shot in 4K, edited directly on the device, and shared instantly. Every feature,
                        from portrait lighting to smart HDR, is crafted to give users professional-quality results without the need for
                        extra equipment.</p>

                    <h4 id="scrollspyHeading3" className={styles.name}>Experience</h4>
                    <p>Using iPhone is a seamless, intuitive experience that blends hardware and software perfectly.
                        Gestures are natural, animations are smooth, and navigation feels effortless. iOS updates bring
                        new capabilities regularly, while maintaining stability and speed. Apps open instantly,
                        multitasking is smooth, and accessibility features ensure everyone can use the device comfortably,
                        making it suitable for work, creativity, and entertainment alike.</p>

                    <h4 id="scrollspyHeading4" className={styles.name}>Connectivity</h4>
                    <p>iPhone keeps you connected like no other device. With iCloud syncing, AirDrop sharing, and seamless
                        integration with Mac, iPad, and Apple Watch, your data, photos, messages, and calls follow you
                        everywhere. Whether its work emails, family chats, or social media, iPhone ensures everything
                        is up-to-date and accessible instantly. 5G and Wi-Fi 6 make streaming, video calls, and online
                        gaming faster and more reliable than ever.</p>

                    <h4 id="scrollspyHeading5" className={styles.name}>Design</h4>
                    <p>iPhone combines elegance, durability, and comfort in a single package. Crafted from premium
                        materials like glass and aluminum, it feels solid yet light in the hand. The vibrant OLED display
                        brings colors to life, while Ceramic Shield offers industry-leading drop protection. Every curve,
                        button, and surface is meticulously designed, making iPhone not only a powerful tool but also
                        a pleasure to hold and use every day.</p>
                </div>

            </div>

            <Slider style={{marginTop: "80px"}}/>

            <Footer />
        </>
    )
}
