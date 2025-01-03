import { NavbarMenu } from "@/interfaces/Navbar"

const menu_ver_todo : NavbarMenu[] = [
  {
    title: 'ver todo',
    subtitle: [
      {
        item: 'novedades',
        icon: '❤️‍🔥'
      },
      {
        item: 'los mas vendidos'
      }
    ]
  }
]

const menu_imperdibles: NavbarMenu[] = [
  {
    title: 'imperdibles',
    icon: '🤩',
    subtitle: [
      {
        item: 'ropa de anime'
      },
      {
        item: 'camisetas de anime'
      },
      {
        item: 'camisetas de superhéroes'
      },
      {
        item: 'pijamas de superhéroes'
      },
      {
        item: 'ofertas especiales'
      }
    ]
  }
]

export const menus_navbar: NavbarMenu[] = [
  ...menu_ver_todo,
  {
    title: 'mujer',
    hidden: 'hombre',
    subtitle: [
      {
        item: 'camisetas'
      },
      {
        item: 'camisas'
      },
      {
        item: 'pijamas'
      },
      {
        item: 'ropa interior'
      },
      {
        item: 'buzos y chaquetas'
      },
      {
        item: 'joggers, pantalones y shorts'
      },
      {
        item: 'calzado'
      },
      {
        item: 'accesorios'
      },
    ]
  },
  {
    title: 'hombre',
    hidden: 'mujer',
    subtitle: [
      {
        item: 'camisetas'
      },
      {
        item: 'camisas'
      },
      {
        item: 'pijamas'
      },
      {
        item: 'buzos y chaquetas'
      },
      {
        item: 'joggers, pantalones y bermudas'
      },
      {
        item: 'pantalonetas de baño'
      },
      {
        item: 'accesorios'
      },
      {
        item: 'calzado'
      }
    ]
  },
  ...menu_imperdibles
]
