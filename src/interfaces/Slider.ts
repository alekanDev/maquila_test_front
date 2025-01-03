import { StaticImageData } from 'next/image'

export interface Slider{
  title: string,
  name: string,
  image: string | StaticImageData,
  image_mobile: string | StaticImageData
}