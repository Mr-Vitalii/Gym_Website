import { SelectedPage } from '@/common/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
  toggleMenu: () => void
}

export const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  toggleMenu,
}: Props) => {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, '') as SelectedPage

  const HandleClick = () => {
    setSelectedPage(lowerCasePage)
    toggleMenu()
  }
  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={HandleClick}
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300 `}
    >
      {page}
    </AnchorLink>
  )
}
