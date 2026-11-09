import { useEffect } from 'react'
import { Button, Group, Modal, Stack, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import type {
  GrantApplicationInfo,
  UpdateGrantApplicationDto,
} from '@/core/sdk/grant-tracker'
import useUpdateGrantApplicationMutation from '@/core/hooks/grant/useUpdateGrantApplicationMutation'

type UpdateGrantApplicationModalProps = {
  opened: boolean
  onClose: () => void
  grant: GrantApplicationInfo | null
}

function toDateTimeLocalValue(value?: string) {
  if (!value) {
    return ''
  }

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }

  const pad = (n: number) => String(n).padStart(2, '0')
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`
}

function toIsoDeadline(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return date.toISOString()
}

export function UpdateGrantApplicationModal({
  opened,
  onClose,
  grant,
}: UpdateGrantApplicationModalProps) {
  const { isPending, mutate } = useUpdateGrantApplicationMutation()

  const form = useForm<UpdateGrantApplicationDto>({
    initialValues: {
      name: '',
      applicationUrl: '',
      deadline: '',
    },
    validate: {
      name: (value) => (value.trim() ? null : 'Name is required'),
      applicationUrl: (value) => {
        if (!value.trim()) {
          return 'Application URL is required'
        }
        try {
          new URL(value)
          return null
        } catch {
          return 'Enter a valid URL'
        }
      },
      deadline: (value) => (value ? null : 'Deadline is required'),
    },
  })

  useEffect(() => {
    if (!grant || !opened) {
      return
    }

    form.setValues({
      name: grant.name ?? '',
      applicationUrl: grant.applicationUrl ?? '',
      deadline: toDateTimeLocalValue(grant.deadline),
    })
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grant?.id, opened])

  function handleSubmit(values: UpdateGrantApplicationDto) {
    if (!grant) {
      return
    }

    mutate(
      {
        grantApplicationId: Number(grant.id),
        values: {
          name: values.name.trim(),
          applicationUrl: values.applicationUrl.trim(),
          deadline: toIsoDeadline(values.deadline),
        },
      },
      {
        onSuccess: () => onClose(),
      },
    )
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      radius="lg"
      size="lg"
      title="Update grant application"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput
            size="md"
            label="Name"
            placeholder="Grant name"
            disabled={isPending}
            {...form.getInputProps('name')}
          />
          <TextInput
            size="md"
            label="Application URL"
            placeholder="https://..."
            disabled={isPending}
            {...form.getInputProps('applicationUrl')}
          />
          <TextInput
            size="md"
            type="datetime-local"
            label="Deadline"
            disabled={isPending}
            {...form.getInputProps('deadline')}
          />
          <Group justify="flex-end" mt="sm">
            <Button
              size="md"
              variant="default"
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button size="md" color="teal" type="submit" loading={isPending}>
              Save changes
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  )
}
