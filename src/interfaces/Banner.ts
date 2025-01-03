export interface MyBag {
  productId: string,
  productImage: string,
  descriptionBrand: string,
  productName: string,
  quantity: number,
  price: number
}
export interface BannerProps {
  myBag: MyBag[]
  setMyBag: React.Dispatch<React.SetStateAction<MyBag[]>>
  subTotalPrice: number
  setSubTotalPrice: React.Dispatch<React.SetStateAction<number>>

}