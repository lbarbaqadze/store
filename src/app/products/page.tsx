'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useBasket } from "../context/basketContext";
import { Slide, toast } from 'react-toastify';
import Footer from "../components/Footer/Footer";

export default function Products() {
    const path = process.env.NODE_ENV === 'production' ? '/store' : '';
    const { addToCart } = useBasket();

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const cardsData = [
        { category: "iPhone", name: "Apple iPhone 17 Pro", sub: "256GB Deep Blue", price: "3999$", img: "img1.png" },
        { category: "iPhone", name: "Apple iPhone 17 Pro", sub: "256GB Silver", price: "3999$", img: "img2.png" },
        { category: "iPhone", name: "Apple iPhone 17 Pro", sub: "256GB Deep Orange", price: "3999$", img: "img3.png" },
        { category: "iPhone", name: "Apple iPhone Air e-Sim", sub: "256GB Sky Blue", price: "3845$", img: "img4.png" },
        { category: "iPhone", name: "Apple iPhone Air e-Sim", sub: "256GB Space Black", price: "3845$", img: "img5.png" },
        { category: "iPhone", name: "Apple iPhone Air e-Sim", sub: "256GB Cloud White", price: "3845$", img: "img6.png" },
        { category: "iPhone", name: "Apple iPhone 16 Pro Max", sub: "256GB Natural Titanium", price: "2899$", img: "img7.png" },
        { category: "iPhone", name: "Apple iPhone 16 Pro Max", sub: "256GB Desert Titanium", price: "2899$", img: "img8.png" },

        { category: "MacBook", name: "Apple Macbook Air 13 inch 2025", price: "4249$", img: "img9.png" },
        { category: "MacBook", name: "Apple MacBook Air 13 inch 2024", price: "4249$", img: "img10.png" },
        { category: "MacBook", name: "Apple Macbook Air 13 inch 2025", price: "3494$", img: "img11.png" },
        { category: "MacBook", name: "Apple MacBook Pro 14 inch 2024", price: "2340$", img: "img12.png" },
        { category: "MacBook", name: "Apple Macbook Air 13 inch 2025", price: "3532$", img: "img13.png" },
        { category: "MacBook", name: "Apple Macbook Pro 14 inch 2024", price: "3453$", img: "img14.png" },

        { category: "iPad", name: "iPad Mini", price: "2999$", img: "img15.png" },
        { category: "iPad", name: "iPad Mini", price: "2459$", img: "img16.png" },
        { category: "iPad", name: "iPad Mini", price: "2459$", img: "img17.png" },

        { category: "Watch", name: "Apple Watch Series 11", price: "4596$", img: "img18.png" },
        { category: "Watch", name: "Apple Watch SE 3", price: "3493$", img: "img19.png" },
        { category: "Watch", name: "Apple Watch Ultra 3", price: "2394$", img: "img20.png" },
    ];

    const categories = ["iPhone", "MacBook", "iPad", "Watch"];
    
    const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const scrollRow = (category: string, direction: 'left' | 'right') => {
        const rowRef = rowRefs.current[category];
        if (rowRef) {
            const scrollAmount = 300;
            rowRef.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <Navbar style={{ backgroundColor: "rgb(16, 16, 16)" }} />
            
            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={`${path}/images/products-images/bg1.jpg`} className="d-block w-100" alt="Slide 1" style={{ objectFit: "cover", height: "500px" }} />
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Experience iPhone Power.</h1>
                                <p className="opacity-75">Discover the newest innovations and unmatched performance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${path}/images/products-images/bg2.jpg`} className="d-block w-100" alt="Slide 2" style={{ objectFit: "cover", height: "500px" }} />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Build your Apple experience.</h1>
                                <p>Powerful tools for creativity, productivity, and beyond.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={`${path}/images/products-images/bg3.jpg`} className="d-block w-100" alt="Slide 3" style={{ objectFit: "cover", height: "500px" }} />
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>Apple for every moment.</h1>
                                <p>Discover how Apple connects performance, design, and simplicity.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
            <div className={styles.containerOne}>
                <h1>Apple Products</h1>
                {categories.map((cat, idx) => (
                    <div key={idx} className={styles.categorySection}>
                        <h2>{cat}</h2>
                        <div className={styles.scrollWrapper}>
                            <button
                                className={`${styles.scrollBtn} ${styles.left}`}
                                onClick={() => scrollRow(cat, 'left')}
                            >
                                {'<'}
                            </button>

                            <div
                                className={styles.scrollRow}
                                ref={(el) => { rowRefs.current[cat] = el; }}
                            >
                                {cardsData
                                    .filter(item => item.category === cat)
                                    .map((card, key) => (
                                        <div className={styles.card} key={key}>
                                            <Image
                                                src={`${path}/images/products-images/${card.img}`}
                                                alt={card.name}
                                                width={250}
                                                height={250}
                                                className={styles.image}
                                            />
                                            <h5>{card.name}</h5>
                                            {card.sub && <p>{card.sub}</p>}
                                            <p className={styles.price}>{card.price}</p>
                                            <button
                                                className={styles.btn2}
                                                onClick={() => {
                                                    const product = {
                                                        id: key,
                                                        name: card.name,
                                                        price: card.price,
                                                        image: `${path}/images/products-images/${card.img}`,
                                                    };
                                                    addToCart(product);
                                                    toast.success(`${product.name} added to cart!`, { transition: Slide });
                                                }}
                                            >
                                                Add to Cart
                                            </button>
                                        </div>
                                    ))}
                            </div>

                            <button
                                className={`${styles.scrollBtn} ${styles.right}`}
                                onClick={() => scrollRow(cat, 'right')}
                            >
                                {'>'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />

        </>
    );
}
