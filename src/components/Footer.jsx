import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack,Text,VStack } from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';
const Footer = () => {
  return (
     <Box minH={'40'} bgColor={'blackAlpha.900'} p="16" color={'white'}>
    <Stack
    direction={['column', 'row']}>
    <VStack px={'4'} w={'full'}>
    <Heading 
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
            >Subscribe to get updates</Heading>
            <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              focusBorderColor="none"
            />
            <Button  
                
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}>
              <AiOutlineSend size={20}/>
           </Button>
            </HStack>
    
    </VStack>
    <VStack w={'full'} px={'4'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}>
        <Heading textTransform={'uppercase'} textAlign={'center'}>Video Hub</Heading>
        <Text>@All rights Reserved</Text>
    </VStack>

    <VStack w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
              <a target='blank' href='https://youtube.com/'>Youtube</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
              <a target='blank' href='https://instagram.com/'>Instagram</a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
              <a target='blank' href='https://facebook.com/'>Facebook</a>
          </Button>
          </VStack>
   
    </Stack>
     </Box>

  )
}

export default Footer