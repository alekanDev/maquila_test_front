import { Order } from '@/interfaces/Order'
import axios from 'axios'
const url_API_localhost = 'http://localhost:3001'

export const getAll = async () => {
  return await axios({
    method: 'get',
    url: `${url_API_localhost}/api/product`
  })
  .then(response =>  {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const pushBuy = async (data:Order) => {
  return await axios({
    method: 'post',
    url:`${url_API_localhost}/buys/newbuy`,
    data
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const getBuys = async () => {
  return await axios({
    method: 'get',
    url:`${url_API_localhost}/buys/getbuys`,
  })
  .then(response => {
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}