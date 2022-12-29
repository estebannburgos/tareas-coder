import { Box, Container } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
        <Box bg='tomato' w='100%' p={4} color='white'>
            {greeting}
        </Box>
    </Container>
  )
}

export default ItemListContainer