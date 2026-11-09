import { Box, Stack, Text, Title } from '@mantine/core'
import { LoginForm } from '../components/LoginForm'

export function LoginPage() {
  return (
    <Box
      component="main"
      pos="relative"
      mih="100dvh"
      px="md"
      py="xl"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        aria-hidden
        pos="absolute"
        inset={0}
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(26,154,143,0.22), transparent 42%), radial-gradient(ellipse at bottom right, rgba(10,69,64,0.18), transparent 40%), linear-gradient(165deg, #d9e8eb 0%, #eef5f6 48%, #d5e4e8 100%)',
        }}
      />
      <Box
        aria-hidden
        className="bg-orb"
        pos="absolute"
        left={-96}
        top={40}
        w={288}
        h={288}
        style={{
          borderRadius: '9999px',
          background:
            'radial-gradient(circle, rgba(26,154,143,0.35), transparent 68%)',
          filter: 'blur(32px)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        className="bg-orb"
        pos="absolute"
        right={-64}
        bottom={0}
        w={320}
        h={320}
        style={{
          borderRadius: '9999px',
          background:
            'radial-gradient(circle, rgba(12,20,25,0.14), transparent 70%)',
          filter: 'blur(32px)',
          pointerEvents: 'none',
          animationDelay: '-7s',
        }}
      />
      <Box
        aria-hidden
        pos="absolute"
        inset={0}
        style={{
          opacity: 0.35,
          backgroundImage:
            'linear-gradient(rgba(12,20,25,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(12,20,25,0.035) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
        }}
      />

      <Stack
        pos="relative"
        maw={512}
        w="100%"
        align="center"
        gap="xl"
        style={{ zIndex: 1 }}
        className="animate-fade-up"
      >
        <Stack gap="xs" ta="center" maw={420}>
          <Title order={1} c="var(--ink)">
            Grant Tracker
          </Title>
          <Text c="var(--ink-soft)" size="lg">
            Sign in to manage grants, reporting, and team access in one place.
          </Text>
        </Stack>

        <LoginForm />
      </Stack>
    </Box>
  )
}
