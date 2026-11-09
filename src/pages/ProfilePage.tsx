import { Paper, Stack, Text, Title } from '@mantine/core'
import { useAppContext } from '@/core/context'

export function ProfilePage() {
  const { accountInfo } = useAppContext()

  return (
    <Stack gap="lg">
      <Stack gap={4}>
        <Title order={2} c="var(--ink)">
          Profile
        </Title>
        <Text c="var(--ink-soft)">
          Manage your account details and preferences.
        </Text>
      </Stack>

      <Paper p="xl" radius="lg" withBorder bg="white">
        <Stack gap="xs">
          <Text fw={600} c="var(--ink)">
            {accountInfo
              ? `${accountInfo.firstName} ${accountInfo.lastName}`
              : 'Signed-in user'}
          </Text>
          <Text c="dimmed">{accountInfo?.email ?? 'Profile details will load here.'}</Text>
        </Stack>
      </Paper>
    </Stack>
  )
}
