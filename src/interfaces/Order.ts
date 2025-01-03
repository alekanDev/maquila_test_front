export interface Order{
  orderId: string,
  dateBuy: Date,
  document: string,
  productsID: string[],
  countProducts: number,
  totalPrice: number
}