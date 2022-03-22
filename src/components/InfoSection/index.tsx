import { Stack, Text } from "@chakra-ui/react";

export function InfoSection() {
  return (
    <Stack textAlign="center">
      <Text fontWeight="semibold">
        O que eu faço?
      </Text>

      <Text>
        Sou um <strong>Estrategista Digital</strong>, ou seja eu monto as melhores estratégias<br />
        para a sua empresa lucrar mais no online.
      </Text>

      <Text fontWeight="semibold" fontSize="xl">
        Faço desde a gestão de tráfego, até a criação do seu site.
      </Text>
    </Stack>
  );
}