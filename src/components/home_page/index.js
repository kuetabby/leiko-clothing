import React from 'react'

import { HomePageContainer, DirectoryMenu } from './styles'
import MenuItem from 'components/menu_item'

const initialState = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
    id: 4,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
    id: 5,
    linkUrl: 'shop/mens'
  }
]

function Directory(props) {
  const category = initialState
  return (
    <HomePageContainer>
      <DirectoryMenu>
        {category.map(item => (
          <MenuItem
            key={item.id}
            title={item.title}
            image={item.imageUrl}
            link={item.linkUrl}
            size={item.size}
          />
        ))}
      </DirectoryMenu>
    </HomePageContainer>
  )
}

export default Directory
