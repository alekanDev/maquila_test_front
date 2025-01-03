'use client'
import React, { useEffect, useState } from 'react'
import styles from './slider.module.css'
import Image from 'next/image'
import { banners } from '@/data/banners_slider'
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { useContextMobile } from '@/hooks/contextMobile'



const Slider = () => {
  const isMobile = useContextMobile()
  const [banner_position, setBanner_position] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBanner_position((prevPosition) => (prevPosition === 3 ? 0 : prevPosition + 1))
    }, 10000);

    return () => clearInterval(interval)
  }, [])

  const handleLeftClick = () => {
    if (banner_position === 0) {
      setBanner_position(banners.length - 1)
    } else {
      setBanner_position(banner_position - 1)
    }
  }

  const handleRightClick = () => {
    if (banner_position === banners.length - 1) {
      setBanner_position(0)
    } else {
      setBanner_position(banner_position + 1)
    }
  }

  return (
    <div className={styles.slider_container}>
      <RiArrowLeftWideFill
        className={`${styles.arrows} ${styles.arrow_left}`}
        size={60}
        onClick={handleLeftClick}
      />
      <div
        className={styles.test_container}
      >
        <Image
          className={styles.banner_content}
          src={isMobile ? banners[banner_position].image_mobile : banners[banner_position].image}
          alt={banners[banner_position].title}
          unoptimized
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.buttons_slider_container}>
        {
          banners.map((banner_item, index) => (
            <div
              key={banner_item.name}
              className={banner_position === index ? styles.button_slider_select : styles.button_slider}
              onClick={() => {
                setBanner_position(index)
              }}
            />
          ))
        }
      </div>
      <RiArrowRightWideFill
        className={`${styles.arrows} ${styles.arrow_right}`}
        size={60}
        onClick={handleRightClick}
      />
    </div>
  )
}

export default Slider
