import search_icon from '@/assets/nav/search.svg'
import pin_icon from '@/assets/nav/pin.svg'
import favorite_icon from '@/assets/nav/favorite.svg'
import user_icon from '@/assets/nav/user.svg'
import shopping_bag_icon from '@/assets/nav/shopping-bag.svg'
import { Icon_navbar } from '@/interfaces/Icon_navbar'

export const icons:Icon_navbar[] = [
  {
    name: 'search',
    title: 'buscar',
    icon: search_icon,
    icon_mobile: search_icon,
    size: 23,
    size_mobile:23,
    hidden_mobile: true,
  },
  {
    name: 'location',
    title: 'localizador de tiendas',
    icon: pin_icon,
    icon_mobile: pin_icon,
    size: 23,
    size_mobile:23,
    hidden_mobile: true,
  },
  {
    name: 'favorites',
    title: 'favoritos',
    icon: favorite_icon,
    icon_mobile: favorite_icon,
    size: 23,
    size_mobile:23,
    hidden_mobile: true,
  },
  {
    name: 'user',
    title: 'mi cuenta',
    icon: user_icon,
    icon_mobile: user_icon,
    size: 23,
    size_mobile:23,
    hidden_mobile: false,
  },
  {
    name: 'market',
    title: 'tienda',
    icon: shopping_bag_icon,
    icon_mobile: shopping_bag_icon,
    size: 23,
    size_mobile:23,
    hidden_mobile: false,
  }
]