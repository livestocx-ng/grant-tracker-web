import { useEffect } from 'react'
import {
  Button,
  Group,
  Loader,
  Modal,
  MultiSelect,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import type { AddGrantApplicationDto } from '@/core/sdk/grant-tracker'
import useAddGrantApplicationMutation from '@/core/hooks/grant/useAddGrantApplicationMutation'
import useFetchAllAssigneesQuery from '@/core/hooks/grant/useFetchAllAssigneesQuery'

type AddGrantApplicationModalProps = {
  opened: boolean
  onClose: () => void
}

type AddGrantFormValues = {
  name: string
  applicationUrl: string
  deadline: string
  assignees: string[]
}

function toIsoDeadline(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return value
  }
  return date.toISOString()
}

export function AddGrantApplicationModal({
  opened,
  onClose,
}: AddGrantApplicationModalProps) {
  const { isPending, mutate } = useAddGrantApplicationMutation()
  const {
    data: assignees = [],
    isLoading: isLoadingAssignees,
    isFetching: isFetchingAssignees,
  } = useFetchAllAssigneesQuery({
    enabled: opened,
  })

  const form = useForm<AddGrantFormValues>({
    initialValues: {
      name: '',
      applicationUrl: '',
      deadline: '',
      assignees: [],
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
    if (!opened) {
      return
    }

    form.reset()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened])

  const assigneeOptions = assignees.map((account) => ({
    value: String(account.id),
    label: `${[account.firstName, account.lastName].filter(Boolean).join(' ')} (${account.email})`,
  }))

  function handleAssigneesChange(selectedIds: string[]) {
    form.setFieldValue('assignees', selectedIds)
  }

  function handleSubmit(values: AddGrantFormValues) {
    const payload = {
      name: values.name.trim(),
      applicationUrl: values.applicationUrl.trim(),
      deadline: toIsoDeadline(values.deadline),
      // API validates assignees as numbers; MultiSelect stores string values
      assignees: values.assignees.map((id) => Number(id)),
      assignToSelf: false,
    } as unknown as AddGrantApplicationDto

    mutate(payload, {
      onSuccess: () => onClose(),
    })
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      radius="lg"
      size="lg"
      title="Add grant application"
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

          <Stack gap={6}>
            <Group gap={8} justify="space-between">
              <Text size="sm" fw={500}>
                Assignees
              </Text>
              {isFetchingAssignees ? <Loader size={14} color="teal" /> : null}
            </Group>
            {isLoadingAssignees ? (
              <Group justify="center" py="sm">
                <Loader size="sm" color="teal" />
              </Group>
            ) : (
              <MultiSelect
                size="md"
                placeholder={
                  assigneeOptions.length
                    ? 'Select assignees'
                    : 'No assignees available'
                }
                data={assigneeOptions}
                value={form.values.assignees}
                onChange={handleAssigneesChange}
                searchable
                clearable
                disabled={isPending || assigneeOptions.length === 0}
                nothingFoundMessage="No matching people"
                error={form.errors.assignees}
              />
            )}
          </Stack>

          <Group justify="flex-end" mt="sm">
            {/* <Button
              size="md"
              variant="default"
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </Button> */}
            <Button size="md" color="teal" type="submit" w="100%" loading={isPending}>
              Submit
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  )
}
