import {Promise} from '@/interfaces/Promise'
import styles from '@/modules/footer.module.css'
import shipping from '@/assets/promise/shipping.svg'
import service from '@/assets/promise/service.svg'
import bag from '@/assets/promise/bag.svg'
import locator from '@/assets/promise/locator.svg'


const size_icon = 40
const size_icon_mobile = 50

export const promises_footer:Promise[] = [
  {
    name: 'free_shipping',
    title: 'ENVÍO GRATUITO',
    text: 'Envío gratis a partir de $150.000 a todo el país',
    classname: styles.free_shipping,
    icon: shipping,
    size: size_icon,
    size_mobile: size_icon_mobile,
  },
  {
    name: 'customer_service',
    title: 'ATENCIÓN AL CLIENTE',
    text: 'Nuestro equipo estará disponible para ayudarte cuando lo necesites',
    classname: styles.customer_service,
    icon: service,
    size: size_icon,
    size_mobile: size_icon_mobile,
  },
  {
    name: 'easy_return',
    title: 'FÁCIL DEVOLUCIÓN',
    text: 'Puedes realizar el proceso de devolución o cambio de tu producto fácil',
    classname: styles.easy_return,
    icon: bag,
    size: size_icon,
    size_mobile: size_icon_mobile,
  },
  {
    name: 'order_traking',
    title: 'SEGUIMIENTO DE PEDIDO',
    text: 'Cuando realizas tu compra enviamos el número de guía para que puedas rastrearlo',
    classname: styles.order_traking,
    icon: locator,
    size: size_icon,
    size_mobile: size_icon_mobile,
  }
]