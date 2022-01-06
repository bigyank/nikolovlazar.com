import {
  HStack,
  Heading,
  IconButton,
  useColorMode,
  Button,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { IoMoon, IoSunny } from 'react-icons/io5';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack as='nav' justifyContent='space-between' alignItems='center' py={3}>
      <NextLink href='/' passHref>
        <Link>
          <Heading size='sm'>Lazar.</Heading>
        </Link>
      </NextLink>
      <HStack alignItems='center' spacing={{ base: 0, md: 2 }}>
        <NextLink href='/blog' passHref>
          <Button as={Link} size='sm' variant='ghost'>
            Blog
          </Button>
        </NextLink>
        <NextLink href='/uses' passHref>
          <Button as={Link} size='sm' variant='ghost'>
            Uses
          </Button>
        </NextLink>
        <IconButton
          aria-label='toggle theme'
          icon={colorMode === 'light' ? <IoMoon /> : <IoSunny />}
          variant='ghost'
          size='sm'
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
