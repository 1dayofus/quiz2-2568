import { type FooterProps } from "/Users/1day/Desktop/CMU/CPE/quiz2-2568/libs/Footer.ts";
import { Text, Group, type AppShellFooterProps, type ComboboxFooterProps } from "@mantine/core";
export default function Footer({year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
      @ {fullName} {studentId} {year} All rights reserved.
      </Text>
    </Group>
  );
}
