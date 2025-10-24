'use client'
import styles from "./Mac.module.css"
import Button from "../Button/Button"
import Image from "next/image"
import { useState } from "react"

export default function Iphone() {
    const path = process.env.NODE_ENV === 'production' ? '/store' : ''

    const [image, setImage] = useState(`${path}/images/mac1.png`)

    return (
        <>
            <div className={styles.containerOne}>
                <div className={styles.componentOne}>
                    <h1>
                        Find The Perfect <br />
                        <span>Mac For You <br /> Needs.</span>
                    </h1>
                    <Button title="Buy Now" className="button"
                    href="/store/products" style={{textDecoration: "none", textAlign: "center"}} />
                </div>

                <div className={styles.componentTwo}>

                    <div className={styles.card1}>
                        <Image src={image} alt="apple" width={400} height={450} />
                        <div className={styles.color}>
                            <div
                                className={`${styles.color1} ${image.includes('mac1') ? styles.active : ''}`}
                                onClick={() => setImage(`${path}/images/mac1.png`)}
                            ></div>
                            <div
                                className={`${styles.color2} ${image.includes('mac2') ? styles.active : ''}`}
                                onClick={() => setImage(`${path}/images/mac2.png`)}
                            ></div>
                            <div
                                className={`${styles.color3} ${image.includes('mac3') ? styles.active : ''}`}
                                onClick={() => setImage(`${path}/images/mac3.png`)}
                            ></div>
                        </div>
                    </div>


                    <div className={styles.card2}>
                        <div className={styles.change}>
                            <div
                                className={`${styles.changeWatch1} ${image.includes('mac1') ? styles.activeWatch : ''}`}
                                onClick={() => setImage(`${path}/images/mac1.png`)}
                            >
                                <Image src={`${path}/images/mac1.png`} alt="apple" width={100} height={110} />
                            </div>
                            <div
                                className={`${styles.changeWatch2} ${image.includes('mac2') ? styles.activeWatch : ''}`}
                                onClick={() => setImage(`${path}/images/mac2.png`)}
                            >
                                <Image src={`${path}/images/mac2.png`} alt="apple" width={100} height={110} />
                            </div>
                            <div
                                className={`${styles.changeWatch3} ${image.includes('mac3') ? styles.activeWatch : ''}`}
                                onClick={() => setImage(`${path}/images/mac3.png`)}
                            >
                                <Image src={`${path}/images/mac3.png`} alt="apple" width={100} height={110} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
