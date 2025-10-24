'use client'

import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/Navbar";
import Iwatch from "../components/Iwatch/Iwatch";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import { useBasket } from "../context/basketContext";
import { toast } from 'react-toastify';

export default function Home() {

  const { addToCart } = useBasket()

  const path = process.env.NODE_ENV === 'production' ? '/store' : '';

  const sliderRef3 = useRef<HTMLDivElement>(null);
  const sliderRef4 = useRef<HTMLDivElement>(null);

  const scrollLeft3 = () => sliderRef3.current?.scrollBy({ left: -350, behavior: 'smooth' });
  const scrollRight3 = () => sliderRef3.current?.scrollBy({ left: 350, behavior: 'smooth' });

  const scrollLeft4 = () => sliderRef4.current?.scrollBy({ left: -350, behavior: 'smooth' });
  const scrollRight4 = () => sliderRef4.current?.scrollBy({ left: 350, behavior: 'smooth' });

  const cardsData = [
    {
      title: "Financing",
      subtitle: "Pay over time, interest-free",
      desc: "When you choose Apple Card Monthly Installments at checkout."
    },
    {
      title: "Trade in",
      subtitle: "Upgrade and save.",
      desc: "Trade in your old Apple Watch and get credit toward a new one."
    },
    {
      title: "AppleCare+",
      subtitle: "Protection for your watch.",
      desc: "Get service and support from the people who know your device best."
    },
    {
      title: "Free delivery",
      subtitle: "Right to your door.",
      desc: "Fast, free delivery or pickup available at the Apple Store."
    },
    {
      title: "Engraving",
      subtitle: "Make it yours.",
      desc: "Add a personal touch with free engraving on select models."
    },
    {
      title: "Setup help",
      subtitle: "Get started easily.",
      desc: "Well walk you through setup and pairing with your iPhone."
    },
  ];

  return (
    <>

      <Navbar style={{backgroundColor: "rgb(16, 16, 16)"}} />


      <Iwatch />

      <div className={styles.containerTwo}>
        <h1>Apple Watch</h1>
        <div className={styles.componentOne}>
          <div className={styles.card1}>
            <Image src={`${path}/images/watch1.png`} alt="watch" width={300} height={300} className={styles.img} />
            <p className={styles.p1}>New</p>
            <h6 className={styles.h6}>Apple Watch Series 11</h6>
            <p className={styles.p2}>The ultimate way to watch your health.</p>
            <p className={styles.p3}>From $399 or $33.25/mo. for 12 mo.*</p>
            <div className={styles.button}>
              <button className={styles.btn1}>Learn more</button>
              <Link href={"/products"} style={{ textDecoration: "none" }}><button className={styles.btn2}>Buy</button></Link>
              <button
                className={styles.btn2}
                onClick={() => {
                  const product = {
                    id: 1,
                    name: "Apple Watch Series 11",
                    price: "$399",
                    image: `${path}/images/watch1.png`,
                  };
                  addToCart(product);
                  toast.success(`${product.name} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.card1}>
            <Image src={`${path}/images/watch2.png`} alt="watch" width={300} height={300} className={styles.img} />
            <p className={styles.p1}>New</p>
            <h6 className={styles.h6}>Apple Watch SE 3</h6>
            <p className={styles.p2}>Essential health features at a great value.</p>
            <p className={styles.p3}>From $249 or $20.75/mo. for 12 mo.*</p>
            <div className={styles.button}>
              <button className={styles.btn1}>Learn more</button>
              <Link href={"/products"} style={{ textDecoration: "none" }}><button className={styles.btn2}>Buy</button></Link>
              <button
                className={styles.btn2}
                onClick={() => {
                  const product = {
                    id: 2,
                    name: "Apple Watch SE 3",
                    price: "$249",
                    image: `${path}/images/watch2.png`,
                  };
                  addToCart(product);
                  toast.success(`${product.name} added to cart!`);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className={styles.card1}>
            <Image src={`${path}/images/watch3.png`} alt="watch" width={300} height={300} className={styles.img} />
            <p className={styles.p1}>New</p>
            <h6 className={styles.h6}>Apple Watch Ultra 3</h6>
            <p className={styles.p2}>The ultimate sports and adventure watch.</p>
            <p className={styles.p3}>From $799 or $66.58/mo. for 12 mo.*</p>
            <div className={styles.button}>
              <button className={styles.btn1}>Learn more</button>
              <Link href={"/products"} style={{ textDecoration: "none" }}><button className={styles.btn2}>Buy</button></Link>
              <button
                className={styles.btn2}
                onClick={() => {
                  const product = {
                    id: 3,
                    name: "Apple Watch Ultra 3",
                    price: "$799",
                    image: `${path}/images/watch3.png`,
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

      <div className={styles.containerThree}>
        <h1>Why Apple is the best <br /> place to buy Apple Watch.</h1>

        <div style={{ position: 'relative' }}>
          <div
            className={styles.componentTwo}
            ref={sliderRef3}
            style={{ overflowX: 'auto', scrollBehavior: 'smooth', padding: '20px 0' }}
          >
            {cardsData.map((card, i) => (
              <div className={styles.card2} key={i}>
                <div className={styles.cardContent}>
                  <p className={styles.p4}>{card.title}</p>
                  <h6>{card.subtitle}</h6>
                  <p className={styles.p5}>{card.desc}</p>
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={`${path}/images/card${i + 1}.png`}
                    alt={`card-photo-${i}`}
                    fill
                    className={styles.img1}
                  />
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: -45,
              right: 0,
              display: 'flex',
              gap: '10px',
              padding: '10px',
            }}
          >
            <button
              onClick={scrollLeft3}
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
              onClick={scrollRight3}
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

      <div className={styles.containerFour}>
        <h1>Get to know Apple Watch.</h1>

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
                    src={`${path}/images/image${i}.png`}
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


      <div className={styles.containerFive}>
        <h1>Apple Watch essentials.</h1>
        <div className={styles.componentFive}>
          <div>
            <h6>Time for a refresh.</h6>
            <p>Explore the latest bands in new <br />
              materials, styles, and colors</p>
            <Link href={"#"}>Shop Apple Watch Brands</Link>
          </div>
          <div className={styles.images}>
            <Image src={`${path}/images/img.png`} width={550} height={450} alt="watch"></Image>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
