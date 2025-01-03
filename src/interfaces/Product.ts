export interface Product {
  productId: number,
  productName: string,
  price: number,
  brand: string,
  categories: string[],
  link: string,
  items: {
    images: {
      imageId: string,
      imageUrl: string,
      imageText: string
    }[]
  }[]
}