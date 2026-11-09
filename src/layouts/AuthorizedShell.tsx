import {
  NavLink as RouterNavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import {
  AppShell,
  Box,
  Burger,
  Button,
  Group,
  NavLink,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconFolder,
  IconFolders,
  IconLogout,
  IconUser,
} from '@tabler/icons-react'
import { useAppContext } from '@/core/context'

const navItems = [
  {
    label: 'My Grants',
    to: '/dashboard/my-grants',
    icon: IconFolder,
  },
  {
    label: 'All Grants',
    to: '/dashboard/grants',
    icon: IconFolders,
  },
  {
    label: 'Profile',
    to: '/dashboard/profile',
    icon: IconUser,
  },
] as const

export function AuthorizedShell() {
  const navigate = useNavigate()
  const location = useLocation()
  const [opened, { toggle, close }] = useDisclosure()
  const { accountInfo, setAuthToken, setAccountInfo } = useAppContext()

  function handleSignOut() {
    setAuthToken('')
    setAccountInfo(null)
    navigate('/login', { replace: true })
  }

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: 260,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
      styles={{
        main: {
          background:
            'linear-gradient(165deg, #d9e8eb 0%, #eef5f6 48%, #d5e4e8 100%)',
          minHeight: '100dvh',
        },
        header: {
          background: 'rgba(255, 255, 255, 0.86)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(15, 107, 99, 0.12)',
        },
        navbar: {
          background: 'rgba(255, 255, 255, 0.94)',
          borderRight: '1px solid rgba(15, 107, 99, 0.12)',
        },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="sm">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Box>
              <Title order={4} c="var(--ink)">
                Grant Tracker
              </Title>
              <Text size="xs" c="dimmed" visibleFrom="sm">
                {accountInfo?.email ?? 'Authorized workspace'}
              </Text>
            </Box>
          </Group>

          <Button
            variant="light"
            color="slate.8"
            leftSection={<IconLogout size={16} />}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap={6}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              component={RouterNavLink}
              to={item.to}
              label={item.label}
              leftSection={<item.icon size={18} stroke={1.7} />}
              active={location.pathname.startsWith(item.to)}
              onClick={close}
              style={{ borderRadius: 10 }}
            />
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Box maw={1100} mx="auto" w="100%">
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  )
}
