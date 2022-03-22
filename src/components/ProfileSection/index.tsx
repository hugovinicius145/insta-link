import Link from 'next/link';
import { Stack, Text, Image } from "@chakra-ui/react";

import { FaInstagram } from 'react-icons/fa';

export function ProfileSection() {
  return (
    <Stack
      align="center"
      spacing={8}
    >
      <Image
        src='/images/profile-pic.png'
        alt="Profile Picture"
        w="180px"
        borderRadius="100%"
        border="2px"
        borderColor="white"
      />

      <Stack
        textAlign="center"
        spacing={2}
      >
        <Text
          fontWeight="bold"
          fontSize="3xl"
          letterSpacing={1}
          lineHeight="6"
        >
          Hugo Vinícius
        </Text>

        <Stack
          direction="row"
          textAlign="center"
          align="center"
          justify="center"
          color="gray.300"
        >
          <FaInstagram size="28px" />
          <Link href="https://instagram.com/hugoviniccius" passHref>
            <Text
              as="a"
              fontSize="xl"
              letterSpacing={1}

            >
              @hugoviniccius
            </Text>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}