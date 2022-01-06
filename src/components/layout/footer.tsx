import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { chakra, Stack, VStack, Divider, Link, Text } from '@chakra-ui/react';

import {
  LINKEDIN_PROFILE,
  GITHUB_PROFILE,
} from '../../constants';
import { Link as LinkType } from '@/types/link';

const firstGroup: LinkType[] = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

const secondGroup = [
  {
    href: LINKEDIN_PROFILE,
    label: 'Linkedin',
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
  },
];

const thirdGroup = [
  {
    href: '/uses',
    label: 'Uses',
  },
  {
    href: '/gear',
    label: 'Gear',
  },
];

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack pb={8} spacing={8} as='footer' alignItems='flex-start'>
      <Divider />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        w='full'
        spacing={{ base: 2, md: 8 }}
      >
        <VStack alignItems='flex-start'>
          {firstGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                isExternal={href.startsWith('http')}
                color={pathname === href ? 'purple.500' : 'gray.500'}
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems='flex-start'>
          {secondGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                isExternal={href.startsWith('http')}
                target='_blank'
                color='gray.500'
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems='flex-start'>
          {thirdGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                isExternal={href.startsWith('http')}
                color={pathname === href ? 'purple.500' : 'gray.500'}
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
      </Stack>
      <Stack
        w='full'
        direction={{ base: 'column', md: 'row' }}
        alignItems='center'
        justifyContent={{ base: 'center', md: 'space-between' }}
        spacing={0}
        gridRowGap={4}
      >
        <Text color='gray.500'>
          ©{' '}
          <chakra.span as='time' color='purple.500'>
            {new Date().getFullYear()}
          </chakra.span>{' '}
          Bigyan Koirala
        </Text>
      </Stack>
    </VStack>
  );
};

export default Footer;
