'use client'
import { useState } from 'react';
import Image from "next/image";
import { useContextMobile } from '@/hooks/contextMobile';
import { categories } from "@/data/categories";
import { icons } from '@/data/icons_navbar';
import { menus_navbar } from '@/data/menu_navbar';
import NavBar from './NavBar';
import styles from './banner.module.css'
import banner_grinch from '@/assets/banners/topbar-grinch-desktop.webp'
import banner_grinch_mobile from '@/assets/banners/topbar-grinch-mobile.gif'
import Brand from '@/assets/brand/brand.svg'
import brand_mobile from '@/assets/brand/brand-2.svg'
import hamburguer from '@/assets/nav/hamburguer.svg'
import search from '@/assets/nav/search.svg'
import bin from '@/assets/nav/bin.svg'
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { BannerProps } from '@/interfaces/Banner';
import { formatDiner } from '@/utils/FormatDiner';
import ProgressBar from '@ramonak/react-progress-bar';
import { Order } from '@/interfaces/Order';

import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { pushBuy } from '@/api/get_items';



const Banner: React.FC<BannerProps> = ({ myBag, setMyBag, subTotalPrice, setSubTotalPrice }) => {
  const isMobile = useContextMobile()
  const [menuItemHover, setMenuItemHover] = useState<string | null>(null)
  const [menuMobile, setMenuMobile] = useState<boolean>(false)
  const [subMenuActive, setSubMenuActive] = useState<boolean>(true)
  // const [subMenuView, setSubMenuView] = useState<string | null>(null)
  const [viewBag, setViewBag] = useState<boolean>(false)
  const [viewFinisPay, setViewFinisPay] = useState<boolean>(false)
  const [paySubtotal, setPaySubtotal] = useState(0)
  const [documentValue, setDocumentValue] = useState<string>('')


  const MenuCategories = () => (
    <div className={isMobile && menuMobile ? styles.menu_mobile_categories : styles.menu_container}>
      {
        categories.map(el => (
          <div
            key={el.name}
            className={styles.menu_item}
            onMouseEnter={() => { setMenuItemHover(el.title) }}
          >
            <h3 id={styles.title} >
              {el.title}
              {isMobile ? el.icon : ''}
            </h3>
            <p id={styles.subtitle}>{el.subtitle}</p>
            <FaChevronRight
              className={isMobile && !el.subtitle ? styles.menu_item_submenu : styles.none}
              size={10}
              onClick={() => {
                console.log(el.name)
              }}
            />
          </div>
        ))
      }
    </div>
  )

  const handleDocument = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocumentValue(e.target.value)
  }

  console.log(paySubtotal, setSubMenuActive)


  const handleNewOrder = async () => {

    const order:Order = {
      orderId: 'a0101',
      dateBuy: new Date(),
      document: documentValue,
      productsID: myBag.map(el => el.productId),
      countProducts: myBag.length,
      totalPrice: subTotalPrice,
    }

    const response = await pushBuy(order)
    console.log(response)
  }

  return (
    <div className={styles.banner_container}
    >
      <Image
        src={isMobile ? banner_grinch_mobile : banner_grinch}
        alt='topbar-grinch-desktop'
        className={styles.banner_grinch}
        height={50}
        onMouseEnter={() => setMenuItemHover(null)}
      />
      {/* <div className={styles.banner_grinch} /> */}
      <div className={styles.nav_bar}>
        <div className={styles.brand_container}>
          <div className={isMobile ? styles.menu_mobile : styles.none}>
            <Image
              src={hamburguer}
              alt='hamburguer_menu'
              height={20}
              onClick={() => {
                setMenuMobile(true)
              }}
            />
            <Image
              src={search}
              alt='search_icon'
              height={20}
            />
          </div>
          <Image
            src={Brand}
            alt="brand"
            className={styles.brand_desktop}
            height={50}
          />

          <MenuCategories />

          <div className={styles.login_container}>
            {
              icons.map((el, index) => (
                <div
                  key={el.name}
                >
                  <Image
                    key={index}
                    className={isMobile && el.hidden_mobile ? styles.none : styles.menu_item}
                    onClick={() => {
                      if (el.name === 'market' && myBag.length > 0) {
                        setViewBag(true);
                      }
                    }}
                    src={el.icon}
                    alt={el.name}
                    width={el.size}
                    height={el.size}
                  />
                  <div className={el.name === 'market' && myBag.length !== 0 ? styles.counter_bag : styles.none}>
                    {myBag.length}
                  </div>
                </div>
              ))
            }
          </div>
          <div className={viewBag ? styles.mybag_container : styles.none}>
            <div className={styles.mybag_title_container}>
              MI BOLSA DE COMPRAS
              <IoClose
                size={20}
                onClick={() => setViewBag(false)}
              />
            </div>
            <div className={styles.mybag_item_container}>
              {
                myBag.map(item_bag => (
                  <div
                    key={item_bag.productName}
                    className={styles.item_bag_information}
                  >
                    <Image
                      className={styles.item_bag_image}
                      src={item_bag.productImage}
                      alt={item_bag.productId}
                      // layout='responsive'
                      width={70}
                      height={120}
                    />
                    <div
                      className={styles.item_bag_data}
                    >
                      <h3 className={styles.item_bag_brand}>
                        {item_bag.descriptionBrand}
                        <Image
                          className={styles.umount_product}
                          onClick={() => {
                            setMyBag(prevBag => prevBag.filter(item => item.productName !== item_bag.productName))
                            setSubTotalPrice(prevSub => prevSub - item_bag.price)
                          }}
                          src={bin}
                          alt='icon_bin'
                          width={15}
                          height={15}
                        />
                      </h3>
                      <h3 className={styles.item_bag_product_name}>{item_bag.productName}</h3>
                      <div className={styles.item_bag_cant_price}>
                        <div className={styles.cant_price_inc_cant_dim}>
                          <div
                            className={styles.cant_price_sign}
                            onClick={() => {
                              setMyBag(prevBag =>
                                prevBag.map(item =>
                                  item.productId === item_bag.productId && item.quantity > 1
                                    ? { ...item, quantity: item.quantity - 1 }
                                    : item
                                )
                              )
                            }}
                          >
                            <HiOutlineMinusSm size={20} color='gray' />
                          </div>
                          <div className={styles.cant_price_number}>
                            {item_bag.quantity}
                          </div>
                          <div
                            className={styles.cant_price_sign}
                            onClick={() => {
                              setMyBag(prevBag =>
                                prevBag.map(item =>
                                  item.productId === item_bag.productId
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                                )
                              )
                              setPaySubtotal(prevSub => prevSub + item_bag.price)
                            }}
                          >
                            <HiOutlinePlusSm size={20} color='gray' />
                          </div>

                        </div>
                        <div className={styles.cant_price_price}>
                          <span
                            className={`${styles.description_price} ${styles.description_price_last}`}
                          >
                            {formatDiner(item_bag.price)}
                          </span>

                          <span
                            className={styles.description_price}
                          >
                            {formatDiner(item_bag.price - (item_bag.price * (20 / 100)))}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>


            <div className={styles.mybag_process_pay_container}>
              <div className={viewFinisPay ? styles.none : styles.mybag_process_pay}>
                <div className={styles.pay_subtotal}>
                  <span className={styles.pay_subtotal_title}>subtotal</span>
                  <span className={styles.pay_subtotal_price}>{formatDiner(subTotalPrice)}</span>
                </div>
                <div className={styles.pay_ship}>
                  <span className={styles.pay_ship_title}>costos de envío</span>
                  <span className={styles.pay_ship_price}>A calcular</span>
                </div>
                <div className={styles.pay_total}>
                  <span className={styles.pay_total_title}>total</span>
                  <span className={styles.pay_total_price} >{formatDiner(subTotalPrice - (subTotalPrice * (20 / 100)))}</span>
                </div>
                <span className={styles.pay_free_ship}>Faltan <span className={styles.pay_free_ship_bold}>
                  {formatDiner(
                    Math.max(0, 150000 - (subTotalPrice - subTotalPrice * (20 / 100)))
                  )}
                </span> para que tu <span className={styles.pay_free_ship_bold}>envío sea gratis!</span></span>
                <div className={styles.pay_free_progress}>
                  <ProgressBar
                    completed={subTotalPrice - (subTotalPrice * (20 / 100))}
                    bgColor="#ff0000"
                    height="8px"
                    labelAlignment="left"
                    isLabelVisible={false}
                    labelColor="#e80909"
                    maxCompleted={150000}
                  />
                  <div className={styles.pay_free_process_values}>
                    <span className={styles.pay_free_text}>
                      {formatDiner(0)}
                    </span>
                    <span className={styles.pay_free_text}>
                      {formatDiner(150000)}
                    </span>
                  </div>
                </div>
                <button
                  className={styles.btn_end_buy}
                  onClick={() => { setViewFinisPay(true) }}
                >
                  FINALIZAR COMPRA
                </button>
              </div>

              <div className={viewFinisPay ? styles.finish_pay : styles.none}>
                <div className={styles.input_doc}>
                  <IoClose
                    className={styles.close_icon_finish_pay}
                    size={20}
                    onClick={() => setViewFinisPay(false)}
                  />
                  Ingrese su documento
                  <input
                    className={styles.input_item}
                    value={documentValue}
                    type="text"
                    onChange={handleDocument}
                    placeholder='Documento'
                  />
                  <button
                    className={styles.btn_end_buy}
                    onClick={() => {
                      handleNewOrder()
                      setViewBag(false)
                      setMyBag([])
                    } }
                  >
                    ENVIAR ORDEN
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <NavBar
        menuItemHover={menuItemHover}
        setMenuItemHover={setMenuItemHover}
      />
      <div className={isMobile && menuMobile ? styles.menu_mobile_container : styles.none}>
        <div className={menuMobile && !subMenuActive ? styles.menu_mobile_space : styles.none}>
          <div className={styles.menu_mobile_brand}>
            <Image
              src={brand_mobile}
              alt='brand_mobile'
              height={50}
              width={50}
            />
            <IoClose
              className={styles.menu_mobile_close}
              size={30}
              onClick={() => setMenuMobile(true)}
            />
          </div>
          <MenuCategories />
          <div className={styles.menu_mobile_account}>
            {
              icons.map(item_account => (
                <div
                  key={item_account.name}
                  className={item_account.title !== 'buscar' ? styles.item_account_title : styles.none}
                >
                  {item_account.title}
                </div>
              ))
            }
          </div>
        </div>
        <div className={menuMobile && subMenuActive ? styles.submenu_mobile_space : styles.none}>
          {
            menus_navbar.map(submenu => (
              <div
                key={submenu.title}
              >
                {submenu.title}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Banner
