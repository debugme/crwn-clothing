import { connect } from 'react-redux'

import { addItemToCart } from '../../redux/cart/cartActionCreators'

import { CollectionCard } from './CollectionCard'

const mapDispatchToProps = { addItemToCart }

export const CollectionCardContainer = connect(
  null,
  mapDispatchToProps
)(CollectionCard)
