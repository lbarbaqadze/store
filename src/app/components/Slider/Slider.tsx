'use client'

import { useEffect } from "react";
import styles from "./Slider.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {
  style?: React.CSSProperties
}


export default function Slider({style}: Props) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const path = process.env.NODE_ENV === 'production' ? '/store' : '';

  return (
    <div className={styles.container} style={style}>
      <div id="carouselExampleDark" className="carousel carousel-light slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`${path}/images/slider-images/img1.jpg`}
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={`${path}/images/slider-images/img2.jpg`}
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={`${path}/images/slider-images/img3.jpg`}
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
          </div>

          <div className="carousel-item">
            <img
              src={`${path}/images/slider-images/img4.jpg`}
              className={`d-block ${styles.sliderImg}`}
              alt="..."
            />
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
