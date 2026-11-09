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

type UpdateGrantFormValues = {
  applicationUrl: string
  deadline: string
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

  const form = useForm<UpdateGrantFormValues>({
    initialValues: {
      applicationUrl: '',
      deadline: '',
    },
    validate: {
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
    },
  })

  useEffect(() => {
    if (!grant || !opened) {
      return
    }

    form.setValues({
      applicationUrl: grant.applicationUrl ?? '',
      deadline: toDateTimeLocalValue(grant.deadline),
    })
    form.clearErrors()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grant?.id, opened])

  function handleSubmit(values: UpdateGrantFormValues) {
    if (!grant) {
      return
    }

    const payload: UpdateGrantApplicationDto = {
      applicationUrl: values.applicationUrl.trim(),
      ...(values.deadline
        ? { deadline: toIsoDeadline(values.deadline) }
        : {}),
    }

    mutate(
      {
        grantApplicationId: Number(grant.id),
        values: payload,
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
            label="Application URL"
            placeholder="https://..."
            disabled={isPending}
            {...form.getInputProps('applicationUrl')}
          />
          <TextInput
            size="md"
            type="datetime-local"
            label="Deadline (optional)"
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
