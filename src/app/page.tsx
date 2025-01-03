'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { useContextMobile } from "@/hooks/contextMobile";
import { Product } from "@/interfaces/Product";
import Banner from "@/modules/Banner";
import Slider from "@/modules/Slider";
import TopBar from "@/modules/TopBar";
import Footer from "@/modules/Footer";
import Slider_bottom from "@/components/Slider_bottom";
import styles from "./page.module.css";
import { getAll } from "@/api/get_items";
import wishlist from '@/assets/product/wishlist.svg'
import arrow_left from '@/assets/nav/arrow-left.svg'
import arrow_right from '@/assets/nav/arrow-right.svg'
import search_ico from '@/assets/nav/search.svg'
import { MyBag } from '@/interfaces/Banner'
import { formatDiner } from '@/utils/FormatDiner'


export default function Home() {

  const isMobile = useContextMobile()

  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<Product[] | null>(null)
  const [isHoverProductID, setIsHoverProductID] = useState<number | null>(null)
  const [sizeSelect, setSizeSelect] = useState<string>('xs')
  const [myBag, setMyBag] = useState<MyBag[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [subTotalPrice, setSubTotalPrice] = useState<number>(0)

  const page: number = isMobile ? 2 : 4
  const startItems = currentPage * page
  const endItems = startItems + page
  const currentItems = product ? product.slice(startItems, endItems) : []
  const currentOff: number = 20
  const sizes_shirt: string[] = ['xs', 's', 'm', 'l', 'xl']
  const arrow_size: number = 22

  useEffect(() => {
    const getAllProduct = async () => {
      try {
        const products = await getAll()
        setProduct(products)
        setLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    getAllProduct()
  }, [])

  const nextPage = () => {
    if (currentPage < Math.ceil((product?.length || 0) / page) - 1) {
      setCurrentPage((prevPage) => prevPage + 1)
    } else {
      setCurrentPage(0)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1)
    } else {
      setCurrentPage(Math.ceil((product?.length || 0) / page) - 1)
    }
  }

  interface ProductItem {
    productId: string;
    items: {
      images: {
        imageUrl: string;
      }[];
    }[];
    brand: string;
    productName: string;
    price: number;
  }

  const addMyBag = (product_item: ProductItem) => {

    const new_item: MyBag = {
      productId: product_item.productId,
      productImage: product_item.items[0].images[0].imageUrl,
      descriptionBrand: product_item.brand,
      productName: product_item.productName,
      quantity: 1,
      price: product_item.price
    }

    const productExists = myBag.some(item => item.productId === product_item.productId)
    if (productExists) {
      return myBag
    } else {
      setMyBag(prevMyBag => [...prevMyBag, new_item])
    }
  }

  return (
    <div className={styles.home_container}>
      <Banner
        myBag={myBag}
        setMyBag={setMyBag}
        subTotalPrice={subTotalPrice}
        setSubTotalPrice={setSubTotalPrice}
      />
      <Slider />
      <TopBar />
      <div className={styles.topbar_market}>
        <div className={styles.topbar_menu_left}>
          <span className={styles.topbar_menu_item}>Camisetas</span>
        </div>
        <div className={isMobile ? styles.hidden : styles.topbar_menu_right}>
          <span className={styles.topbar_view_all}>Ver todo</span>
          <Image
            src={arrow_left}
            alt="arrow_left"
            className={styles.topbar_arrow}
            width={arrow_size}
            height={arrow_size}
            onClick={() => prevPage()}
          />
          <Image
            src={arrow_right}
            alt="arrow_right"
            className={styles.topbar_arrow}
            width={arrow_size}
            height={arrow_size}
            onClick={() => nextPage()}
          />
        </div>
      </div>

      <div
        className={styles.market_container}
      >
        {
          loading ? (<div>products Loading...</div>) :
            product && product.length > 0 ? (
              currentItems.map(product_item => (
                <div
                  key={product_item.productId}
                  className={styles.product_container}
                  onMouseEnter={() => setIsHoverProductID(product_item.productId)}
                  onMouseLeave={() => (setIsHoverProductID(null), (setSizeSelect('xs')))}
                >
                  <div
                    className={styles.image_container}
                  >
                    <span className={styles.current_off}>{`-${currentOff}%`}</span>
                    <Image
                      src={wishlist}
                      alt="wishlist"
                      className={styles.tag_wishlist_product}
                      unoptimized
                      priority
                      width={20}
                      height={20}
                    />
                    <Image
                      src={arrow_left}
                      alt="arrow_left"
                      className={isHoverProductID === product_item.productId || isMobile ? `${styles.arrows} ${styles.arrow_left}` : styles.hidden}
                      width={arrow_size}
                      height={arrow_size}
                    />
                    <Image
                      key={product_item.items[0].images[0].imageId}
                      className={styles.product_item_image}
                      src={product_item.items[0].images[0].imageUrl}
                      alt={product_item.items[0].images[0].imageText}
                      layout='responsive'
                      width={9}
                      height={16}
                    />
                    <Image
                      src={arrow_right}
                      alt="arrow_right"
                      className={isHoverProductID === product_item.productId || isMobile ? `${styles.arrows} ${styles.arrow_right}` : styles.hidden}
                      width={arrow_size}
                      height={arrow_size}
                    />
                    <div className={styles.tag_info_product}>
                      <div className={styles.tag_new_product_container}>
                        <span className={styles.tag_new_product}>new</span>

                        <Image
                          src={search_ico}
                          alt='search_ico'
                          width={18}
                          height={18}
                        />

                      </div>
                      <div className={isHoverProductID === product_item.productId || isMobile ? styles.product_sizes : styles.hidden}>
                        {
                          sizes_shirt.map(size => (
                            <span
                              key={size}
                              className={size === sizeSelect ? `${styles.size_content} ${styles.size_content_select}` : styles.size_content}
                              onClick={() => setSizeSelect(size)}
                            >
                              {size}
                            </span>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className={styles.description_item}>
                    <span className={styles.description_brand}>{product_item.brand}</span>
                    <p className={styles.description_product_name}>{product_item.productName}</p>
                    <div className={styles.price_container}>
                      <span
                        className={`${styles.description_price} ${styles.description_price_last}`}
                      >
                        {formatDiner(product_item.price)}
                      </span>
                      <span
                        className={styles.description_price}
                      >
                        {formatDiner(product_item.price - (product_item.price * (currentOff / 100)))}
                      </span>
                    </div>

                  </div>
                  <button
                    className={isHoverProductID === product_item.productId || isMobile ? styles.description_btn_add : styles.hidden_btn_add}
                    onClick={() => {
                      addMyBag({
                        ...product_item,
                        productId: product_item.productId.toString(),
                      });
                      setSubTotalPrice(prevSubTotal => prevSubTotal + product_item.price);
                    }}
                  >
                    Agregar a mi bolsa
                  </button>
                </div>
              ))
            ) : (
              <div>No products</div>
            )
        }
        <Slider_bottom />
        <div className={isMobile ? styles.topbar_market : styles.hidden}>
          <button className={styles.topbar_view_all}>Ver todo</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
