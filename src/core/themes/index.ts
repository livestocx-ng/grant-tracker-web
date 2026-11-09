import { createTheme, rem } from '@mantine/core'

export const theme = createTheme({
  fontFamily: 'Manrope, sans-serif',
  headings: {
    fontFamily: '"Bricolage Grotesque", sans-serif',
    sizes: {
      h1: { fontSize: rem(40), fontWeight: '700' },
      h2: { fontSize: rem(28), fontWeight: '700' },
    },
  },
  primaryColor: 'teal',
  defaultRadius: 'md',
  colors: {
    teal: [
      '#e8f7f5',
      '#d1efeb',
      '#a3dfd7',
      '#6cc9be',
      '#3aafa3',
      '#1a9a8f',
      '#0f6b63',
      '#0a4540',
      '#083833',
      '#052622',
    ],
  },
  components: {
    TextInput: {
      defaultProps: {
        radius: 'md',
        size: 'md',
      },
      styles: {
        label: {
          fontWeight: 500,
          marginBottom: rem(6),
        },
      },
    },
    PasswordInput: {
      defaultProps: {
        radius: 'md',
        size: 'md',
      },
      styles: {
        label: {
          fontWeight: 500,
          marginBottom: rem(6),
        },
      },
    },
    Button: {
      defaultProps: {
        radius: 'md',
        fw: 600,
      },
    },
  },
})
