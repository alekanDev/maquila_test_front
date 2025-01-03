export interface Order{
  orderId: string,
  dateBuy: Date,
  document: string,
  productsID: Date[],
  countProducts: number,
  totalPrice: number
}