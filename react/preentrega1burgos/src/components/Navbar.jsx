import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Image,
    Link,
    Text,
  } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import React from 'react';
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
      <Box bg='blue.200' px='4' w="full">
        <Flex h='24' alignItems='center' justifyContent='space-between'>
            <Box>
                <Link href="#">
                    <Flex>
                        <Image
                            src='img/logo2.png'
                            alt='Logo'
                        />
                        <Text fontSize='md' mt="25">Don Kiosquito</Text>
                    </Flex>
                </Link>
            </Box>
          <Flex alignItems='center'>

            <Menu>
              <MenuButton
                rounded='full'
                variant='link'
                cursor='pointer'
                mr="5"
                minW='0'>
                    <HamburgerIcon mr="2" />
                    Categorías
              </MenuButton>
              <MenuList>
                <MenuItem>Hombre</MenuItem>
                <MenuItem>Mujer</MenuItem>
                <MenuItem>Calzado</MenuItem>
                <MenuItem>Accesorios</MenuItem>
              </MenuList>
            </Menu>
            <CartWidget />
          </Flex>
        </Flex>

      </Box>

  )
}

export default Navbar