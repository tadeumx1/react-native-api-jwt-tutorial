import React from 'react'
import { Text } from 'react-native'

import { Container, ProductImage, InfoContainer, ProductName } from './styles'

export default function ProductItem({ product }) {
  return (
    <Container>
      <ProductImage
        source={{ uri: product.url }}
      />
      <InfoContainer>
        <ProductName>{product.name}</ProductName>
        <Text>Cost {product.cost}</Text>
        <Text>Quantity {product.quantity}</Text>
      </InfoContainer>  
    </Container>
  );
}
