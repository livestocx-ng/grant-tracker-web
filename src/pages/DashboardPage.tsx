import { Box, Button, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../core/context'

export function DashboardPage() {
  const navigate = useNavigate()
  const { accountInfo, setAuthToken, setAccountInfo } = useAppContext()

  function handleSignOut() {
    setAuthToken('')
    setAccountInfo(null)
    navigate('/login', { replace: true })
  }

  return (
    <Box
      component="main"
      mih="100dvh"
      px="md"
      py="xl"
      style={{
        background:
          'linear-gradient(165deg, #d9e8eb 0%, #eef5f6 48%, #d5e4e8 100%)',
      }}
    >
      <Stack maw={960} mx="auto" gap="lg">
        <Group justify="space-between" align="flex-start">
          <Stack gap={4}>
            <Title order={1} c="var(--ink)">
              Dashboard
            </Title>
            <Text c="var(--ink-soft)">
              Welcome
              {accountInfo?.firstName ? `, ${accountInfo.firstName}` : ''}.
              You are signed in.
            </Text>
          </Stack>
          <Button variant="light" color="teal" onClick={handleSignOut}>
            Sign out
          </Button>
        </Group>

        <Paper p="xl" radius="lg" withBorder bg="white">
          <Text c="dimmed">
            This is your protected Grant Tracker workspace. More modules will
            land here next.
          </Text>
        </Paper>
      </Stack>
    </Box>
  )
}
