import {useEffect, useState} from 'react';
import {
	ActionIcon,
	Box,
	Button,
	Divider,
	Group,
	Loader,
	Modal,
	MultiSelect,
	Paper,
	Select,
	SimpleGrid,
	Stack,
	Text,
	ThemeIcon,
	Title,
	Tooltip,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {
	IconCalendarDue,
	IconCalendarPlus,
	IconTrash,
	IconUserMinus,
	IconUserPlus,
	IconUsers,
} from '@tabler/icons-react';
import type {
	GrantApplicationInfo,
	GrantControllerUpdateGrantApplicationStatusStatusEnum,
} from '@/core/sdk/grant-tracker';
import useAddGrantApplicationAssigneesMutation from '@/core/hooks/grant/useAddGrantApplicationAssigneesMutation';
import useDeleteGrantApplicationMutation from '@/core/hooks/grant/useDeleteGrantApplicationMutation';
import useFetchUnassignedGrantApplicationAssigneesQuery from '@/core/hooks/grant/useFetchUnassignedGrantApplicationAssigneesQuery';
import useRemoveGrantApplicationAssigneesMutation from '@/core/hooks/grant/useRemoveGrantApplicationAssigneesMutation';
import useUpdateGrantApplicationStatusMutation from '@/core/hooks/grant/useUpdateGrantApplicationStatusMutation';
import {GRANT_STATUS_OPTIONS} from '@/core/utils/grant-status';

type GrantApplicationDetailsModalProps = {
	opened: boolean;
	onClose: () => void;
	grant: GrantApplicationInfo | null;
};

function formatDate(value?: string) {
	if (!value) {
		return '—';
	}

	const date = new Date(value);
	if (Number.isNaN(date.getTime())) {
		return value;
	}

	return new Intl.DateTimeFormat(undefined, {
		dateStyle: 'medium',
		timeStyle: 'short',
	}).format(date);
}

function personName(person?: {
	firstName?: string;
	lastName?: string;
	email?: string;
}) {
	if (!person) {
		return 'Unknown';
	}

	const fullName = [person.firstName, person.lastName]
		.filter(Boolean)
		.join(' ');
	return fullName || person.email || 'Unknown';
}

export function GrantApplicationDetailsModal({
	opened,
	onClose,
	grant,
}: GrantApplicationDetailsModalProps) {
	const [status, setStatus] = useState<string | null>(grant?.status ?? null);
	const [assigneeIds, setAssigneeIds] = useState<string[]>([]);
	const [deleteOpened, {open: openDelete, close: closeDelete}] =
		useDisclosure(false);
	const [assigneeToRemove, setAssigneeToRemove] = useState<{
		id: string;
		name: string;
	} | null>(null);

	const updateStatusMutation = useUpdateGrantApplicationStatusMutation();
	const deleteMutation = useDeleteGrantApplicationMutation();
	const addAssigneesMutation = useAddGrantApplicationAssigneesMutation();
	const removeAssigneesMutation =
		useRemoveGrantApplicationAssigneesMutation();

	const grantApplicationId = grant ? Number(grant.id) : undefined;
	const {
		data: unassignedAssignees = [],
		isLoading: isLoadingUnassignedAssignees,
		isFetching: isFetchingUnassignedAssignees,
	} = useFetchUnassignedGrantApplicationAssigneesQuery({
		grantApplicationId,
		enabled: opened && Boolean(grantApplicationId),
	});

	useEffect(() => {
		setStatus(grant?.status ?? null);
		setAssigneeIds([]);
		setAssigneeToRemove(null);
		closeDelete();
	}, [grant?.id, grant?.status, opened, closeDelete]);

	if (!grant) {
		return (
			<Modal
				opened={opened}
				onClose={onClose}
				centered
				title='Grant details'
			>
				<Text size='sm' c='dimmed'>
					No grant selected.
				</Text>
			</Modal>
		);
	}

	const selectedGrant = grant;
	const isBusy =
		updateStatusMutation.isPending ||
		deleteMutation.isPending ||
		addAssigneesMutation.isPending ||
		removeAssigneesMutation.isPending;

	const unassignedAssigneeOptions = unassignedAssignees.map((account) => ({
		value: account.id,
		label: `${[account.firstName, account.lastName].filter(Boolean).join(' ')} (${account.email})`,
	}));

	function handleUpdateStatus() {
		if (!status || status === selectedGrant.status) {
			return;
		}

		if (!grantApplicationId) {
			return;
		}

		updateStatusMutation.mutate(
			{
				grantApplicationId,
				status: status as GrantControllerUpdateGrantApplicationStatusStatusEnum,
			},
			{
				onSuccess: () => {
					onClose();
				},
			},
		);
	}

	function handleAddAssignees() {
		const ids = assigneeIds.map((id) => id.trim()).filter(Boolean);
		if (!grantApplicationId || ids.length === 0) {
			return;
		}

		addAssigneesMutation.mutate(
			{
				grantApplicationId,
				assigneeIds: ids,
			},
			{
				onSuccess: () => setAssigneeIds([]),
			},
		);
	}

	function handleDelete() {
		if (!grantApplicationId) {
			return;
		}

    // console.log('grantApplicationId', grantApplicationId);

    // return;

		deleteMutation.mutate(
			{
				grantApplicationId,
				grantApplicationKey: selectedGrant.id,
			},
			{
				onSuccess: () => {
					closeDelete();
					onClose();
				},
			},
		);
	}

	function handleRemoveAssignee() {
		if (!assigneeToRemove || !grantApplicationId) {
			return;
		}

		removeAssigneesMutation.mutate(
			{
				grantApplicationId,
				assigneeIds: [assigneeToRemove.id],
			},
			{
				onSuccess: () => setAssigneeToRemove(null),
			},
		);
	}

	return (
		<>
			<Modal
				opened={opened}
				onClose={onClose}
				centered
				size='lg'
				radius='lg'
				padding='md'
				overlayProps={{
					backgroundOpacity: 0.35,
					blur: 6,
				}}
				styles={{
					content: {
						background:
							'linear-gradient(180deg, #f7fbfb 0%, #ffffff 28%)',
						border: '1px solid rgba(15, 107, 99, 0.12)',
						boxShadow: '0 28px 80px rgba(12, 20, 25, 0.18)',
					},
					header: {
						paddingBottom: 4,
					},
					body: {
						paddingTop: 4,
					},
					title: {
						fontSize: 14,
					},
				}}
				title={
					<Stack gap={6}>
						{/* <Group gap={6} wrap="wrap">
							<Badge
								size="xs"
								color={statusBadgeColor(selectedGrant.status)}
								variant="light"
								tt="capitalize"
								radius="sm"
							>
								{formatStatusLabel(selectedGrant.status)}
							</Badge>
							<Badge size="xs" color="teal" variant="outline" radius="sm">
								{selectedGrant.assignees?.length ?? 0} assigned
							</Badge>
						</Group> */}
						<Title
							order={5}
							c='var(--ink)'
							fz='md'
							style={{fontFamily: 'var(--font-display)'}}
						>
							{selectedGrant.name}
						</Title>
					</Stack>
				}
			>
				<Stack gap='md'>
					{/* <Paper
						radius="md"
						p="sm"
						withBorder
						style={{
							background: 'rgba(15, 107, 99, 0.04)',
							borderColor: 'rgba(15, 107, 99, 0.12)',
						}}
					>
						<Group justify="space-between" align="flex-start" gap="sm">
							<Group gap="xs" align="flex-start" style={{ flex: 1 }}>
								<ThemeIcon
									size={28}
									radius="md"
									variant="light"
									color="teal"
								>
									<IconLink size={14} />
								</ThemeIcon>
								<Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
									<Text size="10px" tt="uppercase" fw={700} c="dimmed">
										Application URL
									</Text>
									<Anchor
										href={selectedGrant.applicationUrl}
										target="_blank"
										rel="noreferrer"
										size="xs"
										fw={600}
										c="teal.8"
										style={{
											wordBreak: 'break-all',
											lineHeight: 1.4,
										}}
									>
										{selectedGrant.applicationUrl}
									</Anchor>
								</Stack>
							</Group>
							<Button
								component="a"
								href={selectedGrant.applicationUrl}
								target="_blank"
								rel="noreferrer"
								variant="light"
								color="teal"
								radius="md"
								size="xs"
								rightSection={<IconExternalLink size={12} />}
							>
								Open
							</Button>
						</Group>
					</Paper> */}

					<SimpleGrid cols={{base: 1, sm: 2}} spacing='sm'>
						<Paper
							radius='md'
							p='sm'
							withBorder
							bg='yellow.0'
							style={{
								borderColor: 'var(--mantine-color-yellow-3)',
							}}
						>
							<Group gap='xs' align='flex-start'>
								<ThemeIcon
									size={28}
									radius='md'
									variant='light'
									color='yellow'
								>
									<IconCalendarDue size={14} />
								</ThemeIcon>
								<Stack gap={1}>
									<Text
										size='10px'
										tt='uppercase'
										fw={700}
										c='yellow.8'
									>
										Deadline
									</Text>
									<Text size='sm' fw={600} c='yellow.9'>
										{formatDate(selectedGrant.deadline)}
									</Text>
								</Stack>
							</Group>
						</Paper>

						<Paper radius='md' p='sm' withBorder bg='white'>
							<Group gap='xs' align='flex-start'>
								<ThemeIcon
									size={28}
									radius='md'
									variant='light'
									color='gray'
								>
									<IconCalendarPlus size={14} />
								</ThemeIcon>
								<Stack gap={1}>
									<Text
										size='10px'
										tt='uppercase'
										fw={700}
										c='dimmed'
									>
										Date added
									</Text>
									<Text size='sm' fw={600} c='var(--ink)'>
										{formatDate(selectedGrant.dateAdded)}
									</Text>
								</Stack>
							</Group>
						</Paper>
					</SimpleGrid>

					<Paper radius='md' p='sm' withBorder bg='white'>
						<Stack gap='sm'>
							<Text
								size='10px'
								tt='uppercase'
								fw={700}
								c='dimmed'
							>
								Update status
							</Text>
							<Group
								align='flex-end'
								grow
								preventGrowOverflow={false}
							>
								<Select
									size='xs'
									label='Status'
									placeholder='Select status'
									data={GRANT_STATUS_OPTIONS.map(
										(option) => ({
											value: option.value,
											label: option.label,
										}),
									)}
									value={status}
									onChange={setStatus}
									disabled={isBusy}
									styles={{
										label: {fontSize: 11, marginBottom: 4},
									}}
									style={{flex: 1}}
								/>
								<Button
									size='xs'
									color='teal'
									onClick={handleUpdateStatus}
									loading={updateStatusMutation.isPending}
									disabled={
										!status ||
										status === selectedGrant.status
									}
								>
									Save status
								</Button>
							</Group>
						</Stack>
					</Paper>

					<Divider
						label={
							<Group gap={4}>
								<IconUsers size={12} />
								<Text size='xs' fw={700}>
									People assigned
								</Text>
							</Group>
						}
						labelPosition='left'
					/>

					<Paper radius='md' p='sm' withBorder bg='white'>
						<Stack gap='xs'>
							<Group gap={4} justify='space-between'>
								<Group gap={4}>
									<IconUserPlus size={14} />
									<Text size='sm' fw={600}>
										Add assignees
									</Text>
								</Group>
								{isFetchingUnassignedAssignees ? (
									<Loader size={14} color='teal' />
								) : null}
							</Group>
							<Text size='xs' c='dimmed'>
								Select people who are not yet assigned to this
								grant.
							</Text>
							{isLoadingUnassignedAssignees ? (
								<Group justify='center' py='xs'>
									<Loader size='sm' color='teal' />
								</Group>
							) : (
								<MultiSelect
									size='xs'
									placeholder={
										unassignedAssigneeOptions.length
											? 'Select assignees'
											: 'No unassigned people available'
									}
									data={unassignedAssigneeOptions}
									value={assigneeIds}
									onChange={setAssigneeIds}
									disabled={
										isBusy ||
										unassignedAssigneeOptions.length === 0
									}
									searchable
									clearable
									nothingFoundMessage='No matching people'
								/>
							)}
							<Button
								size='xs'
								leftSection={<IconUserPlus size={14} />}
								color='teal'
								variant='light'
								onClick={handleAddAssignees}
								loading={addAssigneesMutation.isPending}
								disabled={assigneeIds.length === 0}
							>
								Add assignees
							</Button>
						</Stack>
					</Paper>

					{selectedGrant.assignees?.length ? (
						<Stack gap='xs'>
							{selectedGrant.assignees.map((item) => (
								<Paper
									key={item.id}
									radius='md'
									p='sm'
									withBorder
									bg='white'
								>
									<Group
										justify='space-between'
										align='flex-start'
										gap='sm'
										wrap='nowrap'
									>
										<Group
											gap='xs'
											align='flex-start'
											style={{flex: 1}}
										>
											{/* <Avatar
												src={item.assignee?.profilePhoto || undefined}
												radius="xl"
												size={32}
												color="teal"
											>
												{personName(item.assignee).slice(0, 1)}
											</Avatar> */}
											<Stack gap={1}>
												<Text size='sm' fw={600}>
													{personName(item.assignee)}
												</Text>
												<Text size='xs' c='dimmed'>
													{item.assignee?.email ??
														'—'}
												</Text>
												{/* <Text size="10px" c="dimmed">
													ID: {item.assignee?.id ?? '—'}
												</Text> */}
											</Stack>
										</Group>

										<Group
											gap='xs'
											align='flex-start'
											wrap='nowrap'
										>
											<Box ta='right'>
												<Text
													size='10px'
													tt='uppercase'
													fw={700}
													c='dimmed'
												>
													Assigned by
												</Text>
												<Text size='xs' fw={600}>
													{personName(
														item.assignedBy,
													)}
												</Text>
												<Text
													size='10px'
													c='dimmed'
													mt={2}
												>
													{formatDate(
														item.assignedAt,
													)}
												</Text>
											</Box>
											<Tooltip label='Remove assignee'>
												<ActionIcon
													size='sm'
													variant='light'
													color='red'
													radius='md'
													disabled={isBusy}
													onClick={() =>
														setAssigneeToRemove({
															id: item.id,
															name: personName(
																item.assignee,
															),
														})
													}
												>
													<IconUserMinus size={14} />
												</ActionIcon>
											</Tooltip>
										</Group>
									</Group>
								</Paper>
							))}
						</Stack>
					) : (
						<Paper
							radius='md'
							p='md'
							withBorder
							style={{
								background: 'rgba(15, 107, 99, 0.03)',
								borderStyle: 'dashed',
								borderColor: 'rgba(15, 107, 99, 0.2)',
							}}
						>
							<Stack align='center' gap={4}>
								<ThemeIcon
									size={32}
									radius='xl'
									variant='light'
									color='teal'
								>
									<IconUsers size={16} />
								</ThemeIcon>
								<Text size='sm' fw={600}>
									No assignees yet
								</Text>
								<Text size='xs' c='dimmed' ta='center'>
									People assigned to this grant will show up
									here.
								</Text>
							</Stack>
						</Paper>
					)}

					<Divider />

					<Group justify='space-between'>
						<Button
							size='xs'
							variant='light'
							color='red'
              w="100%"
							leftSection={<IconTrash size={14} />}
							onClick={openDelete}
							disabled={isBusy}
						>
							Delete grant
						</Button>
						{/* <Button
							size='xs'
							variant='default'
							onClick={onClose}
							disabled={isBusy}
						>
							Close
						</Button> */}
					</Group>
				</Stack>
			</Modal>

			<Modal
				opened={deleteOpened}
				onClose={closeDelete}
				centered
				title={
					<Text size='sm' fw={700}>
						Delete grant application
					</Text>
				}
				radius='lg'
			>
				<Stack gap='sm'>
					<Text size='xs'>
						Are you sure you want to delete{' '}
						<Text span fw={700} size='xs'>
							{selectedGrant.name}
						</Text>
						? This cannot be undone.
					</Text>
					<Group justify='flex-end'>
						<Button
							size='xs'
							variant='default'
							onClick={closeDelete}
							disabled={isBusy}
						>
							Cancel
						</Button>
						<Button
							size='xs'
							color='red'
							loading={deleteMutation.isPending}
							onClick={handleDelete}
						>
							Delete
						</Button>
					</Group>
				</Stack>
			</Modal>

			<Modal
				opened={Boolean(assigneeToRemove)}
				onClose={() => setAssigneeToRemove(null)}
				centered
				title={
					<Text size='sm' fw={700}>
						Remove assignee
					</Text>
				}
				radius='lg'
			>
				<Stack gap='sm'>
					<Text size='xs'>
						Remove{' '}
						<Text span fw={700} size='xs'>
							{assigneeToRemove?.name}
						</Text>{' '}
						from this grant application?
					</Text>
					<Group justify='flex-end'>
						<Button
							size='xs'
							variant='default'
							onClick={() => setAssigneeToRemove(null)}
							disabled={isBusy}
						>
							Cancel
						</Button>
						<Button
							size='xs'
							color='red'
							loading={removeAssigneesMutation.isPending}
							onClick={handleRemoveAssignee}
						>
							Remove
						</Button>
					</Group>
				</Stack>
			</Modal>
		</>
	);
}
