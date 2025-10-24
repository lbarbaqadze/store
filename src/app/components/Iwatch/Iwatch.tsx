'use client'
import styles from "./Iwatch.module.css"
import Button from "../Button/Button"
import Image from "next/image"
import { useState } from "react"

export default function Iwatch() {
  const path = process.env.NODE_ENV === 'production' ? '/store' : ''

  const [image, setImage] = useState(`${path}/images/maincard-images/apple1.png`)

  return (
    <div className={styles.containerOne}>
      <div className={styles.componentOne}>
        <h1>
          The Ultimate Companion <br />
          <span>For Health And <br /> Productivity.</span>
        </h1>
        <Button title="Buy Now" className="button"
        href="/store/products" style={{textDecoration: "none", textAlign: "center"}} />
      </div>

      <div className={styles.componentTwo}>
        
        <div className={styles.card1}>
          <Image src={image} alt="apple" width={400} height={450} />
          <div className={styles.color}>
            <div
              className={`${styles.color1} ${image.includes('apple1') ? styles.active : ''}`}
              onClick={() => setImage(`${path}/images/maincard-images/apple1.png`)}
            ></div>
            <div
              className={`${styles.color2} ${image.includes('apple2') ? styles.active : ''}`}
              onClick={() => setImage(`${path}/images/maincard-images/apple2.png`)}
            ></div>
            <div
              className={`${styles.color3} ${image.includes('apple3') ? styles.active : ''}`}
              onClick={() => setImage(`${path}/images/maincard-images/apple3.png`)}
            ></div>
          </div>
        </div>


        <div className={styles.card2}>
          <div className={styles.change}>
            <div
              className={`${styles.changeWatch1} ${image.includes('apple1') ? styles.activeWatch : ''}`}
              onClick={() => setImage(`${path}/images/maincard-images/apple1.png`)}
            >
              <Image src={`${path}/images/maincard-images/apple1.png`} alt="apple" width={100} height={110}/>
            </div>
            <div
              className={`${styles.changeWatch2} ${image.includes('apple2') ? styles.activeWatch : ''}`}
              onClick={() => setImage(`${path}/images/maincard-images/apple2.png`)}
            >
              <Image src={`${path}/images/maincard-images/apple2.png`} alt="apple" width={100} height={110}/>
            </div>
            <div
              className={`${styles.changeWatch3} ${image.includes('apple3') ? styles.activeWatch : ''}`}
              onClick={() => setImage(`${path}/images/maincard-images/apple3.png`)}
            >
              <Image src={`${path}/images/maincard-images/apple3.png`} alt="apple" width={100} height={110}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
