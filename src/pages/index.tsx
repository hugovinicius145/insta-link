import Link from 'next/link';
import { Stack, Text, Image, useBreakpointValue } from '@chakra-ui/react';

import { WhatsappSection } from '../components/WhatsappSection';
import { InfoSection } from '../components/InfoSection';
import { ProfileSection } from '../components/ProfileSection';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Stack
        p={isWideVersion ? 12 : 8}
        h="100vh"
        bg="gray.900"
        color="gray.100"
        align="center"
        justify="start"
        spacing={8}
      >
        <ProfileSection />

        <InfoSection />

        <WhatsappSection />
      </Stack>
    </>
  );
}
