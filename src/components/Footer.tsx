
import { Text, Group, type AppShellFooterProps, } from "@mantine/core";
export default function Footer({year, fullName, studentId }: AppShellFooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
      @ {fullName} {studentId} {year} All rights reserved.
      </Text>
    </Group>
  );
}
