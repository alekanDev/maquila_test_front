interface Subtitles {
  item: string,
  icon?: string
}

export interface NavbarMenu {
  title: string,
  icon?: string,
  subtitle: Subtitles[],
  hidden?: string
}

export interface NavbarProps {
  menuItemHover: string | null
  setMenuItemHover: React.Dispatch<React.SetStateAction<string | null>>
}