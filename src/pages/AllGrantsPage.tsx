import { useMemo, useState } from 'react'
import {
	Anchor,
	Badge,
	Button,
	Center,
	Group,
	Loader,
	Paper,
	Stack,
	Table,
	Text,
	Title,
} from '@mantine/core'
import { IconEye, IconPencil, IconPlus } from '@tabler/icons-react'
import { AddGrantApplicationModal } from '@/components/grants/AddGrantApplicationModal'
import { GrantApplicationDetailsModal } from '@/components/grants/GrantApplicationDetailsModal'
import { UpdateGrantApplicationModal } from '@/components/grants/UpdateGrantApplicationModal'
import { useAppContext } from '@/core/context'
import useFetchGrantApplicationsQuery from '@/core/hooks/grant/useFetchGrantApplicationsQuery'
import {
	formatStatusLabel,
	statusBadgeColor,
} from '@/core/utils/grant-status'

function formatDate(value?: string) {
	if (!value) {
		return '—'
	}

	const date = new Date(value)
	if (Number.isNaN(date.getTime())) {
		return value
	}

	return new Intl.DateTimeFormat(undefined, {
		dateStyle: 'medium',
	}).format(date)
}

export function AllGrantsPage() {
	const { grantApplications } = useAppContext()
	const [selectedGrantId, setSelectedGrantId] = useState<string | null>(null)
	const [editingGrantId, setEditingGrantId] = useState<string | null>(null)
	const [addGrantOpened, setAddGrantOpened] = useState(false)

	const { isLoading, isFetching, isError, refetch } =
		useFetchGrantApplicationsQuery({
			currentPage: 1,
		})

	const selectedGrant = useMemo(
		() =>
			grantApplications.find((grant) => grant.id === selectedGrantId) ??
			null,
		[grantApplications, selectedGrantId],
	)

	const editingGrant = useMemo(
		() =>
			grantApplications.find((grant) => grant.id === editingGrantId) ??
			null,
		[grantApplications, editingGrantId],
	)

	const showInitialLoader = isLoading && grantApplications.length === 0

	return (
		<Stack gap="lg">
			<Group justify="space-between" align="flex-start">
				<Stack gap={4}>
					<Title order={2} c="var(--ink)">
						All Grants
					</Title>
					<Text c="var(--ink-soft)">
						Browse every grant application tracked across Afritint.
					</Text>
				</Stack>
				<Group gap="sm">
					<Button
						variant="filled"
						color="teal"
						leftSection={<IconPlus size={16} />}
						onClick={() => setAddGrantOpened(true)}
					>
						Add grant
					</Button>
					<Button
						variant="light"
						color="teal"
						loading={isFetching}
						onClick={() => refetch()}
					>
						Refresh
					</Button>
				</Group>
			</Group>

			<Paper p="md" radius="lg" withBorder bg="white">
				{showInitialLoader ? (
					<Center py="xl">
						<Loader color="teal" />
					</Center>
				) : null}

				{isError ? (
					<Center py="xl">
						<Stack align="center" gap="sm">
							<Text c="dimmed">
								Could not load grant applications.
							</Text>
							<Button
								variant="light"
								color="teal"
								onClick={() => refetch()}
							>
								Try again
							</Button>
						</Stack>
					</Center>
				) : null}

				{!showInitialLoader &&
				!isError &&
				grantApplications.length === 0 ? (
					<Center py="xl">
						<Text c="dimmed">No grant applications found yet.</Text>
					</Center>
				) : null}

				{!showInitialLoader &&
				!isError &&
				grantApplications.length > 0 ? (
					<Table.ScrollContainer minWidth={760}>
						<Table striped highlightOnHover verticalSpacing="md">
							<Table.Thead>
								<Table.Tr>
									<Table.Th></Table.Th>
									<Table.Th>Name</Table.Th>
									<Table.Th>Date added</Table.Th>
									<Table.Th>Deadline</Table.Th>
									<Table.Th>Status</Table.Th>
									<Table.Th>Assigned To</Table.Th>
									<Table.Th>Application</Table.Th>
									<Table.Th></Table.Th>
								</Table.Tr>
							</Table.Thead>
							<Table.Tbody>
								{grantApplications.map((grant, index) => (
									<Table.Tr key={grant.id}>
										<Table.Td>
											<Text size="sm" c="dimmed">
												{index + 1}
											</Text>
										</Table.Td>
										<Table.Td>
											<Text size="sm" fw={600}>{grant.name}</Text>
										</Table.Td>
										<Table.Td>
											<Text size="sm">
												{formatDate(grant.dateAdded)}
											</Text>
										</Table.Td>
										<Table.Td>
											<Text size="sm">
												{formatDate(grant.deadline)}
											</Text>
										</Table.Td>
										<Table.Td>
											<Badge
												color={statusBadgeColor(grant.status)}
												variant="light"
												tt="capitalize"
											>
												{formatStatusLabel(grant.status)}
											</Badge>
										</Table.Td>
										<Table.Td>
											<Badge color="teal" variant="light">
												{grant.assignees?.length ?? 0}
											</Badge>
										</Table.Td>
										<Table.Td>
											<Anchor
												href={grant.applicationUrl}
												target="_blank"
												rel="noreferrer"
												size="sm"
											>
												Open link
											</Anchor>
										</Table.Td>
										<Table.Td>
											<Group gap={6} wrap="nowrap">
												<Button
													size="xs"
													variant="light"
													color="teal"
													leftSection={<IconEye size={14} />}
													onClick={() =>
														setSelectedGrantId(grant.id)
													}
												>
													View
												</Button>
												<Button
													size="xs"
													variant="light"
													color="gray"
													leftSection={<IconPencil size={14} />}
													onClick={() =>
														setEditingGrantId(grant.id)
													}
												>
													Edit
												</Button>
											</Group>
										</Table.Td>
									</Table.Tr>
								))}
							</Table.Tbody>
						</Table>
					</Table.ScrollContainer>
				) : null}
			</Paper>

			<GrantApplicationDetailsModal
				opened={Boolean(selectedGrantId)}
				grant={selectedGrant}
				onClose={() => setSelectedGrantId(null)}
			/>

			<UpdateGrantApplicationModal
				opened={Boolean(editingGrantId)}
				grant={editingGrant}
				onClose={() => setEditingGrantId(null)}
			/>

			<AddGrantApplicationModal
				opened={addGrantOpened}
				onClose={() => setAddGrantOpened(false)}
			/>
		</Stack>
	)
}
