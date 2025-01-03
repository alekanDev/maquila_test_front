import { MenuFooter } from "@/interfaces/MenuFooter";
import chat from '@/assets/contact/icon-chat.svg'
import call from '@/assets/contact/icon-call.svg'
import email from '@/assets/contact/icon-email.svg'
import locator from '@/assets/contact/icon-locator-footer.svg'
import mastercard from '@/assets/payment/medios_de_pago_master_card.svg'
import visa from '@/assets/payment/medios_de_pago_visa.svg'
import bancolombia from '@/assets/payment/medios_de_pago_bancolombia.svg'
import american from '@/assets/payment/medios_de_pago_amex.svg'
import diners from '@/assets/payment/medios_de_pago_diners.svg'
import codensa from '@/assets/payment/medios_de_pago_codensa.svg'
import contraen from '@/assets/payment/medios_de_pago_contraentrega.svg'
import credifin from '@/assets/payment/medios_de_pago_credifin.svg'
import pse from '@/assets/payment/medios_de_pago_pse.svg'
import tcredito from '@/assets/payment/medios_de_pago_credito.svg'
import tdebito from '@/assets/payment/medios_de_pago_debito.svg'
import efecty from '@/assets/payment/medios_de_pago_efecty.svg'

const contact_icon = 16
const pay_method = 60

export const menu_footer: MenuFooter[] = [
  {
    name: 'contact',
    title: 'CONTACTO',
    items: [
      {
        name: 'whatsapp_chat', 
        title: 'Chat con un asesor whatsapp',
        icon: chat,
        size_icon: contact_icon
      },
      {
        name: 'call_mobile', 
        title: 'Llamar +57 300 910 8311',
        icon: call,
        size_icon: contact_icon
      },
      {
        name: 'email', 
        title: 'Escribir un correo',
        icon: email,
        size_icon: contact_icon
      },
      {
        name: 'locator', 
        title: 'LOCALIZADOR DE TIENDAS',
        icon: locator,
        size_icon: contact_icon
      },
    ]
  },
  {
    name: 'help',
    title: 'AYUDA',
    items: [
      {
        name: 'faq',
        title: 'Preguntas frecuentes'
      },
      {
        name: 'orders',
        title: 'Mis pedidos'
      },
      {
        name: 'follow_order',
        title: 'Sigue tu pedido'
      },
      {
        name: 'returns',
        title: 'Cambios y devoluciones'
      },
      {
        name: 'warranty',
        title: 'Garantía de productos'
      },
      {
        name: 'retract',
        title: 'Retracto de compra'
      },
      {
        name: 'subscription',
        title: 'Modificar mí suscripción'
      }
    ]
  },
  {
    name: 'company',
    title: 'EMPRESA',
    items: [
      {
        name: 'about',
        title: 'Quiénes somos'
      },
      {
        name: 'locator',
        title: 'Localizador de tiendas'
      },
      {
        name: 'with_us',
        title: 'Trabaja con nosotros'
      },
      {
        name: 'etical',
        title: 'Línea de transparencia y ética empresarial'
      },
      {
        name: 'sitemap',
        title: 'Sitemap'
      }
    ]
  },
  {
    name: 'pay',
    title: 'MEDIOS DE PAGO',
    items: [
      {
        name: 'mastercard',
        icon: mastercard,
        size_icon: pay_method,
      },
      {
        name: 'visa',
        icon: visa,
        size_icon: pay_method,
      },
      {
        name: 'bancolombia',
        icon: bancolombia,
        size_icon: pay_method,
      },
      {
        name: 'american_express',
        icon: american,
        size_icon: pay_method,
      },
      {
        name: 'diners',
        icon: diners,
        size_icon: pay_method,
      },
      {
        name: 'codensa',
        icon: codensa,
        size_icon: pay_method,
      },
      {
        name: 'contra_entrega',
        icon: contraen,
        size_icon: pay_method,
      },
      {
        name: 'credifin',
        icon: credifin,
        size_icon: pay_method,
      },
      {
        name: 'pse',
        icon: pse,
        size_icon: pay_method,
      },
      {
        name: 'tarjeta_credito',
        icon: tcredito,
        size_icon: pay_method,
      },
      {
        name: 'tarjeta_debito',
        icon: tdebito,
        size_icon: pay_method,
      },
      {
        name: 'efecty',
        icon: efecty,
        size_icon: pay_method,
      }
    ]
  }
]