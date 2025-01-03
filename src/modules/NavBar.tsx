import React, { useEffect } from 'react'
import styles from './navBar.module.css'
import { menus_navbar } from '@/data/menu_navbar'
import { NavbarProps } from '@/interfaces/Navbar'



const NavBar: React.FC<NavbarProps> = ({ menuItemHover, setMenuItemHover }) => {

  const hover_exclude = [null, 'nuevo', 'ofertas', 'personajes']

  return (
    <div
      className={!hover_exclude.includes(menuItemHover) ? styles.navbar_container : styles.hidden}
      onMouseLeave={() => setMenuItemHover(null)}
    >
      {
        menus_navbar.map(menu_item => (
          <div
            key={menu_item.title}
            className={menu_item.hidden === menuItemHover ? styles.hidden : styles.menu_item_container}
          >
            <h3
              className={styles.title_menu_navbar}
            >
              {menu_item.title === 'ver todo' ? `${menu_item.title} ${menuItemHover}` : menu_item.title}
              {menu_item.icon}
            </h3>
            {
              menu_item.subtitle.map(subtitle_item => (
                <div
                  key={subtitle_item.item}
                  className={styles.item_option_menu}
                >
                  {subtitle_item.item}
                  {subtitle_item.icon}
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default NavBar
