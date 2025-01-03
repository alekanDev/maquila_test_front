'use client'
import React, { useEffect, useState } from 'react'
import { getBuys } from '@/api/get_items'
import styles from './page.module.css'
import { Order } from '@/interfaces/Order'
import { formatDiner } from '@/utils/FormatDiner'

const AdminPage = () => {
  const [allBuys, setAllBuys] = useState<Order[]>([])

  useEffect(() => {
    const getAllBuys = async () => {
      try {
        const buys = await getBuys()
        setAllBuys(buys)
      } catch (error) {
        console.error(error)
      }
    }
    getAllBuys()
  }, [])

  useEffect(() => {

    console.log(allBuys)
  }, [allBuys])
  return (
    <div className={styles.admin_container}>
      <h1 className={styles.title_page}>MY DASHBOARD</h1>
      <div
        className={`${styles.table_buys} ${styles.celd_row_title}`}
      >
        <span className={styles.celd_row}>ID pedido</span>
        <span className={styles.celd_row}>Fecha compra</span>
        <span className={styles.celd_row}>Documento</span>
        <span className={styles.celd_row}>IDs productos</span>
        <span className={styles.celd_row}>Cantidad Productos</span>
        <span className={styles.celd_row}>Precio Total</span>
      </div>

      {
        allBuys.map((buy, index) => (
          <div
            key={index}
            className={styles.table_buys}
          >
            <span
              className={styles.celd_row}
            >{buy.orderId}</span>
            <span
              className={styles.celd_row}
            >{new Date(buy.dateBuy).toISOString().split('T')[0]}</span>
            <span
              className={styles.celd_row}
            >{buy.document}</span>
            <span
              className={styles.celd_row}
            >{buy.productsID?.length > 0 ? (
              buy.productsID.map((id, i) => (
                <span
                  className={`${styles.celd_row} ${styles.celd_row_id_products}`}
                  key={i}>{`${id}`}</span>
              ))
            ) : (
              <span
                className={styles.celd_row}
              >No products available</span>
            )}</span>
            <span
              className={styles.celd_row}
            >{buy.countProducts}</span>
            <span
              className={styles.celd_row}
            >{formatDiner(buy.totalPrice)}</span>
          </div>

        ))
      }
    </div>
  )
}

export default AdminPage
