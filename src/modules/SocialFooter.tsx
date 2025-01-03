import React from 'react'
import Image from 'next/image'
import { social_footer } from '@/data/social_footer'
import styles from './socialFooter.module.css'
import world_region from '@/assets/footer/icon-web.svg'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SocialFooter = () => {
  return (
    <div className={styles.social_footer_container}>
      <div className={styles.icons_social} >
        {
          social_footer.map(social_item => (
            <Image
              key={social_item.name}
              className={styles.social_item}
              src={social_item.icon}
              alt={social_item.name}
              width={social_item.size}
            />
          ))
        }
        <p className={styles.follow_text} >SIGUENOS</p>
      </div>
      <div className={styles.current_region}>
        <Image
          src={world_region}
          alt='world_region'
          width={18}
        />
        <p>Colombia</p>
        <MdOutlineKeyboardArrowDown
          size={20}
        />
      </div>
    </div>
  )
}

export default SocialFooter
