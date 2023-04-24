import React from 'react'
import {
  Box,
  Container,
  Tabs,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import Login from '../cmps/Authentication/Login'
import SignUp from '../cmps/Authentication/SignUp'

const HomePage = () => {
  return (
    <Container
      maxW='xl'
      centerContent
    >
      <Box
        d='flex'
        justifyContent='center'
        p={3}
        bg={'white'}
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
        borderWidth='1px'
      >
        <Text
          fontSize='4xl'
          fontFamily='Work Sans'
          color='black'
        >
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        bg='white'
        w='100%'
        p={4}
        borderRadius='lg'
        color='black'
        borderWidth='1px'
      >
        <Tabs variant='soft-rounded'>
          <TabList mb='1em'>
            <Tab width='50%'>Login</Tab>
            <Tab width='50%'>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage
