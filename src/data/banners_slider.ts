import { Slider } from "@/interfaces/Slider";
import chillout from '@/assets/banners/banner-ppal-chillout-desktop.webp'
import grinch from '@/assets/banners/banner-ppal-grinch-desktop.webp'
import harry from '@/assets/banners/banner-ppal-harry-desktop.webp'
import sharestory from '@/assets/banners/banner-ppal-sharestory-desktop.webp'
import chillout_mobile from '@/assets/banners/banner-ppal-chillout-mobile.webp'
import grinch_mobile from '@/assets/banners/banner-ppal-grinch-mobile.webp'
import harry_mobile from '@/assets/banners/banner-ppal-harry-mobile.webp'
import sharestory_mobile from '@/assets/banners/banner-ppal-sharestory-mobile.webp'

export const banners:Slider[] = [
  {
    title: 'banner-ppal-chillout-desktop',
    name: 'chillout',
    image:chillout,
    image_mobile: chillout_mobile
  },
  {
    title: 'banner-ppal-grinch-desktop' ,
    name: 'grinch',
    image: grinch,
    image_mobile: grinch_mobile
  },
  {
    title: 'banner-ppal-harry-desktop',
    name: 'harry',
    image: harry,
    image_mobile: harry_mobile
  },
  {
    title: 'banner-ppal-sharestory-desktop',
    name: 'sharestory',
    image: sharestory,
    image_mobile: sharestory_mobile
  }  
]