import {
  Button,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import type { SigninDTO } from '@/core/sdk/auth'
import useLoginMutation from '@/core/hooks/auth/useLoginMutation'

export function LoginForm() {
  const { isPending, mutate } = useLoginMutation()

  const form = useForm<SigninDTO>({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => {
        if (!value.trim()) {
          return 'Email is required'
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Enter a valid email address'
        }

        return null
      },
      password: (value) => (value ? null : 'Password is required'),
    },
  })

  function handleSubmit(values: SigninDTO) {
    mutate({
      email: values.email.trim().toLowerCase(),
      password: values.password,
    })
  }

  return (
    <Paper
      component="form"
      onSubmit={form.onSubmit(handleSubmit)}
      noValidate
      w="100%"
      maw={440}
      p={{ base: 'lg', sm: 'xl' }}
      radius="lg"
      withBorder
      className="animate-fade-up-delay"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--surface-border)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 24px 60px rgba(12, 20, 25, 0.12)',
      }}
    >
      <Stack gap="md">
        <TextInput
          label="Email"
          placeholder="diolaakindel@gmail.com"
          autoComplete="email"
          disabled={isPending}
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          autoComplete="current-password"
          disabled={isPending}
          {...form.getInputProps('password')}
        />

        <Button
          type="submit"
          fullWidth
          mt="sm"
          size="md"
          color="teal.7"
          loading={isPending}
        >
          Sign in
        </Button>
      </Stack>
    </Paper>
  )
}
