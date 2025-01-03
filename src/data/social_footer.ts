import { SocialFooter } from "@/interfaces/SocialFooter";
import facebook from '@/assets/social/icon-facebook.svg'
import instagram from '@/assets/social/icon-instagram.svg'
import tiktok from '@/assets/social/icon-tiktok.svg'
import youtube from '@/assets/social/icon-youtube.svg'

const size_icon = 35

export const social_footer : SocialFooter[] = [
  {
    name: 'facebook',
    title: 'Facebook',
    icon: facebook,
    size: size_icon
  },
  {
    name: 'instagram',
    title: 'Instagram',
    icon: instagram,
    size: size_icon

  },
  {
    name: 'tiktok',
    title: 'TikTok',
    icon: tiktok,
    size: size_icon

  },
  {
    name: 'youtube',
    title: 'YouTube',
    icon: youtube,
    size: size_icon

  }
]