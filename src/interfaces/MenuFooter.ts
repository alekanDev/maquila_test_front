interface MenuItem {
  name: string,
  title?: string,
  icon?: string,
  size_icon?: number,
  action?: string
}

export interface MenuFooter {
  name: string,
  title: string,
  items: MenuItem[]
}