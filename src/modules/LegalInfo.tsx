import React from 'react'
import Image from 'next/image'
import { legal_menu } from '@/data/legal_menu'
import icon_sic from '@/assets/footer/icon-sic.svg'
import styles from './legalInfo.module.css'

const LegalInfo = () => {
  return (
    <div className={styles.legal_info_container} >
      <div className={styles.lega_menu_container} >
        <div className={styles.legal_menu}>
          {
            legal_menu.map(legal_option => (
              <div
                key={legal_option.name}
                className={styles.legal_option_item}
              >
                {legal_option.title}
              </div>
            ))
          }
          <Image
            className={styles.icon_sic}
            src={icon_sic}
            alt='icon_sic'
            height={35}
          />
        </div>
        <p className={styles.all_rights}
        >
          © 2024 MIC. Todos los derechos reservados.
        </p>
      </div>
      <div className={styles.company_info}>
        <p>Movies© 2022 ESTRATEGIA COMERCIAL DE COLOMBIA S.A.S. NIT: 830507952-5 Dirección: Calle 60 Sur N° 43A 97 Sabaneta, Colombia</p>
      </div>
    </div>
  )
}

export default LegalInfo
