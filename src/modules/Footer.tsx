import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './footer.module.css'
import { promises_footer } from '@/data/promises_footer'
import { menu_footer } from '@/data/menu_footer'
import icon_email_white from '@/assets/contact/icon-email-white.svg'
import SocialFooter from './SocialFooter'
import LegalInfo from './LegalInfo'
import { useContextMobile } from '@/hooks/contextMobile'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Footer = () => {
  const isMobile = useContextMobile()
  const [option_list_select, setOption_list_select] = useState<string | null>(null)

  
  const menu_footer_mobile = [...menu_footer]
  // const last_item = menu_footer_mobile.pop()
  // menu_footer_mobile.unshift(last_item)

  


  useEffect(() => {
  }, [option_list_select])

  return (
    <div className={styles.footer_container}>
      <div className={styles.shop_online}>
        <h1>TIENDA DE ROPA ONLINE PARA HOMBRE Y MUJER</h1>
        <p>¡Sabemos que lo tuyo no es precisamente lo convencional! Y en Movies tenemos todo el estilo y los diseños que siempre quisiste encontrar. En nuestra <span className={styles.highlight}>tienda de ropa online</span> hay un espacio para todos. No importa cuales sean tus preferencias, si eres más de series clásicas o de las más actuales, si te mueres por el universo Marvel o en definitiva llevas contigo DC Comics hasta el final. ¡Recuerda! Movies es más que una <span className={styles.highlight}>tienda de ropa de superhéroes,</span> series o películas; nosotros somos quienes junto a ti, hacemos que la historia continúe, dándote la posibilidad de llevar siempre contigo las colecciones oficiales, las cápsulas originales y las prendas más icónicas del mercado; ¿hombre o mujer? ¡Whatever!, aquí también hay una sección pensada desde todos los gustos.</p>
        <a href="">Ver más</a>
      </div>

      <div className={styles.promise} >
        {
          promises_footer.map((el, index) => (
            <div
              key={index}
              className={styles.items_promise}
            >
              <Image
                src={el.icon}
                alt={el.name}
                width={isMobile ? el.size_mobile : el.size}
              />
              <div className={styles.information}>
                <h3 className={styles.title_promise}>{el.title}</h3>
                <p>{el.text}</p>
              </div>
            </div>
          ))
        }
      </div>

      <div className={styles.newsletter}>
        <div className={styles.newsletter_left}>
          <h2 className={styles.porcent_off}>
            20% OFF <span className={styles.mvs_text}>MVS ®</span>
          </h2>
          <p className={styles.text_susbribe}>
            SUSCRÍBETE A NUESTRO NEWSLETTER <span className={styles.porcent_off_text}>Y RECIBE 20% OFF EN TU PRIMERA COMPRA.</span>
          </p>
        </div>
        <div className={styles.newsletter_right}>
          <p>Todas las novedades, lanzamientos, descuentos exclusivos y mucho más.</p>
          <button
            className={styles.button_container}
          >
            <Image
              src={icon_email_white}
              alt='icon_email_white'
            />
            <span className={styles.text_button_susbribe}>SUSCRIBIRME</span>
          </button>
        </div>
      </div>

      <div className={styles.menu_footer_container} >
        {
          isMobile ?
            (
              menu_footer_mobile.map((option_list) => (
                <div
                  key={option_list.name}
                  className={styles.content_item_menu}
                >
                  <div
                    className={option_list.name !== 'pay' ? styles.menu_footer : styles.menu_pay_method}
                  >
                    <div
                      className={styles.content_btn_option_list}
                      onClick={() => {
                        setOption_list_select(option_list.name)
                      }}
                    >
                      <h3 className={styles.title_option_list}>{option_list.title}</h3>
                      {
                        option_list.name !== 'pay' ? <MdOutlineKeyboardArrowDown size={20} /> : ''
                      }
                    </div>
                  </div>

                  <div className={option_list_select === option_list.name && option_list.name !== 'pay' ?  styles.view_menu_options : (option_list.name === 'pay' ? styles.view_menu_options_pay : styles.hidden)}>
                    {
                      option_list.items.map(item_list => (
                        <div
                          key={item_list.name}
                          className={option_list.name !== 'pay' ? styles.menu_footer_mobile : styles.menu_footer_mobile_pay}
                        >
                          {
                            item_list.icon && (
                              <Image
                                src={item_list.icon}
                                alt={item_list.name}
                                width={item_list.size_icon}
                              />
                            )
                          }
                          <p className={styles.item_title}>{item_list.title}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            )
            : (
              menu_footer.map((option_list) => (
                <div
                  key={option_list.name}
                  className={option_list.name != 'pay' ? styles.menu_footer : styles.menu_pay_method}
                >
                  <h3 className={styles.title_option_list}>{option_list.title}</h3>
                  {
                    option_list.items.map((item) => (
                      <p
                        key={item.name}
                        className={styles.ref_item}
                      >
                        {
                          item.icon && (
                            <Image
                              src={item.icon}
                              alt={item.name}
                              width={item.size_icon}
                            />
                          )
                        }
                        {item.title}
                      </p>
                    ))
                  }
                </div>
              ))
            )
        }
      </div>

      <SocialFooter />
      <LegalInfo />
    </div>
  )
}

export default Footer
