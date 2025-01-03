import React from 'react'
import Image from 'next/image'
import styles from './topBar.module.css'
import topbar_image from '@/assets/banners/topbar-sharestory-desktop.webp'
import topbar_image_mobile from '@/assets/banners/topbar-sharestory-mobile.gif'
import { useContextMobile } from '@/hooks/contextMobile'

const TopBar = () => {
  const isMobile = useContextMobile()
  return (
    <div
      className={styles.topbar_container}
    >
      <Image
        src={isMobile ? topbar_image_mobile : topbar_image}
        alt='topbar_image'
        unoptimized
        className={styles.topbar_image}
      />
    </div>
  )
}

export default TopBar
