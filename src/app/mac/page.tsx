'use client'
import styles from "./page.module.css"
import Navbar from "../components/Navbar/Navbar"
import Iphone from "../components/Mac/Mac"
import { useState } from "react"
import Image from "next/image"
import { useBasket } from "../context/basketContext";
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react"
import Footer from "../components/Footer/Footer"
import Link from "next/link"

export default function Home() {

  const sliderRef4 = useRef<HTMLDivElement>(null);

  const scrollLeft4 = () => sliderRef4.current?.scrollBy({ left: -350, behavior: 'smooth' });
  const scrollRight4 = () => sliderRef4.current?.scrollBy({ left: 350, behavior: 'smooth' });

  const path = process.env.NODE_ENV === 'production' ? '/store' : '';
  const { addToCart } = useBasket();
  const [active, setActive] = useState("all")

  const categories = [
    { id: "all", label: "All products" },
    { id: "laptops", label: "Laptops" },
    { id: "desktops", label: "Desktops" },
    { id: "displays", label: "Displays" }
  ]

  const products = [
    { id: 1, name: "Apple Macbook Air 13 inch 2025", cpu: "CPU 10c GPU 24GB/512GB SSD", price: "$4599", category: "laptops", image: `${path}/images/mac-images/mac1.png` },
    { id: 2, name: "Apple MacBook Air 13 inch 2024", cpu: "CPU 10c GPU 24GB/512GB SSD", price: "$4349", category: "laptops", image: `${path}/images/mac-images/mac2.png` },
    { id: 3, name: "Apple Macbook Air 13 inch 2025", cpu: "CPU 10c GPU 24GB/512GB SSD", price: "$4219", category: "laptops", image: `${path}/images/mac-images/mac3.png` },
    { id: 4, name: "Apple MacBook Pro 14 inch 2024", cpu: "CPU 32c GPU 36GB/1TB", price: "$6999", category: "laptops", image: `${path}/images/mac-images/mac4.png` },
    { id: 5, name: "Apple Macbook Air 13 inch 2025", cpu: "CPU 32c GPU 36GB/1TB", price: "$6599", category: "laptops", image: `${path}/images/mac-images/mac5.png` },
    { id: 6, name: "Apple Macbook Pro 14 inch 2024", cpu: "CPU 28c GPU 36GB/1TB", price: "$3999", category: "laptops", image: `${path}/images/mac-images/mac6.png` },
    { id: 7, name: "Apple Macbook Pro 13 inch 2023", cpu: "CPU 30c GPU 36GB/1TB", price: "$5499", category: "laptops", image: `${path}/images/mac-images/mac7.png` },
    { id: 8, name: "Apple iMac 24 M4", cpu: "CPU 10c GPU 16GB/256GB", price: "$9449", category: "desktops", image: `${path}/images/mac-images/desktop1.png` },
    { id: 9, name: "Apple iMac 24 M4", cpu: "CPU 10c GPU 16GB/256GB", price: "$9449", category: "desktops", image: `${path}/images/mac-images/desktop2.png` },
    { id: 10, name: "Apple Studio Display 27", price: "$10449", category: "displays", image: `${path}/images/mac-images/display1.png` },
  ];

  return (
    <>
      <Navbar style={{backgroundColor: "rgb(16, 16, 16)"}} />

      <Iphone />

      <div className={styles.containerOne}>
        <h1>Mac</h1>

        <div className={styles.choose}>
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`${styles.btn1} ${active === cat.id ? styles.active : ""}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.allProducts}>
          {products
            .filter(product => {
              if (active === "all") return true;
              if (active === "laptops") return product.name.toLowerCase().includes("macbook");
              if (active === "desktops") return product.name.toLowerCase().includes("imac");
              if (active === "displays") return product.name.toLowerCase().includes("display");
              return true;
            })
            .map(product => (
              <div key={product.id} className={styles.card}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={0}
                  height={0}
                  style={{ width: '300px', height: 'auto', borderRadius: '15px', objectFit: 'cover' }}
                />
                <h6>{product.name}</h6>
                <p>{product.cpu}</p>
                <p className={styles.p3}>{product.price}</p>
                <div className={styles.btn}>
                  <Link href={"/products"}><button className={styles.btn3}>Buy</button></Link>
                  <button
                    className={styles.btn2}
                    onClick={() => {
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

      <div className={styles.containerTwo}>
        <h1>Get to know Mac.</h1>

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
                    src={`${path}/images/mac-images/card${i}.png`}
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

      <div className={styles.containerThree}>
        <h1>Help me choose.</h1>
        <div className={styles.componentTwo}>
          <div className={styles.title}>
            <h4>Answer a few question to find the best Mac for you.</h4>
            <button className={styles.button}>Get started</button>
          </div>
          <Image src={`${path}/images/mac-images/image.png`} width={500} height={300} alt="mac"
            style={{
              width: '100%',   
              maxWidth: '500px',
              height: 'auto'
            }} 
            className={styles.img}/>
        </div>
      </div>

      <Footer />

    </>
  )
}
